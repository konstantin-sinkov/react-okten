import {Link} from "react-router-dom";

export default function User({user, history}) {
  const goToUserPage = () => {
      history.push('/users/' + user.id)
  }

  return (
    <div className={"user_item"}>
      <p>{user.id} -- {user.name}</p>
      <button onClick={goToUserPage}>USER DETAILS</button>
    </div>
  );
}