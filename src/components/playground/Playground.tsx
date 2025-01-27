import { useEffect, useState } from "react"

export default function Playground () :JSX.Element{

    
const [numberOfDogs, setNumberOfDogs] = useState<number>(0)
   const [numberOfBirds, setNumberOfBirds] = useState<number>(0)

  function handleAddDog():void{
        setNumberOfDogs(numberOfDogs + 1)
    }
    function handleAddBird():void{
        setNumberOfBirds(numberOfBirds + 1)
    }

//! хук useEffect
//? Пример 1 - пустой массив зависимостей

 useEffect(()=>{
    console.log('UseEffect 1 - только при маунте ( первой отрисовке ) ')
  },[])

//? Пример 2 - без массива зависимостей
useEffect(()=>{
    console.log("UseEffect 2 - при маунте и при любых изменениях"); 
  })

//? Пример 3 - с указанием зависимостей
  useEffect(()=>{
    console.log("UseEffect 3 - при маунте и при изменении переменной numberOfDogs")
  },[numberOfDogs])

//? Пример 4 - с указанием зависимостей и дополнительным условием - не делать при первом рендере, а только при условии изменения переменной numberOfDogs
const [isMounted, setIsMounted] = useState<boolean>(false);

useEffect(() => {
  if (isMounted) {
    console.log("UseEffect 4 - при изменении переменной numberOfDogs");
  } else {
    setIsMounted(true); // Встановлюємо прапор після першого рендера
  }
}, [numberOfDogs]);


//? Пример 5 - с указанием зависимостей и дополнительным условием - не делать при первом рендере, а только при условии изменения обоих переменных numberOfDogs и numberOfBirds
const [previousValue, setPreviousValue] = useState<{dogs:number, birds:number}>({dogs:0, birds:0});

useEffect(() => {
    
    if (
      
      previousValue.dogs !== numberOfDogs && previousValue.birds !== numberOfBirds
     
    ) {
      console.log("UseEffect 5 - при изменении переменных numberOfDogs и numberOfBirds");
       setPreviousValue({ dogs: numberOfDogs, birds: numberOfBirds });
    }
  }, [numberOfDogs, numberOfBirds]);

//? Пример 6 - с указанием зависимостей и дополнительным условием - не делать при первом рендере, а только при условии ПЕРВОГО изменения обоих переменных numberOfDogs и numberOfBirds. Т.Е. функция должна отработать единоразово
const [flag, setFlag] = useState<boolean>(false);

useEffect(() => {
    if(
       !flag && numberOfDogs !== 0 && numberOfBirds !== 0
    ){

    console.log("UseEffect 6 - при изменении переменных  numberOfDogs и numberOfBirds, отработать 1 раз");
    setFlag(true);
  }

}, [numberOfDogs, numberOfBirds]);

//? Пример 7 - с указанием зависимостей и дополнительным условием - не делать при первом рендере, а сделать 5 раз при условии изменения обоих переменных numberOfDogs и numberOfBirds. Т.Е. функция должна отработать 5 раз
const [previousValue1, setPreviousValue1] = useState<{dogs:number, birds:number}>({dogs:0, birds:0});
const [counter, setCounter] = useState<number>(0);

useEffect(() => {
    // Перевіряємо умови
    if (
      counter < 5 &&
      previousValue1.dogs !== numberOfDogs &&
      previousValue1.birds !== numberOfBirds
    ) {
      console.log("UseEffect 7 - при изменении numberOfDogs и numberOfBirds, отработать 5 раз");
  
      // Оновлюємо стан тільки якщо умова виконана
      setCounter((prevCounter) => prevCounter + 1);
      setPreviousValue1({ dogs: numberOfDogs, birds: numberOfBirds });
    }
  }, [numberOfDogs, numberOfBirds]);

return (
    <div>
        <h1>Playground</h1>
        <p>Number of dogs: {numberOfDogs}</p>
        <p>Number of birds: {numberOfBirds}</p>
        <button type="button" onClick={handleAddDog}>Let the dog in</button>
        <button type="button" onClick={handleAddBird}>New bird is arriving</button>
    </div>
)
}

