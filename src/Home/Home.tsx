import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import imgCalculator from "./../calculator.png";
import mainLogo from "./../logoGray.png";
import imgStockMarket from "./../stock-market.png";
import homeWatch from "./../.resources/homeWatch.png";
import "./Home.css";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  const navigateToCalculator = () => {
    // 👇️ navigate to /calculator
    navigate("/calculator");
  };

  const navigateToPriceChecker = () => {
    // 👇️ navigate to /
    navigate("/price-checker");
  };

  const navigateToWatch = () => {
    // 👇️ navigate to /
    navigate("/watch");
  };

  return (
    <div className="Home">
      <AppBar className="bar" position="sticky" color="transparent">
        <Toolbar className="top">
          <img onClick={navigateToHome} className="img" src={mainLogo} alt="" />
        </Toolbar>
      </AppBar>
      <div className="item" onClick={navigateToCalculator}>
        <h2 className="content-header">Trade Calculator</h2>
        <h3 className="content-subheader">What if. What if. What if.</h3>
        <div className="content-links">Learn more {"›"}</div>
        <div>
          <img className="img-content" src={imgCalculator} alt="" />
        </div>
      </div>
      <div className="item" onClick={navigateToPriceChecker}>
        <h2 className="content-header">Price Checker</h2>
        <h3 className="content-subheader">Supercharged inquiries.</h3>
        <div className="content-links">Learn more {"›"}</div>
        <div>
          <img className="img-content" src={imgStockMarket} alt="" />
        </div>
      </div>
      <div className="item" onClick={navigateToWatch}>
        <h2 className="content-header">Watch</h2>
        <h3 className="content-subheader">Our largest collection yet.</h3>
        <div className="content-links">Learn more {"›"}</div>
        <div>
          <img className="img-content" src={homeWatch} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
