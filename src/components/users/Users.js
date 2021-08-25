import './Users.css';
import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";
import User from "../user/User";
import UserDetails from "../userDetails/UserDetails";
import {Route, Switch} from "react-router";

export default function Users(props) {
    // console.log(props);
    let {match: {url}, history} = props;
    // console.log(url);

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
                        history={history}
                    />)
            }

            <Switch>
                <Route path={`${url}/:id`} render={(props) => <UserDetails {...props}/>}/>
            </Switch>
        </div>
  );
}

