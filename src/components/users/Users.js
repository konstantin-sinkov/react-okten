import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.services";

export default function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
     getUsers().then(({data}) => setUsers([...data]));
  }, []);

  return (
    <div>
        <h2>User's list</h2>
        {
            users.map(value => <User item={value} key={value.id}/>)
        }
    </div>
  );
}