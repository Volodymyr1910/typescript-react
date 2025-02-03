import { useFormik } from "formik";
import style from "./LoginSchema.module.css";
import * as yup from "yup";

interface ILoginSchemaValues {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("incorrect email format")
    .required("email is required"),
  password: yup
    .string()
    .min(8, "min length - 8 symbols")
    .required("this field is required"),
});

export default function LoginSchema(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as ILoginSchemaValues,
    validateOnChange: false,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className={style.mainContainer}>
      <h2>Login Form</h2>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          placeholder="user email"
          value={formik.values.email}
          type="text"
          name="email"
        />
        {formik.errors.email && (
          <span className={style.errorMessage}>{formik.errors.email}</span>
        )}

        <label htmlFor="password">Password</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          type="text"
          name="password"
        />
        {formik.errors.password && (
          <span className={style.errorMessage}>{formik.errors.password}</span>
        )}

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
