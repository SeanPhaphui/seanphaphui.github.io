import {
  AppBar,
  Autocomplete,
  Button,
  Card,
  CardContent,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "./../logoGray.png";
import tickers from "./../Utility/tickers.json";
import imgWarzone from "./../.resources/warzone.jpg";
import imgValorant from "./../.resources/valorant.jpg";
import imgPhasmophobia from "./../.resources/phasmophobia.jpg";
import "./Watch.css";
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
      <div className="grid-container">
        <h2 className="watch-title">Watch to your heart's content</h2>
        <div className="watch-item">
          <div className="watch-item-header">
            <div className="watch-item-title">
              Drop in, armor up, and battle your way to the top.
            </div>
            <div className="watch-item-description">
              Warzone is a game-changer packed with non-stop and endless action
              that’s free-to-play and free-for-everyone.
            </div>
          </div>
          <div className="watch-item-content">
            <img className="watch-item-image" src={imgWarzone} />
            <div className="watch-item-image-description">
              Call of Duty: Warzone
            </div>
          </div>
        </div>
        <div className="watch-item">
          <div className="watch-item-header">
            <div className="watch-item-title">
              Outwit, outplay, and outshine your competition.
            </div>
            <div className="watch-item-description">
              Blend your style and experience on a global, competitive stage
              using sharp gunplay and tactical abilities.
            </div>
          </div>
          <div className="watch-item-content">
            <img className="watch-item-image" src={imgValorant} />
            <div className="watch-item-image-description">Valorant</div>
          </div>
        </div>
        <div className="watch-item">
          <div className="watch-item-header">
            <div className="watch-item-title">
              Immerse yourself in a realistic experience that will get your
              heart pumping.
            </div>
            <div className="watch-item-description">
              Paranormal activity is on the rise and it is up to your team to
              investigate and end the nightmare.
            </div>
          </div>
          <div className="watch-item-content">
            <img className="watch-item-image" src={imgPhasmophobia} />
            <div className="watch-item-image-description">Phasmophobia</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
