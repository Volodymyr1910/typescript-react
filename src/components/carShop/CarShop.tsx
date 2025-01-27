import Bike from "../bike/Bike"
import Car from "../car/Car"

//вариант 1 - для подгрузки локального фото
import variant1 from "../carShop/assets/mercedes.jpg"




export default function CarShop() : JSX.Element{
  return (
    <div>
        <h1>Car Shop</h1>
        <h2>Cars</h2>
        <Car brand="Mercedes" color= "black"/>
        <Car brand="Opel" color= "yellow"/>
        <Car brand="Tesla" color= "green"/>
        <Car brand="Lada" color= "blue"/>
        <Car brand="Audi" color= "pink"/>

        <h2>Вариант 1 -  подгрузить локальное изображение, через импорт</h2>
        <img src={variant1} alt="mercedes photo" />

        <h2>Bikes</h2>
        <Bike brand="Suzuki" gears={20} price={40_000}/>
        <Bike brand="Harley Davidson" gears={14} price={60_000}/>
        <Bike brand="Alpine" gears={24} price={50_000}/>
        <Bike brand="Honda" gears={24} price={45_000}/>
        <Bike brand="Java" gears={7} price={2000}/>

        <h2>Вариант 2 -  подгрузить локальное изображение, из папки public, вводим просто имя файла</h2>
        <img src="th.jpg" alt="th photo" />


    </div>
  )
}
