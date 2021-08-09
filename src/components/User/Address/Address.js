import Geo from "./Geo/Geo";

export default function Address(props) {
    let {street, suite, city, zipcode, geo} = props;

    return(
      <div>
          <h3>User's address</h3>
          <h4>street - {street}</h4>
          <h4>suite - {suite}</h4>
          <h4>city - {city}</h4>
          <h4>zipcode - {zipcode}</h4>
          <Geo
              lat={geo.lat}
              lng={geo.lng}/>
      </div>
    );
}