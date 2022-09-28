import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "./components.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { topic_slug } = useParams();

  let formattedSlug;

  if (topic_slug) {
    formattedSlug = `${topic_slug.slice(0, 1).toUpperCase()}${topic_slug.slice(
      1
    )}`;
  }

  useEffect(() => {
    setisLoading(true);
    getArticles(topic_slug, "created_at", "desc").then((data) => {
      setArticles(data.articles);
      setisLoading(false);
    });
  }, [topic_slug]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articles-wrapper">
      {topic_slug ? (
        <h2 className="filtered-articles-header">
          Articles about: {formattedSlug}
        </h2>
      ) : null}
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
