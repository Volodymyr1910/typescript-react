import { useState } from "react"
import "../lesson_04/Lesson_04.css"
// import Day from "./Day"


export default function Lesson_04(): JSX.Element {

    //! код нижче спрацював би в звичайному script.js, але він не оновлює дані на сторінці  react
    // let count = 0;
    // const handlePlus = () => {
    //     count++
    //     console.log(count);  
    // }

    //! використаємо функцію useState()
    // let result = useState(0); // в функцию передается начальное значение
    
    // let count = result[0];
    // let setCount = result[1];
   
    let [count, setCount] = useState<number>(0);

    const handlePlus = ():void => {
        setCount(variable => variable + 1);
    }

    const handleMinus = ():void  => {
        setCount(variable => variable - 1);
        //здесь может быть какая-то логика
        //return "result"
    }


  return (
    <div>
        {/* <Day /> */}
        <h2>React useState() hook 🎣</h2>
        <div className="counter">
            <button onClick={handleMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlePlus}>+</button>
        </div>

    </div>
  )
}

//### 1: Изменение булевого значения

// Создайте компонент, который позволяет управлять состоянием "включено/выключено". Начальное состояние должно быть `false`. При нажатии на кнопку, состояние должно переключаться, а текст на экране изменяться в зависимости от значения состояния: "День 🌞" / "Ночь 🌛"