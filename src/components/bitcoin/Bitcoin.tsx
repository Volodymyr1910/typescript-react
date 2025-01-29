import React, { useEffect, useState } from 'react'

export default function Bitcoin(): JSX.Element {
    const [kurs, setKurs] = useState<number>(0);
    const [date, setDate] = useState<string>("");
  
    async function getBitcoin(): Promise<void> {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await res.json();
        const value = parseFloat(data.bitcoin.usd.toFixed(2));
        setKurs(value);
        setDate(new Date().toLocaleString());
      } catch (error) {
        console.error("Failed to fetch Bitcoin data:", error);
      }
    }
  
    useEffect(() => {
      getBitcoin();
    }, []);
  
    return (
      <div>
        <h1>Bitcoin Current Price</h1>
        <p>Date and Time: {date}</p>
        <p>Price: {kurs}</p>
        <button type="button" onClick={() => getBitcoin()}>
          Update Data
        </button>
      </div>
    );
  }
