import "../myButton/MyButton.css"

interface IMyButtonProps {
    type:"submit" | "button" | "reset", text:string, func:()=>void
}
// пример отдельного компонента кнопки.
function MyButton ({type, text="click",func}:IMyButtonProps):JSX.Element{
    return  <button type={type} onClick={func} className="myButton">{text}</button>;
}
export default MyButton;