import { formatDate } from "../utils/stringFormatter";
import "./components.css";

const ArticleCard = ({ article }) => {
  const dateString = formatDate(article.created_at);

  return (
    <div className="article-card">
      <h3>{article.title}</h3>
      <div className="author-date-wrapper">
        <div className="article-author">
          <p>By {article.author}</p>
        </div>
        <div className="article-date">
          <p>🕓 {dateString}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
