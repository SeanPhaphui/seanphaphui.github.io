import { AppBar, List, ListItem, Toolbar } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import mainLogo from "./logoGray.png";
import imgCalculator from "./calculator.png";
import PriceChecker from "./PriceChecker/PriceChecker";
import SlowGainCalcultor from "./SlowGainCalculator/SlowGainCalcultor";
import Home from "./Home/Home";

function App() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  return (
    <div className="App">
      <AppBar className="bar" position="sticky" color="transparent">
        {/* <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trade Calculator
          </Typography>
        </Toolbar> */}
        <Toolbar className="top">
          <img onClick={navigateToHome} className="img" src={mainLogo} />
        </Toolbar>
      </AppBar>
      {/* <div onClick={navigateToCalculator}>
        <h2 className="content-header">Trade Caclulator</h2>
        <h3 className="content-subheader">What if generator.</h3>
        <div className="content-links">
          <a onClick={navigateToCalculator}>Learn more {"›"}</a>
        </div>
        <div>
          <img className="img-calculator" src={imgCalculator} />
        </div>
      </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<SlowGainCalcultor />} />
          <Route path="/price-checker" element={<PriceChecker />} />
        </Routes>
      <div className="content-bottom">
        <List className="textr">
          <ListItem>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings {">"}{" "}
            General {">"} Software Update. Tap Download and Install.
          </ListItem>
          <ListItem>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings {">"}{" "}
            General {">"} Software Update. Tap Download and Install.
          </ListItem>
          <ListItem>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings {">"}{" "}
            General {">"} Software Update. Tap Download and Install.
          </ListItem>
          <ListItem>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings {">"}{" "}
            General {">"} Software Update. Tap Download and Install.
          </ListItem>
          <ListItem>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings {">"}{" "}
            General {">"} Software Update. Tap Download and Install.
          </ListItem>
        </List>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header> */}
    </div>
  );
}

export default App;
