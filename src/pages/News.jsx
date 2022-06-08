import React from "react";
import { useSelector } from "react-redux";
import NewsItem from "../components/NewsItem";
import useFetching from "../hooks/useFetching";
import { setNews } from "../store/slices/appSlices";
import styled from "styled-components";

const News = () => {
  const news = useSelector((state) => state.app.news);
  useFetching(setNews);
  return (
    <NewsList>
      {news.map((obj) => {
        return <NewsItem key={obj.id} {...obj} />;
      })}
    </NewsList>
  );
};

export default News;

const NewsList = styled.ul`
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 50px;
  gap: 30px;
`;
