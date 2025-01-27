
import "./ProfileCard.css"
import React, { useState } from "react";


function ProfileCard() :JSX.Element{
  const [counter, setCounter] = useState<number>(1);
  const [name, setName] = useState<string>('');

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);}

   
   
  const informFromUser = (
    <div className="anketa">
      <h1 className="homework2_h1">Ваші вподобання</h1>
      <form className="homework2_form">
        <div>
          <div>
            <label htmlFor="name">Ім'я:</label>
          </div>
           <input
            id="name"
            type="text"
            className="homework2_text_date_number"
            style={{ backgroundColor: "rgb(239, 245, 165)" }}
            placeholder="Введіть Ваше ім'я"
            required
            value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <div>
            <label htmlFor="1">Оберіть стать:</label>
          </div>
          <div>
            Чоловік <input id="1" name="gender" type="radio" />
          </div>
          <div>
            Жінка<input name="gender" type="radio" required />
          </div>
          <div>
            Не визначено<input name="gender" type="radio" />
          </div>
        </div>

        <br />

        <div>
          <div>
            <label htmlFor="8">Дата народження:</label>
          </div>
          <input
            id="8"
            style={{ backgroundColor: "rgb(239, 245, 165)" }}
            className="homework2_text_date_number"
            type="date"
            required
          />
        </div>

        <br />

        <div>
             <div><label htmlFor="2">Ваше фото:</label></div>
             <input id="2" type="image" />
          </div>

        <br />

        <div>
          <div>
            <label htmlFor="3">Улюблений колір:</label>
          </div>
          <input
            id="3"
            style={{ backgroundColor: "rgb(239, 245, 165)" }}
            className="homework2_color_reset"
            type="color"
            required
          />
        </div>

        <br />

        <div>
             <div><label htmlFor="5">Рівень вашої активності:</label></div>
            <input id="5" type="range" required />
          </div>

          <br />

          <div>
             <div><label htmlFor="6">Улюблені розваги:</label></div>
    
             <span>
               <select
                 id="6"
                 style={{ backgroundColor: "rgb(239, 245, 165)" }}
                 className="homework2_fun"
               >
                 <option value="">Активні</option>
                 <option value="Foosball">Футбол</option>
                 <option value="Valleyball">Волейбол</option>
                 <option value="Bascetball">Баскетбол</option>
                 <option value="Box">Книга Бокс</option>
                 <option value="Tenis">Теніс</option>
                 <option value="Swim">Плавання</option>
                 <option value="Run">Біг</option>
                 <option value="Other">Інше</option>
                 <option value="No interest">Нічого не цікавить</option>
               </select>
    
               <select style={{ backgroundColor: "rgb(239, 245, 165)" }} className="homework2_fun">
                 <option value="">Пасивні</option>
                 <option value="Chess">Шахи</option>
                 <option value="Monopoly">Монополія</option>
                 <option value="Poker">Покер</option>
                 <option value="Books">Читання книжок</option>
                 <option value="Movie">Перегляд кіно</option>
                 <option value="PC art">Творчість на комп'ютері</option>
                 <option value="Paint">Писання картин</option>
                 <option value="Other">Інше</option>
                 <option value="No interest">Нічого не цікавить</option>
               </select>
             </span>
           </div>

        <br />

        <div>
            <div><label htmlFor="4">Скільки разів на день ви смієтеся?</label></div>
            <input
               id="4"
               style={{ backgroundColor: "rgb(239, 245, 165)" }}
              className="homework2_text_date_number"
             type="number"
              placeholder="в середньому :)"
              required
            />
          </div>

    <br />
        
        <div>
            <div><label htmlFor="9" className="homework2_best">Завантажити резюме:</label></div>
            <input id="9" style={{color: "rgb(243, 241, 241)"}} 
            type="file" />
         </div>

         <br />

         <div>
            <div>
               <label htmlFor="present" className="homework2_best"
                 >Отримайте подарунок за опитування:</label
              >
             </div>
             <select
               style={{ backgroundColor: "rgb(239, 245, 165)" }}
               id="present"
               className="homework2_present"
               required
             >
               <option value="">Оберіть подарунок:</option>
               <option value="">Без подарунка.</option>
               <option value="orphanage">
                 Благодійний внесок на дитячий сиротинець.
               </option>
               <option value="cinema">Два білети на стрічку "Гладіатор 2"</option>
               <option value="book">
                 Книга "Основи бджолярства. Золоте видання"
              </option>
             </select>
           </div>

           <br />

           <div>
        
            <input style={{ backgroundColor: "rgb(219, 120, 133)" }} type="reset" className="homework2_color_reset"/>
           </div>

        <br />

        <div>
          <div>
            <label htmlFor="10" className="homework2_best">
              Погоджуюсь з політикою конфіденційності
            </label>
          </div>

          <input id="10" type="checkbox" required />
        </div>

        <br />

        <button className="homework2_button" onClick={incrementCounter} type="button">Завершити</button>
      </form>
    </div>
  );

    const readyInfo = <div>Готово!</div>;

    

  
    

    return (
        <div>
        {counter > 0 && counter < 4 && informFromUser}
        {counter === 4 && readyInfo}
        </div>

    )
}// end ProfileCard

export default ProfileCard;