import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

function Article(props) {
  return (
    <div className="container">
      <h1>List Articles</h1>
      <div>
        {props.articles.map((article, idx) => (
          <Link
            key={idx}
            to="/detail"
            state={{ id: idx, articles: props.articles }}
            className="link"
          >
            <div className="list-container">
              <h5>{article.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Article;
