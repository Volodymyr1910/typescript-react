import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./layout/Layout";
import Lesson_05 from "./lessons/lesson_05/Lesson_05";
import LoginForm_v2 from "./components/loginForm_v2/LoginForm_v2";
import FetchFox from "./components/fetchFox/FetchFox";
import Ts_lesson_03 from "./lessons/lesson_08/Lesson_08";
import NoPage from "./components/noPage/NoPage";
import Lesson_02 from "./lessons/lesson_02/Lesson_02";
import Lesson_04 from "./lessons/lesson_04/Lesson_04";
import Lessons from "./components/lessons/Lessons";
import Lesson_01 from "./lessons/lesson_01/Lesson_01";
import Lesson_03 from "./lessons/lesson_03/Lesson_03";
import Counter from "./components/counter/Counter";
import Lesson_07 from "./lessons/lesson_07/Lesson_07";
import Lesson_08 from "./lessons/lesson_08/Lesson_08";
import Lesson_09 from "./lessons/lesson_09/Lesson_09";
import Lesson_10 from "./lessons/lesson_10/Lesson_10";
import Lesson_11 from "./lessons/lesson_11/Lesson_11";
import Home_works from "./components/home_works/Home_works";
import Homework_01 from "./hw/homework_01/Homework_01";
import Homework_02 from "./hw/homework_02/Homework_02";
import Homework_03 from "./hw/homework_03/Homework_03";
import Homework_04 from "./hw/homework_04/Homework_04";
import Homework_05 from "./hw/homework_05/Homework_05";
import Homework_06 from "./hw/homework_06/Homework_06";
import Homework_07 from "./hw/homework_07/Homework_07";
import Homework_08 from "./hw/homework_08/Homework_08";
import Homework_09 from "./hw/homework_09/Homework_09";
import Homework_10 from "./hw/homework_10/Homework_10";
import Homework_11 from "./hw/homework_11/Homework_11";
import Homework_12 from "./hw/homework_12/Homework_12";
// import Ts_lesson_11 from "./lessons/ts_lesson_11/Ts_lesson_11";
// import Ts_lesson_10 from "./lessons/ts_lesson_10/Ts_lesson_10";
// import Bitcoin from "./components/bitcoin/Bitcoin";
// import Coctail from "./components/coctail/Coctail";
// import Ts_lesson_09 from "./lessons/ts_lesson_09/Ts_lesson_09";
// import Ts_homework_04 from "./hw/ts_homework_04/Ts_homework_04";
// import Lesson_04 from "./lessons/lesson_04/Lesson_04";
// import Ts_lesson_03 from "./lessons/ts_lesson_03/Ts_lesson_03";
// import Ts_Homework_02 from "./hw/ts_homework_02/Ts_Homework_02";
// import Playground from "./components/playground/Playground";
// import Lesson_02 from "./lessons/lesson_02/Lesson_02";
// import Ts_lesson_01 from "./lessons/ts_lesson_01/ts_lesson_01";

function App(): JSX.Element {
  return (
    //! настройка роутинга
     //? step 1  устанавливаем библиотеку через терминал (npm i react-router-dom)
    //? step 2 оборачиваем все приложение в HashRouter (сделать импорт если не сработал автоматически => import { HashRouter } from "react-router-dom";)
    
    <HashRouter>

    {/* // ? step 3 оборачиваем все приложение в Routes - пути вокруг всех компонентов (сделать импорт если не сработал автоматически => import { HashRouter, Routes } from "react-router-dom";) */}
      <Routes>

      {/* //* непосредственно настраиваем пути <Route path="/"></Route>. Сюда лучше влаживать первый компонент - корневой елемент, имеющий навигацию. Он будет всегда на странице и будет иметь навигацию для перехода на другие компоненты
      //* создаем в папке src папку layout - компонент который и будет совершать переключение компонентов
      //* создаем файл Layout.tsx
      В обертке Route передаем пропсами: element - передаваемый компонент т.е. компонент назначаемый на путь/маршрут, path - путь к этому компоненту
      */}
        
        {/* если путь к файлу прописан path="start" , то для отображения на страницу в путь добавляем /#/start*/}
        {/* http://localhost:5173/typescript-react/   =>  http://localhost:5173/typescript-react/#/start/ */}
      <Route path="/" element={<Layout/>}>

        {/* все компоненты ниже придут в компонент Layout  на место Outlet */}
        {/* остальные Route самозакрывающиеся  <Route/> */}
        {/*  path="/"  - домашняя страница*/}
        
        <Route path="lessons" element={<Lessons/>}/>

        <Route path="lesson-1" element={<Lesson_01/>}/>
        <Route path="lesson-2" element={<Lesson_02/>}/>
        <Route path="lesson-3" element={<Lesson_03/>}/>
        <Route path="lesson-4" element={<Lesson_04/>}/>
        <Route path="lesson-5" element={<Lesson_05/>}/>
        <Route path="lesson-6" element={<Counter/>}/>
        <Route path="lesson-7" element={<Lesson_07/>}/>
        <Route path="lesson-8" element={<Lesson_08/>}/>
        <Route path="lesson-9" element={<Lesson_09/>}/>
        <Route path="lesson-10" element={<Lesson_10/>}/>
        <Route path="lesson-11" element={<Lesson_11/>}/>

        
        <Route path="homeworks" element={<Home_works/>}/>

        <Route path="homework-1" element={<Homework_01/>}/>
        <Route path="homework-2" element={<Homework_02/>}/>
        <Route path="homework-3" element={<Homework_03/>}/>
        <Route path="homework-4" element={<Homework_04/>}/>
        <Route path="homework-5" element={<Homework_05/>}/>
        <Route path="homework-6" element={<Homework_06/>}/>
        <Route path="homework-7" element={<Homework_07/>}/>
        <Route path="homework-8" element={<Homework_08/>}/>
        <Route path="homework-9" element={<Homework_09/>}/>
        <Route path="homework-10" element={<Homework_10/>}/>
        <Route path="homework-11" element={<Homework_11/>}/>
        <Route path="homework-12" element={<Homework_12/>}/>


        <Route path="login-form" element={<LoginForm_v2/>}/>
        <Route path="fetch-fox" element={<FetchFox/>}/>
        <Route path="lesson-08" element={<Ts_lesson_03/>}/>
        <Route path="lesson-05" element={<Lesson_05/>}/>

       
        
       
        
        
       
        
        
        
        
        {/* заготовка */}
        {/* <Route path="lesson-20" element={<h2>Lesson 20</h2>}/> */}
        {/* <Route path="lesson-11" element={<Lesson_11/>}/> */}


        
        {/* path="*" - сработает когда ввести неверный адрес маршрута */}
        <Route path="*" element={<NoPage/>}/>
       
      
      </Route>


      {/* <Ts_lesson_01 /> */}
      {/* <Lesson_02/> */}
      {/* <Playground/> */}
      {/* <Ts_Homework_02/> */}
      {/* <Ts_lesson_03/> */}
      {/* <Lesson_04/> */}
      {/* <Ts_homework_04/> */}
    	{/* <Ts_lesson_09/> */}
      {/* <Coctail/> */}
      {/* <Bitcoin/> */}
      {/* <Ts_lesson_10/> */}
      {/* <Ts_lesson_11/> */}

      </Routes>
    </HashRouter>

     


  );
}

export default App;
