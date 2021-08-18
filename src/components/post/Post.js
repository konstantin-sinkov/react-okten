export default function Post({post}) {

  return (
    <div className={'post_item'}>
      <p>{post.id} -- {post.title}</p>
    </div>
  );
}