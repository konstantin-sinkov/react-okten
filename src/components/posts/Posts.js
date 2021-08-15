import Post from "../post/Post";

export default function Posts({posts}) {
  return (
    <div>
        <h3><u>User Posts</u></h3>
        {
            posts.map(el =>
                <Post
                    key={el.id}
                    post={el}
                />
            )
        }
    </div>
  );
}