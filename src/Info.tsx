import { Button, List, ListItem, TextField } from "@mui/material";
import React, { useState } from "react";
import "./info.css";

const Info: React.FC = () => {
  const [start, setStart] = useState<number>();
  const [percentage, setPercentage] = useState<number>();
  const [trades, setTrades] = useState<number>();
  const [table, setTable] = useState<number[]>();

  const onChangeAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(parseInt(e.target.value));
  };
  const onChangePercenttHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage((parseInt(e.target.value) / 100) + 1);
  };
  const onChangeTradeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrades(parseInt(e.target.value));
  };
  const testA: number[] = [1001, 2002, 3002];
  const onClickHandler = () => {
      let array: number[] = [];
      for (let i = 0; i < trades!; i++) {
          if(i == 0){
            array[i] = start! * percentage!;
          } else {
            array[i] = array[i-1] * percentage!;
          }
      }
      setTable(array);
  };
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className="Info">
      <TextField
        id="outlined-basic"
        label="Enter Starting Amount"
        variant="outlined"
        onChange={onChangeAmountHandler}
      />
      <TextField
        id="outlined-basic"
        label="Enter Percentage"
        variant="outlined"
        onChange={onChangePercenttHandler}
      />
      <TextField
        id="outlined-basic"
        label="Enter # of Trades"
        variant="outlined"
        onChange={onChangeTradeHandler}
      />
      <Button variant="contained" onClick={onClickHandler}>
        Generate
      </Button>
      <List>
        {table && table.map((element, i) => {
          return <ListItem>{`Trade #${i + 1}: ${formatter.format(element)}`}</ListItem>;
        })}
      </List>
    </div>
  );
};

export default Info;
