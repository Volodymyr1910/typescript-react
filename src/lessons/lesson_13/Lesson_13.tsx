 import { useFormik } from 'formik';
import GenderForm from '../../components/genderForm/GenderForm';
import style from './Lesson_13.module.css'
import Button from '../../components/button/Button';
import * as yup from "yup";

interface IFormValues {
    model:string;
    creator:string;
    email:string;
}
//? валидация данных в форме
//* number() - проверка на число
//* typeError("message text") - сообщение пользователю об ошибке, в случае несоответствия типа
//* required("message text") - сообщение пользователю об ошибке, в случае если поле не заполнено
//* integer("message text") - сообщение пользователю об ошибке, в случае если число не целое
//* min(100,"message text").max(2000, "message text") - проверка на величину значения
// * string() - проверка, что введенное значение это строка
//* email("message text") -  проверка введенного значения на соответсвие формату емейлов
//* string().min(15, "message text").max(50, "message text") - для строковых значений методы проверяют количество символов
//* positive("message text") - проверка, что введенное значение больше 0
//* boolean() - проверка типа на булевое значение
//* date() - проверка соответствия формату даты
//* .string().oneOf(["admin", "user"], "Выберите admin или user") || .oneOf([значения], "message text") - проверка ввода на соответствие  фиксированным значениям
//* .string().matches(/^[A-Za-z]+$/, "Только буквы") - проверка ввода с ограничением - только английские буквы


const scheme = yup.object().shape({
    model:yup.number().typeError("model is a number").required("model is required").integer("model is a integer").min(100,"model number is more than 100").max(2000, "model number is less than 2000"),
    creator: yup.string().required("company name is required"),
    email: yup.string().email("incorrect email format").required("email is required").max(50, "less than 50 symbols, please")
})

export default function Lesson_13(): JSX.Element {
     const formik = useFormik ({
        initialValues: {
            model:"",
            creator:"",
            email:""
        } as IFormValues, 
        // отключаем валидацию по умолчанию на изменение в input
        //теперь сообщение по ошибке возникнет только по событию submit
        validateOnChange:false,
        // подключили валидацию нашей формы 
        validationSchema:scheme,
        //вторым аргументом приходит обьект, деструктуризируем и берем метод  resetForm(), который очищает поля после события submit
        onSubmit: (values, {resetForm})=>{
            console.log(values);
            resetForm();
        }
     });



  return (
    <div className={style.mainContainer}>
      <h2>Lesson_13</h2>

        <form className={style.robotForm} onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} placeholder='robot model' value={formik.values.model} type="text" name="model"/>
            <input onChange={formik.handleChange} placeholder='creator name' value={formik.values.creator} type="text" name="creator" />
            <input onChange={formik.handleChange} placeholder='company email' value={formik.values.email} type="text" name="email" />
            <Button type='submit' text='send'/>
        </form>
        <span className={style.errorMessage}>{formik.errors.model}</span>
        <span className={style.errorMessage}>{formik.errors.creator}</span>
        <span className={style.errorMessage}>{formik.errors.email}</span>

      <GenderForm/>
    </div>
  )
}

