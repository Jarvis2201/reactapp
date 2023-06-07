import './header.css'
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./pics/Logo.jpg" width="125px" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="Products">Products</a>
          </li>
          <li>
            <a href="Cart">Cart</a>
          </li>
          <li>
            <a href="Accounts">Accounts</a>
          </li>
          <li>
            <a href="Contact US">Contact Us</a>
          </li>
          <li>
            <a href="About US">About Us</a>
          </li>
        </ul>
      </nav>
      {/* Search Bar */}
      <div className="search-bar">
        <form action="#" method="GET">
          <input type="text" name="search" placeholder="Search..." />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
};

export default Navbar;