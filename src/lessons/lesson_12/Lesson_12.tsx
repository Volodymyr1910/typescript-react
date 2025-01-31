 import { useFormik } from 'formik';
import style from './Lesson_12.module.css'
import Button from '../../components/button/Button';
import FormGender from '../../components/formGender/formGender';

interface ILesson_12Props {
  text?: string;
}

interface IFormValues {
    firstName:string; lastName:string; email:string;
}

export default function Lesson_12({ text = 'text' }: ILesson_12Props): JSX.Element {

    //! вызвали хук useFormik() и передали в него обьект с настройками для формы, результат работы хука положили в переменную для дальнейшей работы
    const formik = useFormik({
        //! initialValues - начальное значение инпутов и onSubmit - действие которое произойдет при событии submit =>  обязательные ключи
        initialValues: {
            firstName: "testName",
            lastName:"testSurname",
            email:"123@email.com"
        } as IFormValues, 
        //* действие которое случиться по нажатию на кнопку в форме
        onSubmit: (values:IFormValues)=>{
            console.log(values);
            
        }

    });



  return (
    <div className={style.mainContainer}>
      <h2>Lesson_12</h2>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <input onChange={formik.handleChange} value={formik.values.firstName} name="firstName" type="text" placeholder='first name'/>
        <input onChange={formik.handleChange} value={formik.values.lastName} name="lastName" type="text" placeholder='last name'/>
        <input onChange={formik.handleChange} value={formik.values.email} name="email" type="email" placeholder='email'/>
        <Button type='submit' text='send data'/>
      </form>
      <h3>Что нужно сделать чтобы форма заработала:</h3>
      <ol className={style.formGuide}>
        <li>Установили formik через 'npm i formik'</li>
        <li>Создали объект formik в который присвоили результат вызова хука useFormik() c настройками в объекте</li>
        <li>В объекте два обязательных ключа: initialValues (начальные значения), onSubmit(действие формы)</li>
        <li>Для form добавили в onSubmit - formik.handleSubmit </li>
        <li>Для input добавили в onChange - formik.handleChange </li>
        <li>Для input в value добавили его значение через formik.values </li>
        <li>У input в поле name должно быть то же значение, что и соответствующий ключ в initialValues</li>
      </ol>
      
        <FormGender/>
    </div>
  )
}