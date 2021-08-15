import './User.css';

export default function User({user, chooseUser}) {
    const onClickChoose = () => {
        chooseUser(user);
    }

  return (
    <div className={"user_item"}>
      <p>{user.id} -- {user.name}</p>
      <button onClick={onClickChoose}>USER POSTS</button>
    </div>
  );
}