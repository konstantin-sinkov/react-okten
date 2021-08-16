export default function Comment({comment, chooseComment}) {
  console.log('comment');

  const onClickCommentChoose = () => {
    chooseComment(comment);
  }

  return (
    <div>
      {comment.id} -- {comment.name}
      <button onClick={onClickCommentChoose}> >>> </button>
    </div>
  );
}