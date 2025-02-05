import { useCart } from "../../context/CartContext";
import ButtonDima from "../buttonDima/ButtonDima";

import style from "./Cart.module.css";

export default function Cart(): JSX.Element {
  const { cart, clearCart, removeFromCart, totalCost, setCart, setTotalCost } =
    useCart();

  function handleMinus(id: number): void {
    setCart((prev) =>
      prev.map((element) =>
        element.id === id && element.quantity > 1
          ? { ...element, quantity: element.quantity - 1 }
          : element
      )
    );
    const foundElement = cart.find((element) => element.id === id);
    if (foundElement && foundElement.quantity > 1) setTotalCost((prev) => prev - foundElement.price);
  }

  function handlePlus(id: number): void {
    setCart((prev) =>
      prev.map((element) =>
        element.id === id && element.quantity > 0
          ? { ...element, quantity: element.quantity + 1 }
          : element
      )
    );
    const foundElement = cart.find((element) => element.id === id);
    if (foundElement) setTotalCost((prev) => prev + foundElement.price);
  }

  function sendOrder(): void {
    alert("Sank you for your order 📦. A dispatcher will contact you soon ");
    clearCart();
  }

  return (
    <>
      {cart.length > 0 ? (
        <div className={style.mainContainer}>
          <h2>Cart 🛒</h2>
          <div className={style.itemContainer}>
            {cart.map((element) => (
              <div className={style.cartItem}>
                <span className={style.title}>
                  {element.title.length < 40
                    ? element.title
                    : element.title.slice(0, 40) + "..."}
                </span>

                <button
                  className={style.plus}
                  onClick={() => handlePlus(element.id)}
                >
                  +
                </button>

                <span className={style.quantity}>
                  Quantity: {element.quantity}
                </span>
                <button
                  className={style.minus}
                  onClick={() => handleMinus(element.id)}
                >
                  -
                </button>
                <button
                  className={style.remove}
                  onClick={() => removeFromCart(element.id)}
                >
                  Delete item
                </button>
              </div>
            ))}
          </div>
          <div className={style.cost}>
            Total cost of purchase: {totalCost.toFixed(2)}$
          </div>
          <button className={style.purchase} onClick={sendOrder}>
            PURCHASE
          </button>
          <ButtonDima
            text="clear cart"
            colorVariant="danger"
            func={clearCart}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
