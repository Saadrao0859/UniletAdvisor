import React from "react";
import Header from "./Component/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Component/Home";
import ReviewProperty from "./Component/ReviewProperty";
import ReadReview from "./Component/ReadReview";
import Articles from "./Component/Articles";
import "./App.css";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import ArticlesDetailPage from "./Component/ArticlesDetailPage";
import PropertyDetails from "./Component/PropertyDetails";
import SignUp from "./Component/SignUp";
import Scrolltotop from "./Component/Scrolltotop";
const App = () => {
  return (
    <Router>
      <Scrolltotop />
      <div className="main-box">
        <Header />
        <div className="main-contant">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/reviewproperty" element={<ReviewProperty />} />
            <Route path="/readreview" element={<ReadReview />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/login" element={<Login />} />
            <Route path="/propertyDetails" element={<PropertyDetails />} />
            <Route path="/propertydetail/:id" element={<PropertyDetails />} />
            <Route
              path="/articlesDetailPage/:id"
              element={<ArticlesDetailPage />}
            />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
