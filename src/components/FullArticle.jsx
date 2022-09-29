import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { changeArticleVotes, getFullArticle } from "../utils/api";
import { formatDate, formatTopic } from "../utils/stringFormatter";
import { UpVoteArrow, DownVoteArrow } from "../icons/VoteArrows";
import Comments from "./Comments";
import "./components.css";

const FullArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [votes, setVotes] = useState(0);
  const [userVote, setUserVote] = useState(0);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getFullArticle(article_id).then((data) => {
      setArticle(data.article);
      setIsLoading(false);
      setVotes(data.article.votes);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const dateString = formatDate(article.created_at);
  let formattedTopic;
  if (article.topic) {
    formattedTopic = formatTopic(article.topic);
  }

  const handleVoteClick = (value) => {
    setVotes((currVotes) => currVotes + value);
    setIsErr(false);
    setUserVote((vote) => vote + value);
    changeArticleVotes(article_id, value).catch((err) => {
      setVotes((currVotes) => currVotes - value);
      setIsErr(true);
      setUserVote((vote) => vote - value);
    });
  };

  // Handle api error using css api-error class to shake element
  let votesClassName = "article-votes";
  if (isErr) {
    votesClassName += " api-error";
  }

  // Handle upvote/downvote display using css classes
  let upVoteClass = "upvote-arrow";
  let upVoteBtn = "vote-btn";
  let downVoteClass = "downvote-arrow";
  let downVoteBtn = "vote-btn";

  if (userVote > 0) {
    upVoteClass = "upvote-arrow-clicked";
    upVoteBtn = "vote-btn disabled";
  } else if (userVote < 0) {
    downVoteClass = "downvote-arrow-clicked";
    downVoteBtn = "vote-btn disabled";
  }

  return (
    <div className="article-wrapper">
      <h3>{article.title}</h3>
      <div className="date-topic-container">
        <h4 className="full-article-topic">{formattedTopic}</h4>
        <h4 className="full-article-date">🕓 {dateString}</h4>
        <div className="votes-container">
          <button className={upVoteBtn} onClick={() => handleVoteClick(1)}>
            <UpVoteArrow className={upVoteClass} />
          </button>
          <div className={votesClassName}>{votes}</div>
          <button className={downVoteBtn} onClick={() => handleVoteClick(-1)}>
            <DownVoteArrow className={downVoteClass} />
          </button>
        </div>
      </div>
      <div className="body-container">
        <p className="article-body">{article.body}</p>
      </div>
      <Comments article_id={article_id} />
    </div>
  );
};

export default FullArticle;
