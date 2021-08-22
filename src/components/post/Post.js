import {Link} from "react-router-dom";

export default function Post({post, url}) {

  return (
    <div className={'post_item'}>
      <p>{post.id} -- {post.title}</p>

      <Link to={{pathname: `${url}/${post.id}`, state: post}}>Post details</Link>
    </div>
  );
}