import {Link} from "react-router-dom";

export default function Post({post, history}) {
    const goToPostPage = () => {
        history.push('/posts/' + post.id)
    }

    return (
        <div className={"post_item"}>
            <p>{post.id} -- {post.title}</p>
            <button onClick={goToPostPage}>Post DETAILS</button>
        </div>
    );
}