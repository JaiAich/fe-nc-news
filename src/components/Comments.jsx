import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setComments(data.comments);
    });
  }, [article_id]);

  return (
    <div className="comments-wrapper">
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
