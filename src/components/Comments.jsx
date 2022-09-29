import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id).then((data) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  return (
    <section className="comments-wrapper">
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
