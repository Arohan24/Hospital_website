import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import UserIcon from "../Icons/UserIcon";
import SearchIcon from "../Icons/SearchIcon";

function NavBar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <nav className="navbar">
      <div className="logo">HospitalApp</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('search')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/search">
            <SearchIcon hover={hoveredItem === 'search'} />
          </Link>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('user')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/login-signup">
            <UserIcon hover={hoveredItem === 'user'}/>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
