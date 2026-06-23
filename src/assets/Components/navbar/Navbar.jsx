import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
   <nav className="navbar">
      <div className="logo">
        <h2>Launch Works</h2>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
 
  );
}

export default Navbar;