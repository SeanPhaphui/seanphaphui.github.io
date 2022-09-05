import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import imgPlay from "./../../.resources/playButton.jpg";
import imgWarzone from "./../../.resources/warzone.jpg";
import imgMarch2021 from "./../../.resources/Warzone/March-2021-Supercut.jpg";
import mainLogo from "./../../logoGray.png";
import "./Warzone.css";
export const Warzone: React.FC = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  return (
    <div className="Warzone">
      <AppBar className="bar-top" position="static" color="transparent">
        <Toolbar className="top">
          <img onClick={navigateToHome} className="img" src={mainLogo} />
        </Toolbar>
      </AppBar>
      <AppBar className="bar-below" position="sticky" color="transparent">
        <Toolbar className="bar-below-toolbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Call of Duty: Warzone
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="warzone-section">
        <div className="warzone-section-header">
          <h2 className="warzone-section-title">Welcome to Warzone.</h2>
          <div className="warzone-section-title-content">
            <img className="warzone-section-title-image" src={imgWarzone} />
          </div>
        </div>
        <div className="grid-container">
          <div
            className="warzone-item"
            onClick={() => {
              window.open("https://youtu.be/EefGskhw55o");
            }}
          >
            <div className="warzone-item-header">
              Huskies Modern Warfare March 2021 Supercut
            </div>
            <div className="warzone-item-content">
              <div className="warzone-item-content-image">
                <div className="warzone-item-content-image-overlay">
                  <img
                    className="warzone-item-content-image-overlay-child"
                    src={imgPlay}
                  />
                </div>
                <img
                  className="warzone-item-content-image-thumbnail"
                  src={imgMarch2021}
                />
              </div>
              <div className="warzone-item-content-image-description">
                Playback Time: 14:02
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warzone;
