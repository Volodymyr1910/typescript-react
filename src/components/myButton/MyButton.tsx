import "./MyButton.css"
interface IMyButtonProps {
    functionForButton:()=>void, text:string
}

// пример отдельного компонента кнопки.
function MyButton ({functionForButton, text}:IMyButtonProps) :JSX.Element{
    return  <button onClick={functionForButton} className="myButton">{text}</button>;
}
export default MyButton;