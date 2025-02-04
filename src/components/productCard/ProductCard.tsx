 import { Link } from 'react-router-dom';
import style from './ProductCard.module.css'

interface IProductCardProps {
    id: number;
    title: string;
    price: number;
    image: string;
}

export default function ProductCard({ id, title,price, image}: IProductCardProps): JSX.Element {
  return (
    <Link to={String(id)}>
    <div className={style.shopContainerCard} key={id}>
    <h4>{title.length < 20 ? title : title.slice(0,20) + "..."}</h4>
    <div className={style.imageWrapper}><img src={image} alt="" /></div>
    <p>{price}$</p>
    <Link to={String(id)}>To product</Link>
    </div>
    </Link>
  )
}