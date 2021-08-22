import {Link} from "react-router-dom";

export default function User({user}) {
  const goToUserPage = () => {

  }

  return (
    <div className={"user_item"}>
      <p>{user.id} -- {user.name}</p>
      <button> <Link to={'/users/' + user.id}>USER DETAILS </Link></button>
    </div>
  );
}