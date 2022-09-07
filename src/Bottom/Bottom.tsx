import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  List,
  ListItem
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Bottom.css";
import Crumbs from "./Crumbs/Crumbs";

export const Bottom: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCalculator = () => {
    // 👇️ navigate to /calculator
    navigate("/calculator");
  };

  const navigateToPriceChecker = () => {
    // 👇️ navigate to /
    navigate("/checker");
  };

  const navigateToCountry = () => {
    // 👇️ navigate to /
    navigate("/country");
  };

  const navigateToWatch = () => {
    // 👇️ navigate to /
    navigate("/watch");
  };

  const navigateToWarzone = () => {
    // 👇️ navigate to /
    navigate("/watch/warzone");
  };

  const navigateToValorant = () => {
    // 👇️ navigate to /
    navigate("/watch/valorant");
  };

  const navigateToPhasmophobia = () => {
    // 👇️ navigate to /
    navigate("/watch/phasmophobia");
  };

  const [renderCrumbs, setRenderCrumbs] = useState<boolean>(
    window.location.hash !== "#/"
  );
  const [locations, setLocations] = useState<string[]>();

  React.useEffect(() => {
    if (window.location.hash === "#/" || window.location.hash === "") {
      setRenderCrumbs(false);
    } else {
      var modified = window.location.hash.slice(2);
      setLocations(modified.split("/"));
      setRenderCrumbs(true);
    }
  }, [window.location.hash]);

  return (
    <div className="content-bottom">
      <List className="footnotes">
        <ListItem className="footnotes-list-item">
          For optimum performance and safety, please read these instructions
          carefully.
        </ListItem>
        <ListItem className="footnotes-list-item">
          Void where prohibited. No representation or warranty, express or
          implied, with respect to the completeness, accuracy, fitness for a
          particular purpose, or utility of these materials or any information
          or opinion contained herein. Actual mileage may vary. Prices slightly
          higher west of the Mississippi. No animals were harmed during the
          production of this product. Any resemblance to actual people, living
          or dead, or events, past, present or future, is purely coincidental.
          This product not to be construed as an endorsement of any product or
          company, nor as the adoption or promulgation of any guidelines,
          standards or recommendations. Some names have been changed to protect
          the innocent. This product is meant for educational purposes only.
          Some assembly required. Batteries not included. Package sold by
          weight, not volume. Contents may settle during shipment. No
          user-serviceable parts inside. Use only as directed.
        </ListItem>
        <ListItem className="footnotes-list-item">
          Do not eat. Not a toy.
        </ListItem>
        <ListItem className="footnotes-list-item">
          Postage will be paid by addressee. If condition persists, consult your
          physician. Subject to change without notice. Times approximate. One
          size fits all. Colors may, in time, fade. For office use only. Edited
          for television.
        </ListItem>
      </List>
      {renderCrumbs && locations && <Crumbs locations={locations} />}
      <div className="directory">
        <hr className="line"></hr>
        <List className="app-list">
          <ListItem className="app-list-item">
            <Link
              underline="hover"
              color="inherit"
              onClick={navigateToCalculator}
            >
              Trade Calculator
            </Link>
          </ListItem>
        </List>
        <hr className="line"></hr>
        <List className="app-list">
          <ListItem className="app-list-item">
            <Link
              underline="hover"
              color="inherit"
              onClick={navigateToPriceChecker}
            >
              Price Checker
            </Link>
          </ListItem>
        </List>
        <hr className="line"></hr>
        <List className="app-list">
          <ListItem className="app-list-accordianitem">
            <Accordion className="app-list-accordianitem-accordian">
              <AccordionSummary
                className="app-list-accordianitem-accordian-summary"
                expandIcon={"+"}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Link
                  underline="hover"
                  color="inherit"
                  onClick={navigateToWatch}
                >
                  Watch
                </Link>
              </AccordionSummary>
              <AccordionDetails className="app-list-accordianitem-accordian-details">
                <Link
                  className="app-list-accordianitem-accordian-details-link"
                  underline="hover"
                  color="inherit"
                  onClick={navigateToWarzone}
                >
                  Call of Duty: Warzone
                </Link>
                <Link
                  className="app-list-accordianitem-accordian-details-link"
                  underline="hover"
                  color="inherit"
                  onClick={navigateToValorant}
                >
                  Valorant
                </Link>
                <Link
                  className="app-list-accordianitem-accordian-details-link"
                  underline="hover"
                  color="inherit"
                  onClick={navigateToPhasmophobia}
                >
                  Phasmophobia
                </Link>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        </List>
        <hr className="line"></hr>
      </div>
      <List className="footer">
        <ListItem className="footer-shop">
          Other restrictions may apply, please read these instructions
          carefully.
        </ListItem>
        <ListItem className="footer-locale">
          <Link underline="hover" color="inherit" onClick={navigateToCountry}>
            United Sates
          </Link>
        </ListItem>
        <div className="footer-legal">
          <ListItem className="footer-legal-first">
            Copyright © 2022 Phaphui Inc. All rights reserved.
          </ListItem>
          <div className="footer-legal-link">Privacy Policy</div>
          <div className="footer-legal-link">Terms of Use</div>
          <div className="footer-legal-link">Sales and Refunds</div>
          <div className="footer-legal-link">Legal</div>
          <div className="footer-legal-link-last">Site Map</div>
        </div>
      </List>
    </div>
  );
};

export default Bottom;
