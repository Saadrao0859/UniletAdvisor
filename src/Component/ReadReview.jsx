import React from "react";
import "./ReadReview.css";
import { Link } from "react-router-dom";
import rectangle from "../assets/images/Rectanglecopy.png";
import location from "../assets/images/ReviewsRecent/arrow.svg";
import { GrLinkNext } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import propertyData from "./property";

const ReadReview = () => {
  // const propertyData = [
  //   {
  //     id: 1,
  //     image: "./images/ReviewsRecent/image9.jpg",
  //     propertyName: "123 That Road Bournemouth",
  //     stars: 2,
  //   },
  //   {
  //     id: 2,

  //     image: "./images/ReviewsRecent/image10.jpg",
  //     propertyName: "hassan house",
  //     stars: 2,
  //   },
  //   {
  //     id: 3,

  //     image: "./images/ReviewsRecent/image11.jpg",
  //     propertyName: "saad house",
  //     stars: 3,
  //   },
  //   {
  //     id: 4,

  //     image: "./images/ReviewsRecent/image12.jpg",
  //     propertyName: "ahsan house",
  //     stars: 4,
  //   },
  //   {
  //     id: 5,

  //     image: "./images/ReviewsRecent/image13.jpg",
  //     propertyName: "123 That ",
  //     stars: 1,
  //   },
  //   {
  //     id: 6,

  //     image: "./images/ReviewsRecent/image14.jpg",
  //     propertyName: "huzaifa house",
  //     stars: 1,
  //   },
  //   {
  //     id: 7,

  //     image: "./images/ReviewsRecent/image10.jpg",
  //     propertyName: "123234",
  //     stars: 5,
  //   },
  //   {
  //     id: 8,

  //     image: "./images/ReviewsRecent/image14.jpg",
  //     propertyName: "saad house",
  //     stars: 3,
  //   },
  //   {
  //     id: 9,

  //     image: "./images/ReviewsRecent/image12.jpg",
  //     propertyName: "adil house",
  //     stars: 2,
  //   },
  // ];

  return (
    <div className="read-main">
      <h1>Reviews properties</h1>
      <div className="search-box">
        <div className="txt">
          <p>Search for a specific UK address or town</p>
        </div>
        <div className="empty"></div>
      </div>
      <div className="search-bar-parrent">
        <div className="search-menu">
          <input
            type="text"
            placeholder="Start typing the address of the property"
          />
          <button className="srh-btn">Search</button>
        </div>
        {/* This is read review class for search hide */}
        {/* <div className="short-result">
          <p>sort results by</p>
          <div className="Rectangle">
            <input type="text" placeholder="Most Recent" />
          </div>
          <img className="img-btn-box" src={rectangle} alt="" />
        </div> */}
      </div>
      <div className="main-details-houses">
        {propertyData.map((property, index) => {
          return (
            <Link key={property.id} to={`/propertydetail/${property.id}`}>
              <div className="image-boxes">
                <div className="image-show">
                  <img src={property.image} alt={property.propertyName} />
                </div>
                <div className="text-show">
                  <h5>{property.propertyName}</h5>
                </div>
                <div className="rating-box">
                  <div className="rating">
                    <Typography component="legend"></Typography>
                    <Rating name="read-only" value={property.stars} readOnly />
                  </div>
                  <div className="location">
                    <img src={location} alt="Location" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ReadReview;
