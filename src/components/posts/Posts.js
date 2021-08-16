import {useEffect, useState} from "react";
import "./Posts.css";
import {getPosts} from "../../services/posts.service";
import Post from "../post/Post";
import PostDetails from "../post_details/PostDetails";


export default function () {

  let [posts, setPosts] = useState([]);
  let [post, setPost] = useState(null);

  useEffect(() => {
    getPosts().then(({data}) => setPosts([...data]));
    }, []);

  const choosePost = (item) => {
    // console.log(item);
    setPost({...item});
  }

console.log(posts);

return (
    <div>
      <div className="posts_wrap">
        <div className="posts_block">
          {
            posts.map(el =>
                <Post
                    key={el.id}
                    post={el}
                    choosePost={choosePost}
                />)
          }
        </div>

        {post &&
          <div className="post_details_block">
            <PostDetails post={post}/>
          </div>
        }
      </div>

      <div className="comments_wrap">
        <div className="comments_block"></div>
        <div className="comments_details_block"></div>
      </div>

    </div>
  );
}