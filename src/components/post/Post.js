export default function Post({post, choosePost}) {
  const onClickPostChoose = () => {
      choosePost(post);
  }

  return (
    <div>
        {post.id} -- {post.title}
        <button onClick={onClickPostChoose}>Post details</button>
    </div>
  );
}