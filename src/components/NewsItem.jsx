import React from "react";

const NewsItem = ({ title, body }) => {
  return (
    <li>
      <div>Название: {title}</div>
      <div>Содержание: {body}</div>
    </li>
  );
};

export default NewsItem;
