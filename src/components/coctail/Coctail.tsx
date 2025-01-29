import { useEffect, useState } from "react";
import style from "./Coctail.module.css"

interface ICoctail {
  name: string;
  image: string;
}

export default function Coctail(): JSX.Element {
  const [myCoctails, setMyCoctails] = useState<ICoctail[]>([]);

  async function getCoctail(): Promise<void> {
    try {
      const res = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();

      if (data.drinks && data.drinks[0]) {
        const { strDrink: name, strDrinkThumb: image } = data.drinks[0];

        setMyCoctails((prev) => [...prev, { name, image }]);
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Failed to fetch cocktail...", error);
    }
  }

  useEffect(() => {
    getCoctail();
  }, []);

  return (
    <div className={style.container}>
      {myCoctails.length > 0 ? (
        <>
          <h2>{myCoctails[0].name}</h2>
          <img src={myCoctails[0].image} alt="cocktail" />
        </>
      ) : (
        <p>No data...</p>
      )}
    </div>
  );
}