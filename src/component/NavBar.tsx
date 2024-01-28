// components/Navbar.tsx
import React from 'react';
import Nav from './Nav/Nav';
import LogoComponent from './Logo/LogoComponent';
import Main from './Nav/Main';


const Navbar: React.FC = () => {
    return (
        <header className="navbar-container">
        <div className="content-container">
          <LogoComponent />
          <Nav />
          <Main />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </div>
      </header>
    );
}

export default Navbar;
