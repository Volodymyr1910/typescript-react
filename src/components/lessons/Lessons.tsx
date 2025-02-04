import { Link } from "react-router-dom";
import style from "./Lessons.module.css"


export default function Lessons() {
  return (
    <div>

    <div className={style.gridContainer}>

    <Link to="/lesson-1"><div>Lesson 1: Day;</div> </Link>
    <Link to="/lesson-2"><div>Lesson 2: Playground; CarShop(car, bike);</div> </Link>
    <Link to="/lesson-3"><div>Lesson 3: RandomDog;</div> </Link>
    <Link to="/lesson-4"><div>Lesson 4: React useState() hook 🎣;</div> </Link>
    <Link to="/lesson-5"><div>Lesson 5: рендеринг масиву об'єктів, за допомогою методу map(); стилізація по умовах;</div> </Link>
    <Link to="/lesson-6"><div>Lesson 6: Counter;</div> </Link>
    <Link to="/lesson-7"><div>Lesson 7: Sandwitch;</div> </Link>
    <Link to="/lesson-8"><div>Lesson 8: UseEffect - show/hide component;</div> </Link>
    <Link to="/lesson-9"><div>Lesson 9: робота з css module і бібліотекою classnames</div> </Link>
    <Link to="/lesson-10"><div>Lesson 10: рендеринг масиву, зформованого по fetch-запитам з різних API, скролинг списку; логіка кнопок + Лоадер;</div> </Link>
    <Link to="/lesson-11"><div>Lesson 11: Bitcoin; UsersPage - рендер даних з fetch-запиту, у вигляді списку</div> </Link>
    <Link to="/lesson-12"><div>Lesson12: FormGender - бібліотека Formik - запов онлайн-форми, збереж данних в масив і рендер на сторінці із логікою + SCROLL</div> </Link>
    <Link to="/lesson-13"><div>Lesson 13: GenderForm - запов онлайн-форми, збереж данних в об'єкт і рендер на стор. Валідація даних в формі за доп бібліотеки Yup </div> </Link>
    <Link to="/lesson-14"><div>Lesson 14: Products; ProductCard; ProductPage - динамічний рендеринг даних, отриманих з fetch-запиту </div> </Link>

   
    <Link to="/lesson-14"><div>Lesson </div> </Link>
    <Link to="/lesson-15"><div>Lesson </div> </Link>
    <Link to=""><div>Lesson </div> </Link>
    
        
    </div>

    </div>
  )
}
