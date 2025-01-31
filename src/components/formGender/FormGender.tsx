 import { useFormik } from 'formik';
import style from './FormGender.module.css'
import Button from '../button/Button';
import { useState } from 'react';

interface IformGenderProps {
  text?: string;
}
interface IGender {
    name:string; gender: "male" | "female";
}
interface IformGender {
    userName:string;
}



export default function FormGender({ text = 'text' }: IformGenderProps): JSX.Element {
const [array, setArray] = useState<IGender[]>([]);

    const gender = useFormik({
       initialValues: {
        userName:""
       } as IformGender, 
       onSubmit: (values:IformGender)=> {
        getInfo(values.userName),
       clearInput()
       }
    }
    );

 async function getInfo(user_name) :Promise<void>{
    console.log(user_name);
    
    const res = await fetch (`https://api.genderize.io/?name=${user_name}`);
    const data = await res.json();
    const {name, gender} = data;
    setArray((prev)=>[...prev,{name, gender}]);
 }
function clear ():void{
    setArray([]);
}
function clearInput():void{
    gender.values.userName="";
}

  return (
    <div className={style.mainContainer}>
        <div className={style.inputZone} >
      <h3>Form</h3>
      <form onSubmit= {gender.handleSubmit} className={style.form}>
      <input onChange={gender.handleChange} value={gender.values.userName} type="text" name="userName" id="" />
      <Button type='submit' text='send data'/>
      </form>
     </div>

    {array && array.length > 0 && (
     <div className={style.outputZoneMainContainer}>
            <div className={style.outputZoneItemContainer}>
        <h3>Information about customers</h3>
        <div className={style.outputZoneItem}>
        {array.map((element, index) => (
            <div key={index} className={style.customer}>
            <p>Name: {element.name}</p>
            <p>Gender: {element.gender}</p>
            </div>
        ))}
        </div>
        </div>
         <Button type='button' func={clear} text='Clear customers list' className={style.clearbtn}/>
     </div>
    )}
    </div>
  )
}