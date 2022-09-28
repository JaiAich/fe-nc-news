import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const SingleTopic = () => {
  const { topic_slug } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const formattedSlug = `${topic_slug
    .slice(0, 1)
    .toUpperCase()}${topic_slug.slice(1)}`;

  useEffect(() => {
    setisLoading(true);
    getArticles(topic_slug, "created_at", "desc").then((data) => {
      setisLoading(false);
      setArticles(data.articles);
    });
  }, [topic_slug]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articles-wrapper">
      <h2 className="filtered-articles-header">Articles about: {formattedSlug}</h2>
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

export default SingleTopic;
