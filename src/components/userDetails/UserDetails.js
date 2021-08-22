import {useParams} from "react-router";

export default function UserDetails({history, match: {params: {id}}}) {
  let userId = useParams('id');

  console.log(history);
  console.log(userId);
  console.log(id);

  return (
    <div>
    UserDetails
    </div>
  );
}