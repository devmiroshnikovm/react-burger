import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Fcomponent from "./Fcomponent";
import Ccomponent from "./Ccomponent";
import Acomponent from "./Acomponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Fcomponent name="Name" />
          <Ccomponent name="Name" />
          <Acomponent name="Name" />
        </p>
      </header>
    </div>
  );
}

export default App;
