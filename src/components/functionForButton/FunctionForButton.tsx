import MyButton from "../myButton/MyButton";


function FunctionForButton ():JSX.Element{
    function handleFunctionForButton(operation: number): void {
        alert(`The answer is: ${operation}`);
      }
    

return (
    <div>
        <MyButton functionForButton= {() => handleFunctionForButton(5+5)} text={"5 + 5"}/>
        <MyButton functionForButton= {() => handleFunctionForButton(5 * 5)} text={"5 * 5"}/>
        <MyButton functionForButton= {() => handleFunctionForButton(5 - 5)} text={"5 - 5"}/>
        </div>
)

}
export default FunctionForButton

