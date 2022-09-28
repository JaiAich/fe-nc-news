import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";
import TopicCard from "./TopicCard";
import "./components.css";

const AllTopics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getTopics().then((data) => {
      setTopics(data.topics);
      setisLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="topics-wrapper">
      <ul className="topics-list">
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <Link to={`${topic.slug}`}>
                <TopicCard topic={topic} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllTopics;
