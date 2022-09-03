import {
    AppBar,
    Autocomplete,
    Button,
    Card, CardContent,
    TextField,
    Toolbar,
    Typography
  } from "@mui/material";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import mainLogo from "./../logoGray.png";
  import tickers from "./../Utility/tickers.json";
  
  export const Watch: React.FC = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
      // 👇️ navigate to /
      navigate("/");
    };
  
    return (
      <div className="Watch">
        <AppBar className="bar-top" position="static" color="transparent">
          <Toolbar className="top">
            <img onClick={navigateToHome} className="img" src={mainLogo} />
          </Toolbar>
        </AppBar>
        <AppBar className="bar-below" position="sticky" color="transparent">
          <Toolbar className="bar-below-toolbar">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Watch
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="content">

        </div>
      </div>
    );
  };
  
  export default Watch;
  