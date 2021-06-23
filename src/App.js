import "./App.css";
import React, { Component } from "react";
import PlaceGrid from "./components/PlaceGrid/placegrid";

class App extends Component {
  state = {
    loaded: false,
    cloths: [],
  };
  
  render() {
    return (
      <div className="App">
        <PlaceGrid></PlaceGrid>
      </div>
    );
  }
}

export default App;
