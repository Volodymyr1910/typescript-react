import { useState } from "react";
import style from "./Sandwitch.module.css";

export default function Sandwitch(): JSX.Element {
  const [sandwitch, setSandwitch] = useState<string>(
    "Бутербродный конфигуратор: "
  );

  function handleAddBread(): void {
    setSandwitch(`${sandwitch} Bread🍞`);
  }
  function handleAddCheese(): void {
    setSandwitch(`${sandwitch} Cheese🧀`);
  }
  function handleAddBecon(): void {
    setSandwitch(`${sandwitch} Becon🥓`);
  }
  function handleAddSalat(): void {
    setSandwitch(`${sandwitch} Salat🥦`);
  }
  function handleEat(): void {
    setSandwitch("Бутербродный конфигуратор: ");
  }

  return <div className={style.sandwitch_container}>
    <h2>Sandwitch</h2>
    <img className={style.sandwitch_img} src="https://mur-mur.top/uploads/posts/2023-05/1683186165_mur-mur-top-p-mini-burgeri-keitering-krasivo-53.jpg" alt="" />
    <p>{sandwitch}</p>
    <div className={style.sandwitch_container_btn}>
    <button type="button" className={style.sandwitch_btn} onClick={handleAddBread}>Add Bread</button>
    <button type="button" className={style.sandwitch_btn} onClick={handleAddCheese}>Add Cheese</button>
    <button type="button" className={style.sandwitch_btn} onClick={handleAddBecon}>Add Becon</button>
    <button type="button" className={style.sandwitch_btn} onClick={handleAddSalat}>Add Salat</button>
    <button type="button" className={style.sandwitch_btn} onClick={handleEat}>Eat sandwitch</button>
    </div>


  </div>;
}
