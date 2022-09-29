import { formatDate } from "../utils/stringFormatter";

const CommentCard = ({ comment }) => {
  const dateString = formatDate(comment.created_at);

  return (
    <div className="comment-card">
      <div className="comment-body">
        <div className="comment-author-wrapper">
          <div className="comment-author">{comment.author}</div>
          <div className="comment-date">🕓 {dateString}</div>
        </div>
        <p>{comment.body}</p>
      </div>
      <div className="comment-votes">{comment.votes}</div>
    </div>
  );
};

export default CommentCard;
