import React, { useState } from "react";
import "./ReadReview.css";
import { Link } from "react-router-dom";

import location from "../assets/images/ReviewsRecent/arrow.svg";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import propertyData from "./property";

const ReadReview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(propertyData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setFilteredProperties(propertyData);
    } else {
      const filtered = propertyData.filter(
        (property) =>
          property.propertyName.toLowerCase().includes(term) ||
          (property.location && property.location.toLowerCase().includes(term))
      );
      setFilteredProperties(filtered);
    }
  };

  const handleSearchButton = () => {
    if (searchTerm === "") {
      setFilteredProperties(propertyData);
    } else {
      const filtered = propertyData.filter(
        (property) =>
          property.propertyName.toLowerCase().includes(searchTerm) ||
          (property.location &&
            property.location.toLowerCase().includes(searchTerm))
      );
      setFilteredProperties(filtered);
    }
  };

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
            value={searchTerm}
            onChange={handleSearch}
            onKeyPress={(e) => e.key === "Enter" && handleSearchButton()}
          />
          {/* <button className="srh-btn" onClick={handleSearchButton}>
            Search
          </button> */}
        </div>
      </div>
      <div className="main-details-houses">
        {filteredProperties.map((property) => {
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
        {filteredProperties.length === 0 && (
          <div className="no-results">
            <p>No properties found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadReview;
