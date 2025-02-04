 import Products from '../../components/products/Products'
import style from './Lesson_14.module.css'


export default function Lesson_14(): JSX.Element {
  return (
    <div className="container">
      <div className={style.mainContainer}>
      <h2>Lesson_14</h2>
      <Products/>
      </div>
    </div>
  )
}