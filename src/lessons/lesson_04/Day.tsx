import { useState } from "react"
import "../lesson_04/Day.css"



export default function Day():JSX.Element {
    const [isDay, setDay] = useState(false);
    const dayNight = () => {
        setDay((prev) => !prev);
      }; 

  return (
        <div className={isDay ? "day" : "night"}>
        <h1>{isDay ? "День 🌞" : "Ночь🌘"}</h1>
      <button onClick={dayNight}>On/Off</button>
      </div>
  )
}
