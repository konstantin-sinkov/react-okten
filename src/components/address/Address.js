import Geo from "../geo/Geo";

export default function Address({address}) {
  let {street, suite, city, zipcode, geo} = address;

  return (
    <div>
        <h3><u>User's address</u></h3>
        <h4>street - {street}</h4>
        <h4>suite - {suite}</h4>
        <h4>city - {city}</h4>
        <h4>zipcode - {zipcode}</h4>
        <Geo location={geo}/>
    </div>
  );
}