import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ContentCard from "../../Utility/ContentCard/ContentCard";
import imgWarzone from "./../../.resources/warzone.jpg";
import imgMarch2021 from "./../../.resources/Warzone/March-2021-Supercut.jpg";
import imgFebruary2021 from "./../../.resources/Warzone/February-2021-Supercut.jpg";
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
          <ContentCard
            url={"https://youtu.be/EefGskhw55o"}
            title={"Huskies Modern Warfare March 2021 Supercut"}
            thumbnail={imgMarch2021}
            time={"Playback Time: 14:02"}
          />
          <ContentCard
            url={"https://youtu.be/6Gbk8lYMenE"}
            title={"Huskies Modern Warfare February 2021 Supercut"}
            thumbnail={imgFebruary2021}
            time={"Playback Time: 24:33"}
          />
        </div>
      </div>
    </div>
  );
};

export default Warzone;
