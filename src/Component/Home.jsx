import React, { useState } from "react";
import banner from "../assets/images/Banner.png";
import "./Home.css";
import grp from "../assets/images/grp3.svg";
import grop from "../assets/images/grp2.svg";
import group from "../assets/images/grp4.svg";
import group1 from "../assets/images/grp1.svg";
import group98 from "../assets/images/Work/Group98.png";
import review from "../assets/images/Work/reviews1.png";
import share from "../assets/images/Work/share 1.png";
import image9 from "../assets/images/ReviewsRecent/image 9.jpg";
import image10 from "../assets/images/ReviewsRecent/image 10.jpg";
import image11 from "../assets/images/ReviewsRecent/image 11.jpg";
import image12 from "../assets/images/ReviewsRecent/image 12.jpg";
import image13 from "../assets/images/ReviewsRecent/image 13.jpg";
import image14 from "../assets/images/ReviewsRecent/image 14.jpg";
import rating from "../assets/images/ReviewsRecent/rating.svg";
import location from "../assets/images/ReviewsRecent/arrow.svg";
import house1 from "../assets/images/House images/house1.jpg";
import house2 from "../assets/images/House images/house2.jpg";
import house3 from "../assets/images/House images/house3.jpg";
import clock from "../assets/images/House images/Group 58.png";
import logoimg1 from "../assets/images/House images/logoimg.png";
import logoimg2 from "../assets/images/House images/logoimg2.png";
const Home = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="main-containt-box">
      <div className="banner-box">
        <img className="banner" src={banner} alt="banner" />
        <div className="banner-txt">
          <h1>Share Your Student Renting Experince</h1>
          <p>Help other students make the right rental choice</p>
          <button className="search-btn">Search Now</button>
        </div>
      </div>
      <div className="accomodation">
        <div className="accomo">
          <h2>Why Review Your Student Accomodation?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br />
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type <br />
            specimen book It has survived not only five centuries
          </p>
        </div>
        <div className="accomo-box">
          <div className="row-box">
            <div className="box">
              <img src={grp} alt="svg1" />
            </div>
            <div className="box-sec">
              Share relevant infomation with other students
            </div>
          </div>
          <div className="row-box">
            <div className="box">
              <img src={grop} alt="svg2" />
            </div>
            <div className="box-sec">
              Help other students make informed rental decisions
            </div>
          </div>
          <div className="row-box">
            <div className="box">
              <img src={group} alt="svg3" />
            </div>
            <div className="box-sec">
              Help other students save time when making rental decision Help to
              improve
            </div>
          </div>
          <div className="row-box">
            <div className="box">
              <img src={group1} alt="svg4" />
            </div>
            <div className="box-sec">
              Help to improve student living standards
            </div>
          </div>
        </div>
      </div>
      <div className="work-container">
        <h1>How It Works</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <div className="main-box">
          <div className="work-left">
            <div className="box-cont">
              <img src={group98} alt="" />
            </div>
            <div className="box-cont">
              <h2>Add your review</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </p>
            </div>
            <div className="box-cont">
              <img src={share} alt="" />
            </div>
          </div>
          <div className="work-right">
            <div className="box-cont">
              <h2>Search for the address</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </p>
            </div>
            <div className="box-cont">
              <img src={review} alt="" />
            </div>
            <div className="box-cont">
              <h2>Share your review</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </p>
            </div>
          </div>
        </div>
        <button className="get-st">Get Started</button>
      </div>
      <div className="recently-review">
        <h2>Recently Reviewed</h2>
        <p>More then 10000 clients who are happy with Us. Are You Next One?</p>
        <div className="house-box">
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
        </div>
        <button className="view-btn">View All</button>
      </div>
      <div className="our-articles">
       <div>
       <h1>Our Articles</h1>
        <p>
          See our latest news and updates for the know the new properties in
          your area.
        </p>
       </div>
        <div className="big-house big-house-fst">
          <img src={house3} alt="house" />
          <div className="detail-fst">
            <h5>Lorem Ipsum is simply dummy</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and industry's
              Lorem Ipsum has been the industry's standard dummy text ever when
              an unknown printer took a galley.
            </p>
            <div className="person-details">
              <div className="image-person">
                <div className="image-box">
                  <img src={logoimg2} alt="" />
                </div>
                <div className="name-person">Alex Liones</div>
              </div>
              <div className="issue-date">
                <div className="clock">
                  <img src={clock} alt="" />
                </div>
                <div className="date">16,Oct 2024, 09:48:00</div>
              </div>
              <div className="read-more">
                <button className="readbtn">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="big-house big-house-fst">
          <img src={house1} alt="house" />
          <div className="detail-fst">
            <h5>Lorem Ipsum is simply dummy</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and industry's
              Lorem Ipsum has been the industry's standard dummy text ever when
              an unknown printer took a galley.
            </p>
            <div className="person-details">
              <div className="image-person">
                <div className="image-box">
                  <img src={logoimg2} alt="" />
                </div>
                <div className="name-person">Alex Liones</div>
              </div>
              <div className="issue-date">
                <div className="clock">
                  <img src={clock} alt="" />
                </div>
                <div className="date">16,Oct 2024, 09:48:00</div>
              </div>
              <div className="read-more">
                <button className="readbtn">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="big-house big-house-fst">
          <img src={house2} alt="house" />
          <div className="detail-fst">
            <h5>Lorem Ipsum is simply dummy</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and industry's
              Lorem Ipsum has been the industry's standard dummy text ever when
              an unknown printer took a galley.
            </p>
            <div className="person-details">
              <div className="image-person">
                <div className="image-box">
                  <img src={logoimg1} alt="" />
                </div>
                <div className="name-person">Alex Liones</div>
              </div>
              <div className="issue-date">
                <div className="clock">
                  <img src={clock} alt="" />
                </div>
                <div className="date">16,Oct 2024, 09:48:00</div>
              </div>
              <div className="read-more">
                <button className="readbtn">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="keep-touch">
        <h1>Let's keep in touch</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="search-bar">
          <input
            type="email"
            name="Email"
            placeholder="Enter you email here"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <button
            className="sub-btn"
            disabled={email == ""}
            onClick={() => {
              console.log(email);
              setEmail("");
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
