import React from "react";
import styled from "styled-components";

const NewsItem = ({ title, body }) => {
  return (
    <Item>
      <Title>Название: {title}</Title>
      <Description>Содержание: {body}</Description>
    </Item>
  );
};

export default NewsItem;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 16px;
`;

const Description = styled.p`
  font-size: 14px;
`;
