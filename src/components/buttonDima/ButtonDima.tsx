import styles from "./ButtonDima.module.css";
import cn from "classnames";

interface IMyButtonProps {
  type?: "submit" | "button" | "reset";
  text?: string;
  func: () => void;
  // активна кнопка или нет
  disabled?: boolean;
  // варианты цвета кнопки
  colorVariant?: "primary" | "danger";
}

function ButtonDima({
  type,
  text = "click",
  func,
  disabled = false,
  colorVariant,
}: IMyButtonProps): JSX.Element {
  return (
    <button
      type={type}
      onClick={func}
      className={cn(styles.ButtonDima, {
        [styles.primary]: colorVariant === "primary",
        [styles.danger]: colorVariant === "danger",
        [styles.disabled]: disabled === true,
      })}
    >
      {text}
    </button>
  );
}
export default ButtonDima;
