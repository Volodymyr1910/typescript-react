// import { NavLink, Outlet } from "react-router-dom"
import { Outlet } from "react-router-dom"
import style from "./Layout.module.css"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

export default function Layout() {
  const headerElements = [{text:"Home 🏠", path:"/"}, {text:"Lessons", path:"lessons"}, {text:"Homeworks", path:"homeworks"}]
  return (
    <>
   
    <div  className={style.boxForHeader}><Header links={headerElements}/></div>


    {/* <header className={style.header}>

    <NavLink className={({isActive}) => (isActive ? style.linkActive : "")} to={"/"}>Home 🏠</NavLink>

    <NavLink className={({isActive}) => (isActive ? style.linkActive : "")} to={"fetch-fox"}>fox API</NavLink>
    <NavLink className={({isActive}) => (isActive ? style.linkActive : "")} to={"lesson-08"}>lesson 08</NavLink>
    <NavLink className={({isActive}) => (isActive ? style.linkActive : "")} to={"lesson-05"}>lesson 05</NavLink>

    <NavLink className={({isActive}) => (isActive ? style.linkActive : "")} to={"lessons"}>Lessons</NavLink>

    <NavLink className={({isActive}) => (isActive ? style.linkActive : "")} to={"homeworks"}>Homeworks</NavLink>
    
    </header> */}

    <main className={style.main}>
      {/*вместо  компонента Outlet из React Router будут приходить компоненты из маршрутизации, которую мы описываем в App.tsx*/}
      {/* если автоимпорт не сработал  import { Outlet } from "react-router-dom" */}
   <Outlet/>
    </main>

    <div className={style.boxForFooter}><Footer/> </div>
    
  
    {/* <footer className={style.footer}>
        Footer
    </footer> */}
    
    </>
  )
}
