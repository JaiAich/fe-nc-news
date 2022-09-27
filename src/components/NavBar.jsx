import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-button-wrapper">
        <div key="articles">
          <Link to="/articles">Articles</Link>
        </div>
        <div key="topics">
          <Link to="/topics">Topics</Link>
        </div>
        <div key="users">
          <Link to="/users">Users</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;