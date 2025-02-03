 import { useFormik } from 'formik'
import style from './GenderForm.module.css'
import { useState } from 'react'


// интерфейс для значений формы
interface IFormValues {
name:string
}

// интерфейс для данных из API
interface IFormData {
count: number, name:string,gender:string,probability:number
}

// начальное значение для useState
const initialData:IFormData = {
    count: 0,
    name: '',
    gender: '',
    probability: 0
}

export default function GenderForm(): JSX.Element {
    
const [genderData, setGenderData] = useState<IFormData>(initialData)

    const fetchGender = async (name:string) => {
    const res = await fetch (`https://api.genderize.io/?name=${name}`)
    const data:IFormData = await res.json();
    setGenderData(data);
    
    }

    const formik = useFormik({
        initialValues: {
            name:""
        } as IFormValues, 
        onSubmit:(values)=>{
            fetchGender(values.name)
        }
    });





  return (
    <div className={style.mainContainer}>
      <h3>Gender analyze</h3>
        <form onSubmit={formik.handleSubmit} className={style.genderForm}>
            <input onChange={formik.handleChange} type="text" placeholder='type your name' name="name" value={formik.values.name}/>
            <button type='submit' >send request</button>
        </form>
        {
        genderData.name && (
            <p>{genderData.name} is {genderData.gender === "male" ? "👨‍🦰":"👩"} {genderData.probability * 100}%</p>
        ) }

       
      
    </div>
  )
}