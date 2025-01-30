import MyInput from "../../components/myInput/MyInput";
import MyInput_v2 from "../../components/myInput_v2/MyInput_v2";


export default function Homework_09() {
  return (
    <div>
    <h2>MyInput:</h2>
    <div><MyInput className="class-test" label="label-test" name="name-test" placeholder="placeholder-test" type="email" require/></div>
    <h2>MyInput_v2:</h2>
    <div><MyInput_v2  label="label-test" name="name-test" placeholder="placeholder-test" type="email" /></div>
    </div>
  )
}

