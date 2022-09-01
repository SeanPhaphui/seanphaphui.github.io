import {
  Button,
  InputAdornment,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./info.css";

const Info: React.FC = () => {
  const [start, setStart] = useState<number>();
  const [percentage, setPercentage] = useState<number>();
  const [trades, setTrades] = useState<number>();
  const [table, setTable] = useState<number[]>();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const onChangeAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(parseInt(e.target.value));
  };
  const onChangePercenttHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(parseInt(e.target.value) / 100 + 1);
  };
  const onChangeTradeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrades(parseInt(e.target.value));
  };
  const onClickHandler = () => {
    let array: number[] = [];
    for (let i = 0; i < trades!; i++) {
      if (i == 0) {
        array[i] = start! * percentage!;
      } else {
        array[i] = array[i - 1] * percentage!;
      }
    }
    setTable(array);
  };
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  React.useEffect(() => {
    if (start && percentage && trades) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [start, percentage, trades]);

  return (
    <div className="Info">
      <TextField
        className="input-top"
        id="outlined-basic"
        label="Enter Starting Amount"
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        inputProps={{ inputMode: "numeric" }}
        onChange={onChangeAmountHandler}
      />
      <TextField
        className="input"
        id="outlined-basic"
        label="Enter Percentage"
        variant="outlined"
        inputProps={{ inputMode: "numeric" }}
        onChange={onChangePercenttHandler}
      />
      <TextField
        className="input"
        id="outlined-basic"
        label="Enter # of Trades"
        variant="outlined"
        inputProps={{ inputMode: "numeric" }}
        onChange={onChangeTradeHandler}
      />
      <Button
        className="input"
        variant="contained"
        onClick={onClickHandler}
        disabled={buttonDisabled}
      >
        Generate
      </Button>
      <List>
        {table &&
          table.map((element, i) => {
            return (
              <ListItem>{`Trade #${i + 1}: ${formatter.format(
                element
              )}`}</ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default Info;
