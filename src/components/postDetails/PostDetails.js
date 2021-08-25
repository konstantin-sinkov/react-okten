import {useEffect, useState} from "react";
import {getPost} from "../../services/posts.service";

export default function PostDetails({history, match: {params: {id}}}) {
    let [post, setPost] = useState({});
    useEffect(() => {
        getPost(id).then(value => {
            setPost({...value})
        })
    })

  return (
    <div>
      <p>{post.id} -- {post.title}</p>
      <p>{post.body}</p>

    </div>
  );
}