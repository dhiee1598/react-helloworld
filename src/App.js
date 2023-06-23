import React, { Component } from "react";
import "./App.css";
import Helloworld from "./components/Helloworld";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helloworld />
      </div>
    );
  }
}

export default App;
