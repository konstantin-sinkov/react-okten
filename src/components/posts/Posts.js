import {useEffect, useState} from "react";
import "./Posts.css";
import {getPosts} from "../../services/posts.service";
import Post from "../post/Post";
import PostDetails from "../post_details/PostDetails";
import {getComments} from "../../services/comments.service";
import Comments from "../comments/Comments";
import CommentDetails from "../comment_details/CommentDetails";


export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);
    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);


    useEffect(() => {
        getPosts().then(({data}) => setPosts([...data]));
    }, []);

    const choosePost = (item) => {
        // console.log(item);
        setPost({...item});
    }

    useEffect(() => {
        getComments().then(({data}) => setComments([...data]));
    }, []);

    const chooseComment = (item) => {
        setComment({...item});
    }

    return (
        <div>
            <div className="posts_wrap">
                <div className="posts_block">
                    <h3><u>POSTS LIST</u></h3>
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
                <div className="comments_block">
                    <Comments
                        comments={comments}
                        chooseComment={chooseComment}
                    />
                </div>
                {comment &&
                <div className="comments_details_block">
                    <CommentDetails comment={comment}/>
                </div>
                }
            </div>

        </div>
    );
}