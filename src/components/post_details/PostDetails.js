export default function PostDetails({post}) {

    return (
    <div>
        <h3><u>POST DETAILS</u></h3>
        <h4>{post.id} -- {post.title}</h4>
        <p>{post.body}</p>
    </div>
  );
}