export default function User({user}) {

  return (
    <div className={"user_item"}>
      <p>{user.id} -- {user.name}</p>
    </div>
  );
}