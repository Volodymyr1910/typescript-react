import style from "/Users/Vova/Desktop/AIT/PRO курс/FRONT/VSS/src/components/profilCardforHW/ProfilCardforHW.module.css";

import avatar1 from "./profilCardforHW_assets/favorite-mayo.jpg";
import avatar2 from "./profilCardforHW_assets/IMG_20230218_201256.jpg";
import avatar3 from "./profilCardforHW_assets/IMG_20230223_115335.jpg";

interface IUser  {
  avatar: string, name:string, profession:string, hobby:string
}

function ProfilCardforHW() :JSX.Element{
  const user1 = {
    avatar: avatar1,
    name: "name 1",
    profession: "profession 1",
    hobby: "hobby 1, hobby 2",
  };

  const user2 = {
    avatar: avatar2,
    name: "name 2",
    profession: "profession 2",
    hobby: "hobby 1, hobby 4",
  };

  const user3 = {
    avatar: avatar3,
    name: "name 3",
    profession: "profession 3",
    hobby: "hobby 3, hobby 4",
  };

  const user_array = [user1, user2, user3];

  function showUser(array:IUser[]) :JSX.Element[]{
    const userInfoList = array.map((user, index) => {
      if (user.name && user.avatar && user.profession && user.hobby) {
        return (
          <div key={index} id={style.HomeWork_02_my_data}>
            {/* <h2>Personal Data</h2> */}
            <p>Name: {user.name}</p>
            <div className={style.HomeWork_02_divForImg}>
              <img
                className={style.HomeWork_02_img}
                src={user.avatar}
                alt="user_avatar"
              />
            </div>
            <p>Profession: {user.profession}</p>
            <p>Hobbies: {user.hobby}</p>
          </div>
        );
      }
      return <p key={index}>Not valid Data 😉</p>;
    });

    return userInfoList;
  }

  return <div className={style.HomeWork_02}>{showUser(user_array)}</div>;
}

export default ProfilCardforHW;
