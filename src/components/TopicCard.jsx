import "./components.css";

const TopicCard = ({ topic }) => {
  const formattedSlug = `${topic.slug
    .slice(0, 1)
    .toUpperCase()}${topic.slug.slice(1)}`;

  return (
    <div className="topic-card">
      <h3>{formattedSlug}</h3>
      <div className="description-wrapper">
        <p>{topic.description}</p>
      </div>
    </div>
  );
};

export default TopicCard;
