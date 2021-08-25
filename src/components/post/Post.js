import {Link, useHistory} from "react-router-dom";
import {useState} from "react";

export default function Post({post, url}) {
  let history = useHistory();
  console.log(url);

  return (
    <div className={'post_item'}>
      <p>{post.id} -- {post.title}</p>

      <Link to={`${url}/${post.id}`}>Post details</Link>
    </div>
  );
}