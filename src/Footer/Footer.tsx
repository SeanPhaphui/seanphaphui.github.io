import {
    List, ListItem
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCalculator = () => {
    // 👇️ navigate to /calculator
    navigate("/calculator");
  };

  const navigateToPriceChecker = () => {
    // 👇️ navigate to /
    navigate("/price-checker");
  };

  return (
    <div className="content-bottom">
      <List>
        <ListItem>
          For optimum performance and safety, please read these instructions
          carefully.
        </ListItem>
        <ListItem>
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
        <ListItem>Do not eat. Not a toy.</ListItem>
        <ListItem>
          Postage will be paid by addressee. If condition persists, consult your
          physician. Subject to change without notice. Times approximate. One
          size fits all. Colors may, in time, fade. For office use only. Edited
          for television.
        </ListItem>
      </List>
      <hr className="line"></hr>
      <List className="app-list">
        <ListItem className="app-list-item" onClick={navigateToCalculator}>
          Trade Calculator
        </ListItem>
      </List>
      <hr className="line"></hr>
      <List className="app-list">
        <ListItem className="app-list-item" onClick={navigateToPriceChecker}>
          Price Checker
        </ListItem>
      </List>
      <hr className="line"></hr>
      <List>
        <ListItem>
          Other restrictions may apply, please read these instructions
          carefully.
        </ListItem>
        <ListItem>United Sates</ListItem>
        <ListItem>Copyright © 2022 Phaphui Inc. All rights reserved.</ListItem>
      </List>
    </div>
  );
};

export default Footer;
