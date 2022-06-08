import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Title>Главная страница приложения</Title>
    </div>
  );
};

export default Home;

const Title = styled.h1`
  margin-top: 150px;
  font-size: 25px;
  text-align: center;
`;
