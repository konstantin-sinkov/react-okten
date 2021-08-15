import './Users.css';
import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";
import User from "../user/User";
import {getPostsOfUser} from "../../services/posts.service";
import Posts from "../posts/Posts";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value]);
        })
    }, []);

    const chooseUser = (user) => {
        setUser({...user});

        getPostsOfUser(user.id).then(value => {
            setPosts([...value]);
        });
    }

  return (
    <div className={"wrapper"}>
        <div className="users_list">
            <h3><u>User List</u></h3>

            {
                users.map(el =>
                    <User
                        key={el.id}
                        user={el}
                        chooseUser={chooseUser}
                    />)
            }
        </div>

        {user &&
        <div className="chosen_user_block">
            <Posts posts={posts}/>
        </div>}
    </div>
  );
}

