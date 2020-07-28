import React from 'react';
import './App.css';
import VariableInput from "./VariableInput.js";
import VariableConverter from "./VariableConverter.js";
import ColourKey from "./ColourKey.js";

class App extends React.Component {
  state = {
    height: "",
    weight: "",
    bmi: ""
  }
  render() {
    return (
      <div className="App">
        <h1>BMI CALCULATOR</h1>
        <div className="mainBody">
          <VariableConverter />
          <VariableInput />
          <ColourKey />
        </div>
      </div>
    );
  }
}
export default App;
