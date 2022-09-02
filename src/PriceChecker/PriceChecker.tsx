import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "./../logoGray.png";
import "./PriceChecker.css";

export const PriceChecker: React.FC = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };
  return (
    <div className="PriceChecker">
      <AppBar className="bar-top" position="static" color="transparent">
        <Toolbar className="top">
          <img onClick={navigateToHome} className="img" src={mainLogo} />
        </Toolbar>
      </AppBar>
      <AppBar className="bar-below" position="sticky" color="transparent">
        <Toolbar className="bar-below-toolbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Price Checker
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="content">
        <TextField
          className="input-bottom"
          id="outlined-basic"
          label="Enter Stock Ticker"
          variant="outlined"
          inputProps={{ style: { textTransform: "uppercase" } }}
          // onChange={onChangePercenttHandler}
        />
        <Button
          className="input-button"
          variant="outlined"
          // onClick={onClickHandler}
          // disabled={buttonDisabled}
        >
          Check Price
        </Button>
      </div>
    </div>
  );
};

export default PriceChecker;
