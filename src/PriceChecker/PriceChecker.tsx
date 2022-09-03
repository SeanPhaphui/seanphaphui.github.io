import {
  AppBar,
  Autocomplete,
  Button,
  Card, CardContent,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "./../logoGray.png";
import tickers from "./../Utility/tickers.json";
import "./PriceChecker.css";

export const PriceChecker: React.FC = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  const [ticker, setTicker] = useState<string>();
  const [preTicker, setPreTicker] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [change, setChange] = useState<number>();
  const [percentChange, setPercentChange] = useState<string>();
  const [color, setColor] = useState<string>("#e2f4df");

  const getStock = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  const onClickHandler = () => {
    setTicker(undefined);
    const proxyUrl = "https://proxy.cors.sh/";
    const stonksUrl = `${proxyUrl}https://query1.finance.yahoo.com/v8/finance/chart/${preTicker}`;
    getStock(stonksUrl).then((data) => {
      const output = data.chart.result[0];
      console.log(output);
      setTicker(output.meta.symbol)
      setPrice(output.meta.regularMarketPrice);
      const difference =
        output.meta.regularMarketPrice - output.meta.previousClose;
      setChange(difference);
      const percent = Math.abs(
        (difference / output.meta.previousClose) * 100
      ).toFixed(2);
      setPercentChange(percent);
      if (difference > 0) {
        setColor("#e2f4df");
      } else {
        setColor("#fdf6f0");
      }
    });
  };

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className="PriceChecker">
      <AppBar className="bar-top" position="static" color="transparent">
        <Toolbar className="top">
          <img onClick={navigateToHome} className="img" src={mainLogo} />
        </Toolbar>
      </AppBar>
      <AppBar className="bar-below" position="sticky" color="transparent">
        <Toolbar className="bar-below-toolbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Price Checker
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="content">
        <Autocomplete
          className="input-bottom"
          freeSolo
          options={tickers.map((option) => option.ticker)}
          renderInput={(params) => <TextField {...params} label="Stock Ticker" />}
          onInputChange={(event, newInputValue) => {
            setPreTicker(newInputValue.toUpperCase());
          }}
        />
        <Button
          className="input-button"
          variant="outlined"
          onClick={onClickHandler}
          // disabled={buttonDisabled}
        >
          Check Price
        </Button>
        {ticker && price && change && percentChange && (
          <Card
            className="card"
            sx={{ color: "#1d1d1f", backgroundColor: color, minWidth: 275 }}
          >
            <CardContent>
              <Typography
                className="card-top"
                variant="h4"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                {ticker} {formatter.format(price)}
              </Typography>
              <Typography variant="h5" component="div">
                {formatter.format(change)} ({percentChange}%)
              </Typography>
              <Typography variant="h5" component="div">
                {change > 0 ? "↑ Today" : "↓ Today"}
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PriceChecker;
