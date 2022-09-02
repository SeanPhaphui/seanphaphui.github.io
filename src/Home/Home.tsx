import React from "react";
import { useNavigate } from "react-router-dom";
import imgCalculator from "./../calculator.png";
import imgStockMarket from "./../stock-market.png";
import "./Home.css";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const navigateToCalculator = () => {
    // 👇️ navigate to /calculator
    navigate("/calculator");
  };

  const navigateToPriceChecker = () => {
    // 👇️ navigate to /
    navigate("/price-checker");
  };

  return (
    <div className="Home">
      <div className="item" onClick={navigateToCalculator}>
        <h2 className="content-header">Trade Caclulator</h2>
        <h3 className="content-subheader">What if generator.</h3>
        <div className="content-links">
          <a onClick={navigateToCalculator}>Learn more {"›"}</a>
        </div>
        <div>
          <img className="img-content" src={imgCalculator} />
        </div>
      </div>
      <div onClick={navigateToPriceChecker}>
        <h2 className="content-header">Price Checker</h2>
        <h3 className="content-subheader">Supercharged inquiries.</h3>
        <div className="content-links">
          <a onClick={navigateToPriceChecker}>Learn more {"›"}</a>
        </div>
        <div>
          <img className="img-content" src={imgStockMarket} />
        </div>
      </div>
    </div>
  );
};

export default Home;
