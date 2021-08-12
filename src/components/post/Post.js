import Comments from "../comments/Comments";
import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../services/comments.services";

export default function Post({post}) {
    let [comments, setComments] = useState([]);
    // console.log(post);
    useEffect(() => {
        getCommentsOfPost(post.id).then(({data}) => setComments([...data]));
    }, [])
  return (
    <div>
      <li><b>{post.body}</b></li>
      <Comments comments={comments}/>
    </div>
  );
}