import { List, ListItem } from "@mui/material";
import React, { useState } from "react";
import Inputs from "./Inputs/Inputs";
import "./SlowGainCalcultor.css";

export const SlowGainCalcultor: React.FC = () => {
  const [table, setTable] = useState<number[]>();
  const onTableChangeHandler = (table: number[]) => {
    setTable(table);
  };

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className="SlowGainCalcultor">
      <h1 className="title">Trade Calculator</h1>
      <Inputs onTableChange={onTableChangeHandler} />
      <List className="list">
        {table &&
          table.map((element, i) => {
            return (
              <ListItem className="list-item">{`Trade #${
                i + 1
              }: ${formatter.format(element)}`}</ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default SlowGainCalcultor;
