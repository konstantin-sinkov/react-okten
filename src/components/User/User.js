import './User.css';
import Address from "./Address/Address";
import Company from "./Company/Company";

export default function User(props) {
    let {id, name, surname, email, phone, website, address, company} = props;

    return(
      <div className={'user_block'}>
          <h2>{name} {surname}</h2>
          <h3>user.id - {id}</h3>
          <h4>user email - {email}</h4>
          <h4>user phone - {phone}</h4>
          <h4>user website - {website}</h4>
          <Address
              street={address.street}
              suite={address.suite}
              city={address.city}
              zipcode={address.zipcode}
              geo={address.geo}
          />
          <Company
              companyName={company.name}
              catchPhrase={company.catchPhrase}
              bs={company.bs}
          />
      </div>
    );
}