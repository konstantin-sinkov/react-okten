import Post from "../post/Post";

export default function Posts({posts}) {

  return (
    <div>
      <h4><u>User's posts</u></h4>
      <ul>
      {
        posts.map(el =>
            <Post
              post={el}
              key={el.id}
        />)
      }
      </ul>
    </div>
  );
}