import UserCard from "../../components/userCard/UserCard";


export default function Homework_12() {
  return (
    <div>
        <h2>Варіант 1 - тільки основні props</h2>
    <div><UserCard age={40} name="Vova"/></div>
    <h2>Варіант 2 - з передачею опціональних props</h2>
    <div><UserCard age={40} name="Vova" hobby="Бальні танці" key={"key"}/></div>
    </div>
  )
}
