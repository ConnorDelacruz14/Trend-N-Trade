import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="page-header">
      <div>
        <Link to="/">
          <img src="/public/logo.png" alt="TNT-logo" />
        </Link>
      </div>
      <div className="input-box">
        <div>
          <div className="search-icon">
            <IoSearchOutline />
          </div>
          <input type="text" placeholder="Search here..." />
        </div>
        <a href="/search" className = "search"><button>Search</button></a>
      </div>
      <div className="func">
        <li>
          <Link to="/Payment">Account</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/Home">My Listings</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
