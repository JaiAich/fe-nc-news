import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFullArticle } from "../utils/api";
import { formatDate, formatTopic } from "../utils/stringFormatter";
import { UpVoteArrow, DownVoteArrow } from "../icons/VoteArrows";
import "./components.css";

const FullArticle = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getFullArticle(article_id).then((data) => {
      setArticle(data.article);

      setIsLoading(false);
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

  return (
    <div className="article-wrapper">
      <h3>{article.title}</h3>
      <div className="date-topic-container">
        <h4 className="full-article-topic">{formattedTopic}</h4>
        <h4 className="full-article-date">🕓 {dateString}</h4>
      </div>
      <div className="body-container">
        <p className="article-body">{article.body}</p>
        <div className="votes-container">
          <UpVoteArrow />
          <div className="article-votes">{article.votes}</div>
          <DownVoteArrow />
        </div>
      </div>
    </div>
  );
};

export default FullArticle;
