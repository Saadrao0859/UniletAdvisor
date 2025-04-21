import React, { useEffect } from "react";
import "./ArticlesDetailPage";
import { Link, useParams } from "react-router-dom";
import "./ArticlesDetailPage.css";
import image9 from "../assets/images/ReviewsRecent/image 9.jpg";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import articleData from "./article.js";

const ArticlesDetailPage = () => {
  const { id } = useParams();
  const article = articleData[id - 1];
  useEffect(() => {
    console.log(article);
  }, []);
  return (
    <div className="article-container">
      <h1 className="header-articles">{article.articleName}</h1>
      <p className="meta">{article.articalPublish}</p>
      <div className="content-container">
        <div className="text-content">{article.articleDescription}</div>
        <div className="image-container-Articles">
          <img src={article.image} alt={article.articleName} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetailPage;
