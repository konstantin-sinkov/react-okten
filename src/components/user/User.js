import Address from "../address/Address";

export default function User({item}) {
  let {id, name, username, email, phone, website, address, company} = item;

  return (
    <div>
        <h3>{username}</h3>
        <h3>name - {name}</h3>
        <h4>user.id - {id}</h4>
        <h4>user email - {email}</h4>
        <h4>user phone - {phone}</h4>
        <h4>user website - {website}</h4>

        <Address address={address}/>
    </div>
  );
}