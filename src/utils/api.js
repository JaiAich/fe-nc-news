import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-server-app.herokuapp.com/api",
});

export const getArticles = (topic, sortBy, order) => {
  return newsApi
    .get("/articles", {
      params: { topic: topic, sort_by: sortBy, order: order },
    })
    .then((res) => {
      return res.data;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data;
  });
};

export const getFullArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};
