import './Comments.css';
import {useEffect, useState} from "react";
import {getComments} from "../../services/comments.service";
import Comment from "../comment/Comment";

export default function Comments() {
  let [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then(value => {
      setComments([...value]);
    })
  }, []);

  return (
    <div className={'comments_list'}>
      <h3><u>Comments list</u></h3>
      {
        comments.map(el =>
            <Comment
                key={el.id}
                comment={el}
            />
        )
      }
    </div>
  );
}