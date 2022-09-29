import { useState } from "react";
import { addCommentToArticle } from "../utils/api";

const AddComment = ({ setUserComment, article_id }) => {
  const [newCommentBody, setNewCommentBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Currently hardcoded username - will update in future
  const username = "grumpy19";
  const handleSubmit = (event) => {
    setIsSubmitting(true);
    event.preventDefault();
    addCommentToArticle(article_id, username, newCommentBody).then((data) => {
      setUserComment(newCommentBody);
      setIsSubmitting(false);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment-form">
      <textarea
        type="text"
        className="add-comment-input"
        placeholder="Add a comment"
        required
        value={newCommentBody}
        onChange={(event) => setNewCommentBody(event.target.value)}
      ></textarea>
      {isSubmitting ? (
        <div>Submitting comment...</div>
      ) : (
        <button className="add-comment-btn">Add Comment</button>
      )}
    </form>
  );
};

export default AddComment;
