import "./MyInput_v2.css"
interface MyInput_v2Props {
name:string, type:"email" | "password" | "text" | "number", placeholder:string, label:string
}

export default function MyInput_v2 ({name,type,placeholder, label}:MyInput_v2Props):JSX.Element{
  return (
    <>
    <label>{label}</label>
    <input className="MyInput_v2" name={name} type={type} placeholder={placeholder}/>
   </>
  )
}
