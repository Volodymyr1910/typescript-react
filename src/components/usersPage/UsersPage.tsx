import { useEffect, useState } from "react";

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: Address;
  phone: string;
}

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

export default function UsersPage(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  async function loadUsers(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/users");
    const arr = await res.json();
    setUsers(arr);
  }
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            style={{ border: "solid black 2px", margin: "10px" }}
            key={user.id}
          >
            <div>Ник: {user.username}</div>
            <div>
              Имя, фамилия: {user.name.firstname} {user.name.lastname}
            </div>
            <div>Телефон: {user.phone}</div>
            <div>E-mail: {user.email}</div>
            <div>Zip-code: {user.address.zipcode}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
