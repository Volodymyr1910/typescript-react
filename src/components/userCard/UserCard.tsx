import ".//UserCard.css"

// function UserCard (props){
//     return(
//         <div className="UserCard">
//             {/* запись без деструктуризации */}
//            <h4>Name: {props.name}</h4>
//            <p>Age: {props.age}</p>
//            {/* если  props.hobby - true_ то часть выражения после && - будет показана*/}
//            { props.hobby && (<p>Hobby: {props.hobby}</p>)}
//            {/* использование тернарного оператора */}
//            {/* { props.hobby ? (<p>Hobby: {props.hobby}</p>) : (<p>Hobby:  No Hobby</p>)} */}
//         </div>
//     );
// }
// export default UserCard;

// деструктуризация обьекта props
//  const {name, age, hobby:person hobby} = props;

  {/* запись с деструктуризацией */}

  interface IUserCardProps {
  name:string, age:number, hobby?:string
  }

  function UserCard ({name, age, hobby}:IUserCardProps): JSX.Element {
    return(
        <div className="UserCard">
            
           <h4>Name: {name}</h4>
           <p>Age: {age}</p>
           {/* если  props.hobby - true_ то часть выражения после && - будет показана*/}
           {hobby && (<p>Hobby: {hobby}</p>)}
           {/* использование тернарного оператора */}
           {/* {hobby ? (<p>Hobby: {hobby}</p>) : (<p>Hobby:  No Hobby</p>)} */}
        </div>
    );
}
export default UserCard;
