import { AppBar, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "./../.resources/coinTop.svg";
import "./Top.css";

export const Top: React.FC = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  const [renderHome, setRenderHome] = useState<boolean>(
    window.location.hash === "#/"
  );

  React.useEffect(() => {
    if (window.location.hash === "#/" || window.location.hash === "") {
      setRenderHome(true);
    } else {
      setRenderHome(false);
    }
  }, [window.location.hash]);

  return (
    <div className="Top">
      {renderHome ? (
        <AppBar className="bar" color="transparent">
          <Toolbar className="top">
            <img
              onClick={navigateToHome}
              className="img"
              src={mainLogo}
              alt=""
            />
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar className="bar-top" color="transparent">
          <Toolbar className="top">
            <img
              onClick={navigateToHome}
              className="img"
              src={mainLogo}
              alt=""
            />
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

export default Top;
