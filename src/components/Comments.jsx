import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userComment, setUserComment] = useState("");
  const [newCommentId, setNewCommentId] = useState(0)


  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id).then((data) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [article_id, userComment]);

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  return (
    <section className="comments-wrapper">
      <AddComment setUserComment={setUserComment} article_id={article_id} setNewCommentId={setNewCommentId}/>
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} newCommentId={newCommentId} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
