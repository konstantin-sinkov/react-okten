import './Users.css';
import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";
import User from "../user/User";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value]);
        })
    }, []);

  return (
        <div className="users_list">
            <h3><u>Users List</u></h3>
            {
                users.map(el =>
                    <User
                        key={el.id}
                        user={el}
                    />)
            }
        </div>
  );
}

