import React from "react";
import "./PropertyDetails.css";
import { FaFacebook, FaInstagram, FaPhone, FaStar } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import propertyData from "./property"; // You can import the propertyData from the same place
import { useParams } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PropertyDetails = () => {
  const { id } = useParams();

  // Find the property based on the id
  const property = propertyData.find(
    (property) => property.id === parseInt(id)
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="propertyDetails">
      <div className="house-info-details">
        <div className="picture-house-info">
          <img
            className="house-image-deatils-info"
            src={property.image}
            alt=""
          />
        </div>
        <div className="house-rating-details">
          <h1>{property.propertyName}</h1>
          <div className="rating-icons-house">
            <FaStar className="react-icon" />
            <FaStar className="react-icon" />
            <FaStar className="icon-field" />
            <FaStar className="icon-field" />
            <FaStar className="icon-field" /> ({property.stars})
          </div>
          <p className="prices-of-house">
            <h4>Price of House =</h4>
            <span className="price-fst-house">{property.price}</span>
            <span>{property.discountPrice}</span>
          </p>
          <p className="priceOfhouseDet">{property.priceOfhouseDet}</p>
          <button className="btn-add-card">ADD CART</button>
          <p>Featurs: Faimly, SwimingPool, Casual</p>
          <p>Tags: Modern, Design, Coloured</p>

          <div className="contact-us-box">
            <div className="contact-us-box-info">
              <a className="contact-usicons" href="https://wa.me/923329281100">
                <FaWhatsapp />
              </a>
            </div>
            <div className="contact-us-box-info">
              <a className="contact-usicons" href="tel:92332921100">
                <FaPhone />
              </a>
            </div>
            <div className="contact-us-box-info">
              <a
                className="contact-usicons"
                href="https://www.facebook.com/profile.php?id=100089237584637"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="contact-us-box-info">
              <a
                className="contact-usicons"
                href="https://www.instagram.com/saad_rao_8/profilecard/?igsh=eWMxajRnejk4bjNq"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Reviews(0)" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            odit veritatis facilis ab quae eligendi esse dolorum totam eum
            labore architecto commodi atque eaque, ea laudantium voluptates
            minima officia asperiores.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos dolorem harum autem quia pariatur, ducimus fugit
            corrupti, tenetur hic sit earum corporis amet ea repellat nobis quis
            veritatis distinctio assumenda!
          </p>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default PropertyDetails;
