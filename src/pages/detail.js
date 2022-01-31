import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const id = location.state.id == null ? 0 : location.state.id;
  const articles = location.state.articles;
  console.log(articles[id]);
  const article = articles[id];

  return (
    <div className="detail-container">
      <div className="detail">
        <h3>Author : {article.author}</h3>
        <span>
          <b>Content :</b> {article.content}
        </span>
        <span>
          <b>Description :</b> {article.description}
        </span>
        <span>
          <b>Published At : </b>
          {article.publishedAt}
        </span>
        <span>
          <b>Url :</b> {article.url}
        </span>
      </div>
    </div>
  );
}
