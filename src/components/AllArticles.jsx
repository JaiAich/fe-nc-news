import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "./AllArticles.css";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getArticles(undefined, "created_at", "desc").then((data) => {
      setArticles(data.articles);
      setisLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articles-wrapper">
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

export default AllArticles;
