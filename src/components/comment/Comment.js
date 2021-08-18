export default function Comment({comment}) {

  return (
    <div className={'comment_item'}>
      <p>{comment.id} -- {comment.name}</p>
    </div>
  );
}