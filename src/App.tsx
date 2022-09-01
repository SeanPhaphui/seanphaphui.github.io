import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Info from "./Info";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';

function App() {
  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trade Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Info />
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
