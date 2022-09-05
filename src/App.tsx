import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Bottom from "./Bottom/Bottom";
import Country from "./Country/Country";
import Home from "./Home/Home";
import PriceChecker from "./PriceChecker/PriceChecker";
import SlowGainCalcultor from "./SlowGainCalculator/SlowGainCalcultor";
import Watch from "./Watch/Watch";
import Warzone from "./Watch/Warzone/Warzone";
import "./Utility.css";
import Valorant from "./Watch/Valorant/Valorant";
import Phasmophobia from "./Watch/Phasmophobia/Phasmophobia";

function App() {
  return (
    <div className="App">
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
        <Route path="/choose-country-region" element={<Country />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/watch/warzone" element={<Warzone />} />
        <Route path="/watch/valorant" element={<Valorant />} />
        <Route path="/watch/phasmophobia" element={<Phasmophobia />} />
      </Routes>
      <Bottom/>
    </div>
  );
}

export default App;
