import { useEffect, useRef } from "react";
import { formatDate } from "../utils/stringFormatter";

const CommentCard = ({ comment, newCommentId }) => {
  const dateString = formatDate(comment.created_at);
  const commentRef = useRef(null);

  let commentCardClass = "comment-card";

  if (comment.comment_id === newCommentId) {
    commentCardClass += " highlight-comment";
  }

  useEffect(() => {
    if (comment.comment_id === newCommentId) {
      commentRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [comment.comment_id, newCommentId]);

  return (
    <article className={commentCardClass} ref={commentRef}>
      <div className="comment-body">
        <div className="comment-author-wrapper">
          <div className="comment-author">{comment.author}</div>
          <time className="comment-date">🕓 {dateString}</time>
        </div>
        <p>{comment.body}</p>
      </div>
      <aside className="comment-votes">{comment.votes}</aside>
    </article>
  );
};

export default CommentCard;
