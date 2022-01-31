import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Article from "./component/article";
import Detail from "./pages/detail";

function App() {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=Apple&from=2022-01-30&sortBy=popularity&apiKey=36fc6715e77f4fefa55bcbb1cb99c493"
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Article articles={articles} />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
