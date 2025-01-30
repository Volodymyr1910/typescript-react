
// import FetchFox from "../../components/fetchFox/FetchFox";

import ButtonDima from "../../components/buttonDima/ButtonDima"
import styles from "./Lesson_09.module.css"

export default function Lesson_09() : JSX.Element {
   


  return (
    <div>
        {/* //* если в названии ключа есть дефис/нижнее подчеркивание, то обращение к такому класу пакуется в [""] */}
        <h2 className={styles["text_orange"] }>CSS modules</h2>

         {/* //* пример подключения двух классов одновременно - конкатенация*/}
        <p className={styles.desc + " " + styles.textOrange}>Css - modules - это способ, как мы можем изолированно работать со стилями в css</p>
       {/* <FetchFox/> */}

        {/* //* пример подключения двух классов одновременно - шаблонная строка*/}
       <p className={`${styles.desc} + ${styles["text_orange"]}`}>Css - modules - это способ, как мы можем изолированно работать со стилями в css</p>

        {/* //* пример подключения двух классов одновременно - Библиотека classnames*/}
       <ButtonDima func={( )=> {}} type="button" colorVariant="danger"/>
       <ButtonDima func={( )=> {}} type="button" colorVariant="primary" disabled={true}/>
       <ButtonDima func={( )=> {}} type="button" colorVariant="danger" text="cancel" disabled={true}/>
       <ButtonDima func={( )=> {}} type="button" colorVariant="primary" text="go futher"/>

        <ul className={styles.list}>задачу добавления нескольких классов в css module можно решить несколькими способами
        <li>Конкатенация</li>
        <li>Шаблонная строка</li>
        <li>Библиотека classnames</li>
        </ul>
    </div>
  )
}
