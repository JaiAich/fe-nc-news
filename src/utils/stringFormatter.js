export const formatDate = (dateString) => {
  const dateObj = new Date(dateString);
  const formattedDate = `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()}`;

  return formattedDate;
};

export const formatTopic = (topic) => {
  const formattedTopic = `${topic.slice(0, 1).toUpperCase()}${topic.slice(1)}`;
  return formattedTopic;
};
