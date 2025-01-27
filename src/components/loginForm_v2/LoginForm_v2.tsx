import Button from "../button/Button";
import MyInput_v2 from "../myInput_v2/MyInput_v2";
import "./LoginForm_v2.css"


export default function LoginForm_v2() {
  return (
   <form className="loginForm_v2">
    <MyInput_v2 label={"your login name"} placeholder={"login"} type={"text"} name={"login"}/>
    <MyInput_v2 label={"type unique email"} placeholder={"email"} type={"email"} name={"email"}/>
    <MyInput_v2 label={"secret password"} placeholder={"password"} type={"password"} name={"password"}/>
    <Button type={"submit"} text={"Send Form"}/>
   </form>
  )
}
