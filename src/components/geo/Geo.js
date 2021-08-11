export default function Geo({location}) {
  return (
    <div>
        <h4><u>User's location</u></h4>
        <h5>latitude - ({location.lat}), longitude - ({location.lng})</h5>
    </div>
  );
}