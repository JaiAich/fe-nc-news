import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AllArticles from "./components/AllArticles";
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
