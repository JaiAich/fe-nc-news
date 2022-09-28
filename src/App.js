import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import AllTopics from "./components/AllTopics";
import FullArticle from "./components/FullArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content-wrapper">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/articles" element={<Articles />} />
            <Route path="/topics" element={<AllTopics />} />
            <Route path="/topics/:topic_slug" element={<Articles />} />
            <Route path="/articles/:article_id" element={<FullArticle />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
