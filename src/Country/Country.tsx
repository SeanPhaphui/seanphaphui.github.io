import { AppBar, List, ListItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import mainLogo from "./../logoGray.png";
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
          <img onClick={navigateToHome} className="img" src={mainLogo} />
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
          <div className="category-section-link" onClick={navigateToHome}>Canada (English)</div>
          <div className="category-section-link" onClick={navigateToHome}>Puerto Rico (English)</div>
          <div className="category-section-link" onClick={navigateToHome}>United States</div>
        </div>
      </div>
    </div>
  );
};

export default Country;
