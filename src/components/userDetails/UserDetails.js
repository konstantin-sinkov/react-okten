import {useEffect, useState} from "react";
import {getUser} from "../../services/users.service";

export default function UserDetails({history, match: {params: {id}}}) {

  let [user, setUser] = useState({});

  useEffect(() => {
    getUser(id).then(value => {
      setUser({...value});
    })
  }, [id]);


  console.log(history);
  console.log(id);
  // console.log(user);

  return (
    <div>
      <h2><u>User Details</u></h2>
      <h3>{user.username}</h3>
      <h3>name - {user.name}</h3>
      <h4>user.id - {user.id}</h4>
      <h4>user email - {user.email}</h4>
      <h4>user phone - {user.phone}</h4>
      <h4>user website - {user.website}</h4>
    </div>
  );
}