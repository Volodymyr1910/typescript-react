import { useEffect, useState } from "react";
interface ICat {
  fact: string;
  url: string;
}
import styles from "./Task_for_lesson_10.module.css";
import Loader from "../loader/Loader";

export default function Task_for_lesson_10(): JSX.Element {
  const [cat, setCat] = useState<ICat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchCat = async (): Promise<void> => {
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      const { fact } = data;

      const res1 = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
      );
      const data1 = await res1.json();
      const { url } = data1[0];
      setCat((prev) => [...prev, { fact, url }]);
      setIsLoading(false);
    } catch (error) {
      console.error("Invalid cat :(", error);
    }
  };

  const clear = () => {
    setCat([]);
  };

  const handleGetCat = (): void => {
    //! включаем лоадер, чтоб появлялся при каждом нажатии кнопки
    setIsLoading(true);
    setTimeout(() => {
      fetchCat();
    }, 1000);
  };

  useEffect(() => {
    handleGetCat();
    // fetchCat();
  }, []);
  return (
    <div>
      <div className={styles.mainContainer}>
        <>
          <button onClick={handleGetCat}>Get New Cat Fact</button>
            {cat.length > 0 && <button onClick={clear}>Remove All Info</button>}
        </>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {cat.map((element) => (
              <>
                <div className={styles.catCard}>
                  <p>{element.fact}</p>
                  <div className={styles.imageWrapper}>
                    <img src={element.url} alt="cat-photo" />
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
