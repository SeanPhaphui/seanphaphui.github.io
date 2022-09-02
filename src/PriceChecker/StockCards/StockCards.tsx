import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

interface StockData {
  symbol: string;
  price: number;
  change: number;
  percentChange: string;
  backgroundColor: string;
}

export interface StockCardsProps {
  stockData: StockData[];
}

export const StockCards: React.FC<StockCardsProps> = (props) => {
  const { stockData } = props;

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  React.useEffect(() => {
    if (stockData) {
      console.log("YES", stockData);
    } else {
      console.log("NO", stockData);
    }
  }, [stockData]);

  return (
    <div className="StockCards">
      {stockData.map((stock) => {
        return (
          <Card
            className="card"
            sx={{
              color: "#1d1d1f",
              backgroundColor: stock.backgroundColor,
              minWidth: 275,
            }}
          >
            <CardContent>
              <Typography
                className="card-top"
                variant="h4"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                {stock.symbol} {formatter.format(stock.price)}
              </Typography>
              <Typography variant="h5" component="div">
                {formatter.format(stock.change)} ({stock.percentChange}%)
              </Typography>
              <Typography variant="h5" component="div">
                {stock.change > 0 ? "↑ Today" : "↓ Today"}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StockCards;
