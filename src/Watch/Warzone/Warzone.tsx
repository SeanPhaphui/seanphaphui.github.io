import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ContentCard from "../../Utility/ContentCard/ContentCard";
import imgWarzone from "./../../.resources/warzone.jpg";
import imgMarch2021 from "./../../.resources/Warzone/March-2021-Supercut.jpg";
import imgFebruary2021 from "./../../.resources/Warzone/February-2021-Supercut.jpg";
import imgJanuary2021 from "./../../.resources/Warzone/January-2021-Supercut.jpg";
import imgDecember2020 from "./../../.resources/Warzone/December-2020-Supercut.jpg";
import imgNovember2020 from "./../../.resources/Warzone/November-2020-Supercut.jpg";
import imgOctober2020 from "./../../.resources/Warzone/October-2020-Supercut.jpg";
import imgSeptember2020 from "./../../.resources/Warzone/September-2020-Supercut.jpg";
import imgAugust2020 from "./../../.resources/Warzone/August-2020-Supercut.jpg";
import imgSquad from "./../../.resources/Warzone/Squad-VS-Swagg.jpg";
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
          <img onClick={navigateToHome} className="img" src={mainLogo} alt=""/>
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
            <img className="warzone-section-title-image" src={imgWarzone} alt=""/>
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
                    <ContentCard
            url={"https://youtu.be/2ZLA_bJomtQ"}
            title={"Huskies Modern Warfare January 2021 Supercut"}
            thumbnail={imgJanuary2021}
            time={"Playback Time: 7:07"}
          />
                    <ContentCard
            url={"https://youtu.be/CBzl_PCgGtk"}
            title={"Huskies Modern Warfare December 2020 Supercut"}
            thumbnail={imgDecember2020}
            time={"Playback Time: 7:41"}
          />
                    <ContentCard
            url={"https://youtu.be/xanoXgiqJwU"}
            title={"Huskies Modern Warfare November 2020 Supercut"}
            thumbnail={imgNovember2020}
            time={"Playback Time: 7:03"}
          />
                    <ContentCard
            url={"https://youtu.be/YRzRuwGUwqk"}
            title={"Huskies Modern Warfare October 2020 Supercut"}
            thumbnail={imgOctober2020}
            time={"Playback Time: 11:50"}
          />
                    <ContentCard
            url={"https://youtu.be/PgG4lA51RUk"}
            title={"Huskies Modern Warfare September 2020 Supercut"}
            thumbnail={imgSeptember2020}
            time={"Playback Time: 15:14"}
          />
                    <ContentCard
            url={"https://youtu.be/k5HwX0YeFY4"}
            title={"Huskies Modern Warfare August 2020 Supercut"}
            thumbnail={imgAugust2020}
            time={"Playback Time: 9:25"}
          />
                    <ContentCard
            url={"https://youtu.be/jxbOkkjCZW4"}
            title={"Squad vs. Swagg, Booya, and Smooth"}
            thumbnail={imgSquad}
            time={"Playback Time: 2:42"}
          />
        </div>
      </div>
    </div>
  );
};

export default Warzone;
