import style from "./Home_works.module.css"
import { Link } from "react-router-dom";

export default function Home_works() {
  return (
    <div className={style.gridContainer}>

        <Link to="/homework-1"><div>Home work 1: Заповнення масиву об'єктів по fetch-запиту;</div></Link>
        <Link to="/homework-2"><div>Home work 2: Використання логіки для стилізації за допомогою бібліотеки classnames</div></Link>
        <Link to="/homework-3"><div>Home work 3: Coctail - оновлення даних з fetch-запиту по натисканню кнопки</div></Link>
        <Link to="/homework-4"><div>Home work 4: Feedback - робота з UseState()</div></Link>
        <Link to="/homework-5"><div>Home work 5: FetchFox - оновлення даних з fetch-запиту по натисканню кнопки + Loader</div></Link>
        <Link to="/homework-6"><div>Home work 6: Loader_v2 - лоадер із зворотнім відліком</div></Link>
        <Link to="/homework-7"><div>Home work 7: LoginForm - заповнення данних у форму</div></Link>
        <Link to="/homework-8"><div>Home work 8: LoginForm_v2 - заповнення данних у форму із очищенням полів після submit</div></Link>
        <Link to="/homework-9"><div>Home work 9:  MyInput & MyInput_v2 - два варіанти полів input, що приймають різні параметри props</div></Link>
        <Link to="/homework-10"><div>Home work 10: ProfileCard - форма для вводу данних (не допрацьована)</div></Link>
        <Link to="/homework-11"><div>Home work 11: ProfilCardforHW - приклад рендерингу об'єктів</div></Link>
        <Link to="/homework-12"><div>Home work 12: UserCard - приклад логіки при рендерингу компонента з опціональними props</div></Link>
        <Link to="/"><div>Home work 13</div></Link>
        <Link to="/"><div>Home work 14</div></Link>


    </div>
  )
}
