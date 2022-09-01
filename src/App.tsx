import { AppBar, List, ListItem, Toolbar } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Info from "./Info";
import mainLogo from "./logoGray.png";

function App() {
  const [table, setTable] = useState<number[]>();

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const onTableChangeHandler = (table: number[]) => {
    setTable(table);
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
          <img className="img" src={mainLogo} />
        </Toolbar>
      </AppBar>
      <div className="content">
        <h1 className="title">Trade Calculator</h1>
        <Info onTableChange={onTableChangeHandler} />
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
