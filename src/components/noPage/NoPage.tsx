import { Link } from "react-router-dom";


export default function NoPage() {
  return (
    <>
    <div><h2>404: No such page 😉</h2></div>
    {/* линк на домашнюю страницу */}
    <Link to="/">To home page 🏠</Link>
    </>
  )
}
