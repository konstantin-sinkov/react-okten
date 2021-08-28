export default function User({user}) {
  let {id, name, email} = user;

  return (
    <div>
        <h3>{id} -- {name} --{email}</h3>
    </div>
  );
}