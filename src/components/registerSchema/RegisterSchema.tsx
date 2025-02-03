import { useFormik } from "formik";
import style from "./RegisterSchema.module.css";
import * as yup from "yup";

interface IRegisterSchemaValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = yup.object().shape({
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

export default function RegisterSchema(): JSX.Element {
  const registerformik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    } as IRegisterSchemaValues,
    validateOnChange: false,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className={style.mainContainer}>
        <h2>Registration Form</h2>
      <form
        className={style.form}
        onSubmit={registerformik.handleSubmit}
      >
        
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
          type="text"
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
          type="text"
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
  );
}
