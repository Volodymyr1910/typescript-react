 import style from './Lesson_15.module.css'

interface ILesson_15Props {
  text?: string;
}

export default function Lesson_15({ text = 'text' }: ILesson_15Props): JSX.Element {
  return (
    <div className='container'>
    <div className={style.mainContainer}>
      <h2>Lesson_15</h2>
      <p>{text}</p>
    </div>
    </div>
  )
}