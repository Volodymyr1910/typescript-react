import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Lesson_05 from "../lesson_05/Lesson_05";
// import ShowAllElements from "../../components/showAllElements/ShowAllElements";
// import { fellowshipArray, fellowshipArray2 } from "../lesson_05/fellowship";



  export default function Lesson_08(): JSX.Element {

    //! при каждом ре-рендеринге реакт считывает заново весь код в теле функции Lesson_08

    // изменения переменных состояния приведет к обновления и перерендеру компонента Lesson08
    const [count, setCount] = useState<number>(0);
    const [dog, setDog] = useState<string>('');
    const [toggle, setToggle] = useState<boolean>(false);
  
    // эта функция произведет ререндер компонента
    // потому что она меняет переменную состояния
    // (мы меняем count просто как пример для обновления компонента и нигде не выводим его)
    const handleIncrease = (): void => {
      setCount(prev => prev + 1);
    };
  
    // мы можем использовать useEffect, чтобы изолировать действия от многократного повторения при ререндере компонента
    
    //? компонент обновляется (ре-рендериться) в двух случаях:
    //* 1. обновления любой переменной состояния внутри него
    //* 2. обновления его входящих пропсов

    // если мы не хотим чтобы действие внутри тела функции компонента сработало заново
    // мы можем обернуть его в useEffect()
    useEffect(() => {
      console.log("сработал юз Ефект");
      
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        // если обновлять состояние в fetch запросе без useEffect() мы попадем в бесконечный цикл
        .then(data => setDog(data.message));
    }, []);
  
  
    // * эта строчка будет выводиться в консоль при каждом обновлении компонента
    console.log('lesson 8 render', dog);

    const handleToggle = ():void => {
      setToggle ((prev) => !prev)
    }
  
    return (
      <div>
        <h2>UseEffect + migrate components ⚡️</h2>
        {/* чтобы использовать типизированный компонент нужно передать все обязательные props, которые указаны в его interface  */}
        <p>чтобы использовать типизированный компонент нужно передать все обязательные props, которые указаны в его interface </p>
        <Button
          text="typescript button"
          func={() => console.log('click')}
          type="button"
        />
        <Button
          text="rerender component"
          func={handleIncrease}
          type="button"
        />
        <Button
          text={`${toggle ? "hide" : "show"} component`}
          func={handleToggle}
          type="button"
        />

      //! каждое новое появление компонента на странице - это новый жизненный цикл. Все юзЕфекты внутри него сработают заново
        {toggle && (<Lesson_05/>)}
       {/* <ShowAllElements array={fellowshipArray2}/> */}
      </div>
    );
  }
