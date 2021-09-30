import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="black">
      <div className="header--logo">
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"></img>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
