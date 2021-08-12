import Comment from "../comment/Comment";

export default function Comments({comments}) {
  return (
    <div>
      <h5><u>Comments to user's post</u></h5>
      <ol>
      {
        comments.map(el => <Comment comment={el} key={el.id}/>)
      }
      </ol>
    </div>
  );
}