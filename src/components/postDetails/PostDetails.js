import {useEffect, useState} from "react";
import {getPost} from "../../services/posts.service";

export default function UserDetails({history, match: {params: {id}}}) {

    let [post, setPost] = useState({});

    useEffect(() => {
        getPost(id).then(value => {
            setPost({...value});
        })
    }, [id]);

  return (
    <div>
      <h2><u><p>{post.id} -- {post.title}</p></u></h2>
      <p>{post.body}</p>

    </div>
  );
}