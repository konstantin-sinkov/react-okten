import Post from "../post/Post";
import "./Posts.css";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";
import {Route} from "react-router";
import PostDetails from "../postDetails/PostDetails";

export default function Posts(props) {
  let {match: {url}} = props;

  let [posts, setPosts] = useState([]);

  useEffect(() => {
      getPosts().then(value => {
          setPosts([...value]);
      })
  }, []);

  return (
    <div className={'posts_list'}>
        <h3><u>Posts list</u></h3>
        {
            posts.map(el =>
                <Post
                    key={el.id}
                    post={el}
                    url={url}
                />
            )
        }
        <Route path={`${url}/:id`} render={() => <PostDetails/>} />
    </div>
  );
}