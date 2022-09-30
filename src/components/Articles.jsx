import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "./components.css";
import SortBy from "./SortBy";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { topic_slug } = useParams();
  const [sortByValue, setSortByValue] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  let formattedSlug;

  if (topic_slug) {
    formattedSlug = `${topic_slug.slice(0, 1).toUpperCase()}${topic_slug.slice(
      1
    )}`;
  }

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic_slug, sortByValue, sortOrder).then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, [topic_slug, sortByValue, sortOrder]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articles-wrapper">
      <SortBy
        sortByValue={sortByValue}
        setSortByValue={setSortByValue}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      {topic_slug ? (
        <h2 className="filtered-articles-header">
          Articles about: {formattedSlug}
        </h2>
      ) : null}
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <ArticleCard article={article} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
