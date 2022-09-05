import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ContentCard from "../../Utility/ContentCard/ContentCard";
import imgPhasmophobia from "./../../.resources/phasmophobia.jpg";
import imgPhas01 from "./../../.resources/Phasmophobia/phasmophobia-edit.jpg";
import mainLogo from "./../../logoGray.png";
import "./Phasmophobia.css";
export const Phasmophobia: React.FC = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  return (
    <div className="Phasmophobia">
      <AppBar className="bar-top" position="static" color="transparent">
        <Toolbar className="top">
          <img onClick={navigateToHome} className="img" src={mainLogo} />
        </Toolbar>
      </AppBar>
      <AppBar className="bar-below" position="sticky" color="transparent">
        <Toolbar className="bar-below-toolbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phasmophobia
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="phasmophobia-section">
        <div className="phasmophobia-section-header">
          <h2 className="phasmophobia-section-title">Immerse yourself.</h2>
          <div className="phasmophobia-section-title-content">
            <img className="phasmophobia-section-title-image" src={imgPhasmophobia} />
          </div>
        </div>
        <div className="grid-container">
          <ContentCard
            url={"https://youtu.be/_HO4RVCd3ow"}
            title={"Phasmophobia Edit"}
            thumbnail={imgPhas01}
            time={"Playback Time: 10:13"}
          />
        </div>
      </div>
    </div>
  );
};

export default Phasmophobia;