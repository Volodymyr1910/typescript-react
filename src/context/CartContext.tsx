import { createContext, useContext, useState } from "react";

// типизируем 1 елемент корзины
interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

//типизируем содержание контекста (контекст - то что будем передавать другим компонентам)
// это те данные которые будут доступны для всех компонентов, обернутых компонентом-оберткой с этим контекстом
//обернутые компоненты получат доступ к этим данным и функциям
interface ICartContextType {
  //массив из елементов корзины
  cart: ICartItem[];
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
  //функция добавления елементов из корзины
  addToCart: (product: ICartItem) => void;
  //функция удаления елементов из корзины
  removeFromCart: (ud: number) => void;
  //функция очистки корзины
  clearCart: () => void;
  totalCost: number;
  setTotalCost: React.Dispatch<React.SetStateAction<number>>
//   handleMinus:()=>void;
//   handlePlus:()=>void;
}


//? создаем контекст с помощью метода из библиотеки react -  createContext(), который ждет начальное значение

//* шаг 1, создаем переменную для вызова контекста, типизируем его и даем первоначальное значение
export const CartContext = createContext<ICartContextType | undefined>(
  undefined
);

//* обертка для компонентов с использованием контекста
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // здесь будет содержимое для передачи в контекст

  const [cart, setCart] = useState<ICartItem[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);

  //добавление елементов в корзину
  const addToCart = (product: ICartItem) => {
    setTotalCost((prev) => prev + product.price);
    setCart((prevCart) => {
      //проверяем есть ли такой продукт в корзине, метод find() итерирует все елементы в Cart и сравниваем с id продукта который добавляется
      const productExist = prevCart.find((item) => item.id === product.id);
      // если продукта в корзине еще нет - добавляем его, если такой продукт уже есть - увеличиваем количество на 1
      if (productExist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  //удаление елемента с корзины
  const removeFromCart = (id: number) => {
    //метод filter() возвращает НОВЫЙ массив
    //методу filter() записываем условие позитивного исхода, т.е. те елементы что отвечают условию - будут отобраны в массив
    //если ни один елемент не отвечает условию - вернется пустой массив
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));

    setTotalCost((prev) => {
      const removedProduct = cart.find((product) => product.id === id);
      return removedProduct ? prev - (removedProduct.price * removedProduct.quantity) : prev;
    });
  };

  //очитска корзины
  const clearCart = () => {
    setCart([]);
    setTotalCost(0);
  };

  



  return (
    //Метод Provider превращает контекст в тег
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalCost, setCart, setTotalCost }}
    >
      {/* за место children - придут обернутые компоненты */}
      {children}
    </CartContext.Provider>
  );
};

// ! функция забирает данные из нашего контекста и проверяет что это не undefined
//? функция обьявляется здесь, но будет использоваться в выбраных компонентах, где будут нужны данные для корзины
export const useCart = () => {
  //* используем хук useContext для получения данных из передаваемого функции контекста
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("No such context 🫣");
  }
  return context;
};
