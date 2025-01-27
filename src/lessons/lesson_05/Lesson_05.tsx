import { useEffect } from "react";
import { fellowshipArray } from "./fellowship";
import "./Lesson_05.css";

export default function Lesson_05() {
  // этот юзефект с пустым массивом зависимостей сработает один раз начале жизненного цикла
  useEffect(()=> {
    console.log("render lesson 05!");
    
  }, []

  )
  return (
    <div>
      <h2>React map() components</h2>
      <div className="lesson_05_mainContainer">
        {fellowshipArray.map((hero) => (
          // для созданного в итерации элемента использовать key, в который передаем что-то уникальное от каждого элемента. Это нужно для избегания вероятных ошибок при отрисовке
          <div className="lesson_05_heroCard" key={hero.id}>
            <h3 className={hero.isDark ? "lesson_05_dark" : "lesson_05_light"}>{hero.name}</h3>
            <div className={`lesson_05_img_container ${hero.isDark ?  "lesson_05_heroCard_dark" : "lesson_05_heroCard_light"}` }>
              <img src={hero.image} alt="hero image" />
            </div>
            <p>{hero.age} years old</p>
            <p>Hero is servant of {hero.isDark ? "Darkness" : "Light"}</p>
            <p>Weapons: {hero.weapons.length === 0 ? "none." : (hero.weapons.map((weapon, index) => index !== hero.weapons.length - 1 ? weapon + ", " : weapon + "."))}</p>
            {/* <p>Weapons: {hero.weapons.length === 0 ? "none." : (hero.weapons.map(weapon => weapon).join(", "))}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
