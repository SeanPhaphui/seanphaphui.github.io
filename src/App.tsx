import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import PriceChecker from "./PriceChecker/PriceChecker";
import SlowGainCalcultor from "./SlowGainCalculator/SlowGainCalcultor";
import "./Utility.css";

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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
