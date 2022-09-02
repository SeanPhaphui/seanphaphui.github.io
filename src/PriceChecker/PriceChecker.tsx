import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "./../logoGray.png";
import "./PriceChecker.css";

export const PriceChecker: React.FC = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  const [data, setData] = useState<any>();
  const [ticker, setTicker] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [change, setChange] = useState<number>();
  const [percentChange, setPercentChange] = useState<string>();
  const [color, setColor] = useState<string>("#e2f4df");
  const [textColor, setTextColor] = useState<string>("#1d1d1f");

  const onChangeTickerHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(undefined);
    setTicker(e.target.value);
  };

  const getStock = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  const onClickHandler = () => {
    const proxyUrl = "https://proxy.cors.sh/";
    const stonksUrl = `${proxyUrl}https://query1.finance.yahoo.com/v8/finance/chart/${ticker}`;
    getStock(stonksUrl).then((data) => {
      const output = data.chart.result[0];
      console.log(output);
      setData(output);
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
        <TextField
          className="input-bottom"
          id="outlined-basic"
          label="Enter Stock Ticker"
          variant="outlined"
          inputProps={{ style: { textTransform: "uppercase" } }}
          onChange={onChangeTickerHandler}
        />
        <Button
          className="input-button"
          variant="outlined"
          onClick={onClickHandler}
          // disabled={buttonDisabled}
        >
          Check Price
        </Button>
        {data && price && change && percentChange && (
          <Card
            className="card"
            sx={{ color: textColor, backgroundColor: color, minWidth: 275 }}
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
                {change > 0 ?"↑ Today":"↓ Today"}
              </Typography>
            </CardContent>
          </Card>
        )}
        {/* <div>
            <div>{data.meta.symbol}</div>
            <div>{formatter.format(price)}</div>
            <div>{formatter.format(change)}</div>
          </div> */}
      </div>
    </div>
  );
};

export default PriceChecker;
