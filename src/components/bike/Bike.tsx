interface Props {
    gears:number;
    brand:string;
    price:number;
}


export default function Bike(bikeProps:Props) :JSX.Element{
    const {brand:bikeBrand, gears:bikeGears, price} = bikeProps;
  return (
    <div>
        Bike brand: {bikeBrand} Price: {price} Quantity of gears: {bikeGears}  
    </div>
  )
}
