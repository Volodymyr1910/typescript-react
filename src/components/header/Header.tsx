import style from "./Header.module.css";
import { NavLink } from "react-router-dom";


interface ILink {
    text: string;
    path: string;
  }
  
  interface IHeaderProps {
    height?: number;
    backgroundColor?: string;
    links: ILink[]; // Масив посилань
  }
  
  export default function Header({
    height = 80,
    backgroundColor = "rgb(206, 103, 0)",
    links,
  }: IHeaderProps): JSX.Element {
    return (
      <header
        className={style.header}
        style={{ backgroundColor, height: `${height}px` }}
      >
        {links.map(({ text, path }, index) => (
          <NavLink
            key={index} // Унікальний ключ для кожного елемента
            className={({ isActive }) => (isActive ? style.linkActive : "") + " " + style.extraSettings}
            to={path}
          >
            {text}
          </NavLink>
        ))}
      </header>
    );
  }