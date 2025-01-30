import { useEffect, useState } from "react";

export default function Loader_v2() {
  const [count, setCount] = useState<number>(3);

  useEffect(() => {
    if (count === 0) return;

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  if (count === 0) {
    return null;
  }

  return (
    <div>
      <p>Ожидайте: {count} сек</p>
    </div>
  );
}