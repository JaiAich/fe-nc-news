import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-button-wrapper">
        <div>
          <Link to="/articles">Articles</Link>
        </div>
        <div>
          <Link to="/topics">Topics</Link>
        </div>
        <div>
          <Link to="/users">Users</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
