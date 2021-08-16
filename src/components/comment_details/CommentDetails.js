export default function CommentDetails({comment}) {

  return (
    <div>
      <h3><u>COMMENT DETAILS</u></h3>
      <div>
        <h4>{comment.id} -- {comment.name}</h4>
        <p>{comment.body}</p>
        <p><i>{comment.email}</i></p>
      </div>
    </div>
  );
}