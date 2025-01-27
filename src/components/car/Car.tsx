interface Props {
    brand:string;
    color:string;
}


export default function Car(props:Props) :JSX.Element {
  
   const {brand:car_brand, color:car_color} = props;
   return (
    <div style={{backgroundColor:car_color, color:"white"}}>
        Brand: {car_brand} Color: {car_color}
    </div>
   )
}
