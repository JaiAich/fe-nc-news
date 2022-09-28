import "./components.css";

const ArticleCard = ({ article }) => {
  const dateObj = new Date(article.created_at);
  const dateString = `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()}`;

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
