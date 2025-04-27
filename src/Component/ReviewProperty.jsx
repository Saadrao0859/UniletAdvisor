import React from "react";
import "./ReviewProperty.css";
import fstimg from "../assets/images/ReviewProperty/Review1.png";
import image9 from "../assets/images/ReviewsRecent/image 9.jpg";
import image10 from "../assets/images/ReviewsRecent/image 10.jpg";
import image11 from "../assets/images/ReviewsRecent/image 11.jpg";
import image12 from "../assets/images/ReviewsRecent/image 12.jpg";
import image13 from "../assets/images/ReviewsRecent/image 13.jpg";
import image14 from "../assets/images/ReviewsRecent/image 14.jpg";
import rating from "../assets/images/ReviewsRecent/rating.svg";
import location from "../assets/images/ReviewsRecent/arrow.svg";

const ReviewProperty = () => {
  return (
    <div className="container-Review-property">
      <div className="image-fst">
        <img src={fstimg} alt="" />
      </div>
      <div className="street-address">
        <h1>Review a property that you've lived in</h1>
        <p>(or still living in)</p>
        <div className="search-address">
          <p>Street Address :</p>
          <input
            type="text"
            placeholder="Start typing the address of the property"
          />
          <button className="srchbtn">Search</button>
        </div>
      </div>
      <div className="recent-review">
        <h2>Recently Reviewed</h2>
        <p>More then 10000 clients who are happy with Us. Are You Next One?</p>
        <div className="house-box ">
          <div className="image-boxes">
            <div className="image-show">
              <img src={image9} alt="" />
            </div>
            <div className="text-show">
              <h5>123 That Road Bournemouth</h5>
            </div>
            <div className="rating-box">
              <div className="rating">
                <img src={rating} alt="" />
              </div>
              <div className="location">
                <img src={location} alt="" />
              </div>
            </div>
          </div>
          <div className="image-boxes">
            <div className="image-show">
              <img src={image10} alt="" />
            </div>
            <div className="text-show">
              <h5>123 That Road Bournemouth</h5>
            </div>
            <div className="rating-box">
              <div className="rating">
                <img src={rating} alt="" />
              </div>
              <div className="location">
                <img src={location} alt="" />
              </div>
            </div>
          </div>
          <div className="image-boxes">
            <div className="image-show">
              <img src={image11} alt="" />
            </div>
            <div className="text-show">
              <h5>123 That Road Bournemouth</h5>
            </div>
            <div className="rating-box">
              <div className="rating">
                <img src={rating} alt="" />
              </div>
              <div className="location">
                <img src={location} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="house-box house-box-lower">
          <div className="image-boxes">
            <div className="image-show">
              <img src={image12} alt="" />
            </div>
            <div className="text-show">
              <h5>123 That Road Bournemouth</h5>
            </div>
            <div className="rating-box">
              <div className="rating">
                <img src={rating} alt="" />
              </div>
              <div className="location">
                <img src={location} alt="" />
              </div>
            </div>
          </div>
          <div className="image-boxes">
            <div className="image-show">
              <img src={image13} alt="" />
            </div>
            <div className="text-show">
              <h5>123 That Road Bournemouth</h5>
            </div>
            <div className="rating-box">
              <div className="rating">
                <img src={rating} alt="" />
              </div>
              <div className="location">
                <img src={location} alt="" />
              </div>
            </div>
          </div>
          <div className="image-boxes">
            <div className="image-show">
              <img src={image14} alt="" />
            </div>
            <div className="text-show">
              <h5>123 That Road Bournemouth</h5>
            </div>
            <div className="rating-box">
              <div className="rating">
                <img src={rating} alt="" />
              </div>
              <div className="location">
                <img src={location} alt="" />
              </div>
            </div>
          </div>
        </div> */}
        <button className="view-btn">View All</button>
      </div>
    </div>
  );
};

export default ReviewProperty;
