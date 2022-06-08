import React from "react";
import { useSelector } from "react-redux";
import NewsItem from "../components/NewsItem";
import useFetching from "../hooks/useFetching";
import { setNews } from "../store/slices/appSlices";

const News = () => {
  const news = useSelector((state) => state.app.news);
  useFetching(setNews);
  return (
    <div>
      <ul>
        {news.map((obj) => {
          return <NewsItem key={obj.id} {...obj} />;
        })}
      </ul>
    </div>
  );
};

export default News;
