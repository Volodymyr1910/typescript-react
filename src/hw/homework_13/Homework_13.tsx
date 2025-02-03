import { useFormik } from "formik";
import { useState } from "react";
import style from "./Homework_13.module.css";
import * as yup from "yup";
import Button from "../../components/button/Button";
import LoginSchema from "../../components/loginSchema/LoginSchema";
import RegisterSchema from "../../components/registerSchema/RegisterSchema";

interface IHomework_13Props {
  text?: string;
}

interface IRegisterSchemaValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ILoginSchemaValues {
  email: string;
  password: string;
}

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[a-zA-Z0-9_]+$/, "use only letters, numbers & symbol _ ")
    .min(3, "min lenght - 3 symbols")
    .max(20, "max lenght - 20 symbols")
    .required("this field is required"),
  email: yup
    .string()
    .email("incorrect email format")
    .required("email is required"),
  password: yup
    .string()
    .min(8, "min length - 8 symbols")
    .max(32, "max length - 32 symbols")
    .required("this field is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "must contains at least one => uppercase, lower case, number, symbols: @$!%*?&"
    ),
  confirmPassword: yup
    .string()
    .required("this field is required")
    .oneOf([yup.ref("password")]),
});

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("incorrect email format")
    .required("email is required"),
  password: yup
    .string()
    .min(8, "min length - 8 symbols")
    .required("this field is required"),
});

export default function Homework_13({
  text = "text",
}: IHomework_13Props): JSX.Element {
  const [registerArray, setregisterArray] = useState<IRegisterSchemaValues[]>(
    []
  );
  const [loginArray, setloginArray] = useState<ILoginSchemaValues[]>([]);

  const registerformik = useFormik({
    initialValues: {
      username: "Test",
      email: "testemail@gmail.com",
      password: "Ay$123789",
      confirmPassword: "Ay$123789",
    } as IRegisterSchemaValues,
    validateOnChange: false,
    validationSchema: registerSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setregisterArray((prev) => [...prev, { ...values }]);
      resetForm();
    },
  });

  const loginformik = useFormik({
    initialValues: {
      email: "testemail@gmail.com",
      password: "Ay$123789",
    } as IRegisterSchemaValues,
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setloginArray((prev) => [...prev, { ...values }]);
      resetForm();
    },
  });

  function registerclear(): void {
    setregisterArray([]);
  }
  function loginclear(): void {
    setloginArray([]);
  }

  return (
    <>
      <div className={style.mainContainer}>
        <h2>Homework_13</h2>

        <div className={style.inputZoneMainContainer}>
          <div className={style.inputZoneItem}>
            <form className={style.form} onSubmit={registerformik.handleSubmit}>
              <input
                onChange={registerformik.handleChange}
                placeholder="user name"
                value={registerformik.values.username}
                type="text"
                name="username"
              />
              {registerformik.errors.username && (
                <span className={style.errorMessage}>
                  {registerformik.errors.username}
                </span>
              )}

              <input
                onChange={registerformik.handleChange}
                placeholder="user email"
                value={registerformik.values.email}
                type="text"
                name="email"
              />
              {registerformik.errors.email && (
                <span className={style.errorMessage}>
                  {registerformik.errors.email}
                </span>
              )}

              <label htmlFor="password">Password</label>
              <input
                onChange={registerformik.handleChange}
                value={registerformik.values.password}
                type="password"
                name="password"
              />
              {registerformik.errors.password && (
                <span className={style.errorMessage}>
                  {registerformik.errors.password}
                </span>
              )}

              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                onChange={registerformik.handleChange}
                value={registerformik.values.confirmPassword}
                type="password"
                name="password"
              />
              {registerformik.errors.confirmPassword && (
                <span className={style.errorMessage}>
                  {registerformik.errors.confirmPassword}
                </span>
              )}

              <button type="submit">Finish registration</button>
            </form>
          </div>
          <div className={style.inputZoneItem}>
            <form className={style.form} onSubmit={loginformik.handleSubmit}>
              <input
                onChange={loginformik.handleChange}
                placeholder="user email"
                value={loginformik.values.email}
                type="text"
                name="email"
              />
              {loginformik.errors.email && (
                <span className={style.errorMessage}>
                  {loginformik.errors.email}
                </span>
              )}

              <label htmlFor="password">Password</label>
              <input
                onChange={loginformik.handleChange}
                value={loginformik.values.password}
                type="password"
                name="password"
              />
              {loginformik.errors.password && (
                <span className={style.errorMessage}>
                  {loginformik.errors.password}
                </span>
              )}

              <button type="submit">Log In</button>
            </form>
          </div>
        </div>

        <div>
          {registerArray && registerArray.length > 0 && (
            <div className={style.outputZoneMainContainer}>
              <div className={style.outputZoneItemContainer}>
                <h2>Registered clients</h2>
                <div className={style.outputZoneItem}>
                  {registerArray.map((element, index) => (
                    <div key={index} className={style.client}>
                      <h3>Name: {element.username}</h3>
                      <p>Email: {element.email}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                type="button"
                func={registerclear}
                text="Clear the list"
                className={style.clearbtn}
              />
            </div>
          )}

          {loginArray && loginArray.length > 0 && (
            <div className={style.outputZoneMainContainer}>
              <div className={style.outputZoneItemContainer}>
                <h2>Logged clients</h2>
                <div className={style.outputZoneItem}>
                  {loginArray.map((element, index) => (
                    <div key={index} className={style.client}>
                      <p>Email: {element.email}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                type="button"
                func={loginclear}
                text="Clear the list"
                className={style.clearbtn}
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <LoginSchema />
        <RegisterSchema />
      </div>
    </>
  );
}
