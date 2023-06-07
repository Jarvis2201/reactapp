import React from 'react';
import './home.css'
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src="pics/Logo.png.jpg" width="125px" alt="Logo" />
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
        <div className="row">
          <div className="col2">
            <h1>
              HEALTH HUB <br /> HEALTH COMES FIRST!
            </h1>
            <p>
              The Premier Destination for All Your Health and Wellness Needs. <br /> Discover a Wide Range of Quality
              Medications, Supplements, <br /> and Health Products for a Happier and Healthier Life.
            </p>
            <a href="" className="btn">
              Explore Now
            </a>
          </div>
          <div className="col2">
            <img src="pics/home.png" alt="Home" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>HEALTH HUB</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
      </body>
    </html>
  );
};

export default Home;