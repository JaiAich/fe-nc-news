import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AllArticles from "./components/AllArticles";
import AllTopics from "./components/AllTopics";
import SingleTopic from "./components/SingleTopic";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content-wrapper">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/articles" element={<AllArticles />} />
            <Route path="/topics" element={<AllTopics />} />
            <Route path="/topics/:topic_slug" element={<SingleTopic />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
