import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (
    <nav className="navbar">
      <div>
        <img src="" alt="" />
        <h2>Alberto Villanueva</h2>
      </div>
      <ul className="navbar-list">
      <Link to="/"><li className="navbar-btn">Home</li></Link>
      <Link to="/About"><li className="navbar-btn">About</li></Link>
      <Link to="/Contact"><li className="navbar-btn">Contact</li></Link>
      </ul>
      <div>
        <button className="navbar-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;