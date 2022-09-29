import { formatDate } from "../utils/stringFormatter";

const CommentCard = ({ comment }) => {
  const dateString = formatDate(comment.created_at);

  return (
    <article className="comment-card">
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
