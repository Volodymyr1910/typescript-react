import { useState } from "react"
import "./Feedback.css"

function Feedback() :JSX.Element{

const [quantity_of_likes, setQuantity_of_likes] = useState<number>(0);
const [quantity_of_dislikes, setQuantity_of_dislikes] = useState<number>(0);

function handleQuantity (isLike:boolean):void{
{isLike ? (setQuantity_of_likes(quantity_of_likes + 1)) :setQuantity_of_dislikes(quantity_of_dislikes + 1)};
}

function handleReset (){
    setQuantity_of_likes(0);
    setQuantity_of_dislikes(0);
    alert("Set to zero.")
}

  return (
    <div className="hw_04_main">
       
        <div className="hw_04_container"><p className="hw_04_window">{quantity_of_likes}</p><button onClick={() => handleQuantity(true)}className="hw_04_btn hw_04_like">Like</button> </div>

        <div className="hw_04_container"><button onClick={() => handleQuantity(false)} className="hw_04_btn hw_04_dislike" >Dislike</button> <p className="hw_04_window">{quantity_of_dislikes}</p></div>
        
        <div><button onClick= {handleReset} className="hw_04_reset">Reset Results</button></div>

    </div>
  )
}

export default Feedback