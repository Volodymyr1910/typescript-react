import { useEffect, useState } from "react"
import style from "./RandomDog.module.css"


export default function RandomDog() : JSX.Element{
  const [URL, setURL] = useState <string>("");
  
  async function loadPicture (): Promise <void>{
    const res =  await fetch("https://dog.ceo/api/breeds/image/random");
    const obj = await res.json();
    const {message} = obj;
    console.log(message);
    

    setURL(message);

  }

  useEffect (() => {
    loadPicture();
},[])

    return (
    <div className={style.randomDog_container}>
        <h1 className={style.randomDog_head}>Random Dog</h1>
        <div className={style.randomDog_img_container}>
            <img className={style.randomDog_img} src={URL} alt="random dog" />
        </div>
        <button className={style.randomDog_btn} type="button" onClick={() => loadPicture()}>Change Dog</button>  
        {/* onClick={() => loadPicture()} стрелочная функция нужна для useEffect, если useEffect нет, можно просто  onClick={loadPicture()}*/}

    </div>
  )
}
