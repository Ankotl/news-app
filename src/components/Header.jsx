import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <HeaderList>
        <Link to="/">
          <li>На главную</li>
        </Link>
        <Link to="/news">
          <li>Новости</li>
        </Link>
        <Link to="/profile">
          <li>Профиль</li>
        </Link>
      </HeaderList>
    </div>
  );
};

export default Header;

const HeaderList = styled.ul`
  display: flex;
  height: 50px;
  width: 100%;
  background-color: green;
  gap: 30px;
  align-items: center;
  padding-left: 50px;
`;
