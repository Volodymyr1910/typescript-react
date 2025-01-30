import { useEffect, useState } from "react";
import ShowAllElements from "../../components/showAllElements/ShowAllElements";


export default function Homework_01() :JSX.Element{
    interface IfoxLibrary {image:string, link:string}

    const [counter, setCounter] = useState<number>(0);
    const [getFox, setGetFox] = useState<IfoxLibrary[]>([]);
   

    async function getInfo() :Promise<void>{
        
        const res = await fetch("https://randomfox.ca/floof");
        const data = await res.json();

        console.log(data);
        const{image, link} = data;
         
        setGetFox((prev)=> [...prev, {image,link}]);
      
    }

    useEffect (()=> {
        if(counter < 10) {
            getInfo();
            setCounter ((prev) => prev + 1);
        }
    },[counter]);
  

  return (
    <div>
        <ShowAllElements array={getFox} message_for_user=" Fox API is a little bit slow.. wait, please...."/>
    </div>
  )
}
