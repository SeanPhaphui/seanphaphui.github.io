import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ContentCard from "../../Utility/ContentCard/ContentCard";
import imgValorant from "./../../.resources/valorant.jpg";
import imgVal01 from "./../../.resources/Valorant/valorant-edit-01.jpg";
import imgVal02 from "./../../.resources/Valorant/valorant-edit-02.jpg";
import mainLogo from "./../../logoGray.png";
import "./Valorant.css";
export const Valorant: React.FC = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  return (
    <div className="Valorant">
      <AppBar className="bar-top" position="static" color="transparent">
        <Toolbar className="top">
          <img onClick={navigateToHome} className="img" src={mainLogo} alt=""/>
        </Toolbar>
      </AppBar>
      <AppBar className="bar-below" position="sticky" color="transparent">
        <Toolbar className="bar-below-toolbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Valorant
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="valorant-section">
        <div className="valorant-section-header">
          <h2 className="valorant-section-title">Defy the limits.</h2>
          <div className="valorant-section-title-content">
            <img className="valorant-section-title-image" src={imgValorant} alt=""/>
          </div>
        </div>
        <div className="grid-container">
          <ContentCard
            url={"https://youtu.be/GuxaXPpID1s"}
            title={"Valorant Edit 02"}
            thumbnail={imgVal02}
            time={"Playback Time: 8:04"}
          />
          <ContentCard
            url={"https://youtu.be/f-rDPlF1Vb4"}
            title={"Valorant Edit 01"}
            thumbnail={imgVal01}
            time={"Playback Time: 1:12"}
          />
        </div>
      </div>
    </div>
  );
};

export default Valorant;
