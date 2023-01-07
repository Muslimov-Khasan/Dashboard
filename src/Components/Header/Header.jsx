import React from 'react';
import ManLogo from "./../../Assists/Img/man.png";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h2>Header</h2>
      <div className="header__right">
        <div className="header__icons">
          <span><i class="fa-solid fa-magnifying-glass"></i></span>
          <span><i class="fa-solid fa-bell"></i></span>
        </div>
        <span className='header__user'>
        Jones Ferdinand
        <img src={ManLogo} />
        </span>
      </div>
    </header>
  )
}

export default Header