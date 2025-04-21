import React from "react";
import "./Articles.css";
import articlesbanner from "../assets/images/articlesbanner.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";
import articleData from "./article";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div className="articles-main-box">
      <div className="banner-img-box">
        <img className="banner" src={articlesbanner} alt="" />
        <div className="new-arivals">
          <h1 className="header-one">Our Articles</h1>
          <p>Home / Articles</p>
        </div>
      </div>
      <div className="main-article-about">
        {articleData.map((article, index) => {
          return (
            <Link key={article.id} to={`/ArticlesDetailPage/${article.id}`}>
              <div
                className="house-article-details"
                onClick={() => {
                  console.log(article);
                }}
              >
                <img
                  className="image-article"
                  src={article.image}
                  alt={article.articleName}
                />
                <h3 className="image-article-h3">{article.articleName}</h3>
                <p className="image-article-p">{article.articledetail}</p>
                <div className="image-artical-logo-box">
                  <img
                    className="image-article-logo"
                    src={article.personimage}
                    alt={article.personimage}
                  />
                  <p>{article.personName}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* <div className="next-and-back">
        {<IoIosArrowRoundBack />}
        <IoArrowBack />
        <p>1</p>
        <p>2</p>
        <p>3</p>
        {<GrFormNextLink />}
        <GrLinkNext />
      </div> */}
    </div>
  );
};

export default Articles;
