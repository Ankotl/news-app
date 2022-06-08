import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>На главную</li>
        </Link>
        <Link to="/news">
          <li>Новости</li>
        </Link>
        <Link to="/profile">
          <li>Профиль</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
