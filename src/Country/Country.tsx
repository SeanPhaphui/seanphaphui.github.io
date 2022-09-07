import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "./../.resources/coinTop.svg";
import "./Country.css";

export const Country: React.FC = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  return (
    <div className="Country">
      <AppBar className="bar-top" position="static" color="transparent">
        <Toolbar className="top">
          <img onClick={navigateToHome} className="img" src={mainLogo} alt="" />
        </Toolbar>
      </AppBar>
      <AppBar className="bar-below" position="static" color="transparent">
        <Toolbar className="bar-below-toolbar">
          <Typography
            className="bar-below-toolbar-typo"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Choose Your Country or Region
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="country">
        <h2 className="category-title">
          The United States, Canada, and Puerto Rico
        </h2>
        <div className="category-sections">
          <Link
            className="category-section-link"
            underline="hover"
            onClick={navigateToHome}
          >
            Canada (English)
          </Link>
          <Link
            className="category-section-link"
            underline="hover"
            onClick={navigateToHome}
          >
            Puerto Rico (English)
          </Link>
          <Link
            className="category-section-link"
            underline="hover"
            onClick={navigateToHome}
          >
            United States
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Country;
