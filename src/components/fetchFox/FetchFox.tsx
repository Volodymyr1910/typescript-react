import { useEffect, useState } from "react";
import "./FetchFox.css"
import MyButton from "../buttonDima/ButtonDima";
import Loader from "../loader/Loader";


//* типизация данных с сервера
interface IFetchFox {
  image: string;
  link: string;
}

export default function FetchFox(): JSX.Element {
  //* переменная состояния для хранения полученной с сервера - ссылки на картинку
  const [foxImg, setFoxImg] = useState<string>();

  //* заводим переменную переключатель loader - индикатор загрузки
  const [isLoading, setIsLoading] = useState <boolean> (true);

  //* асинхронная функция для получения данных с сервера
  const fetchFox = async () : Promise <void>=> {
    const res = await fetch ("https://randomfox.ca/floof");
    const data : IFetchFox = await res.json();
    setFoxImg(data.image)
    //! выключаем лоадер, когда данные пришли
    setIsLoading (false)
  };
  const handleGetFox = (): void => {
    //! включаем лоадер, чтоб появлялся при каждом нажатии кнопки
    setIsLoading (true)
    setTimeout (()=> {
        fetchFox();
    }, 1500)
  }


  //* оборачиваем обращение к серверу - fetch запрос - в useEffect, чтоб он вызывался 1 раз, в начале жизненного цикла
  useEffect(() => {
    handleGetFox();
    // fetchFox();
  }, []);

  return (
    <div>
        {/* отображение данных через тернарный оператор. Если  isLoading  - true, на странице отображается лоадер, если false - показываем фото лисиц*/}
        {isLoading ?  <Loader/> : ( 
      <>      
    <div className="FetchFox_container">
      <img src={foxImg} alt="fox" />
    </div>
    <MyButton func={handleGetFox} text="Get new Fox"/>
    </>
     )}
    </div>
  );
}
