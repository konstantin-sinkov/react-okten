import Comment from "../comment/Comment";
import {useState} from "react";

export default function Comments({comments, chooseComment}) {
    // console.log(comments);

  return (
    <div>
        <h3><u>COMMENTS LIST</u></h3>
        {
            comments.map(el =>
                <Comment
                    key={el.id}
                    comment={el}
                    chooseComment={chooseComment}
                />
            )
        }

    </div>
  );
}