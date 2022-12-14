import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bottom from "./Bottom/Bottom";
import Country from "./Country/Country";
import Home from "./Home/Home";
import PriceChecker from "./PriceChecker/PriceChecker";
import SlowGainCalcultor from "./SlowGainCalculator/SlowGainCalcultor";
import "./Utility.css";
import Phasmophobia from "./Watch/Phasmophobia/Phasmophobia";
import Valorant from "./Watch/Valorant/Valorant";
import Warzone from "./Watch/Warzone/Warzone";
import Watch from "./Watch/Watch";

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
        <Route path="/checker" element={<PriceChecker />} />
        <Route path="/country" element={<Country />} />
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
