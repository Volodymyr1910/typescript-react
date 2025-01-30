import ButtonDima from "../../components/buttonDima/ButtonDima";


export default function Homework_02() {
  return (
    <div>
    <div><ButtonDima type="button" func={()=> {}} colorVariant="danger" text="colorVariant=danger"/></div>
    <div><ButtonDima type="button" func={()=> {}} colorVariant="primary" text="colorVariant=primary"/></div>
    <div><ButtonDima type="button" func={()=> {}} disabled text="button disabled"/></div>
    <div><ButtonDima type="button" func={()=> {}} text="button active"/></div>
    </div>
  )
}

