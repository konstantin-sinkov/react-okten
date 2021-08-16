export default function PostDetails({post}) {

    return (
    <div>
        <h4>{post.id} -- {post.title}</h4>
        <p>{post.body}</p>
    </div>
  );
}