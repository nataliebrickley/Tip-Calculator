import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calc">
          <h1>Tip Calculator</h1>
          <form>
            <div class="form-group">
              <label for="bill">How much was your bill?</label><br />
              $ <input type="text" class="form-control" id="bill" />
            </div>
            <div class="form-group">
              <label for="tip-percent">How was your service?</label><br />
              <select class="form-control" id="tip-percent">
                <option disabled selected value> -- select an option -- </option>
                <option>30% Outstanding</option>
                <option>20% Good</option>
                <option>15% Okay</option>
                <option>10% Mediocre</option>
                <option>5% Terrible</option>
              </select>
            </div>
            <div class="form-group">
              <label for="number of people">How many people are sharing the bill?</label><br />
              <input type="text" class="form-control" id="people" />
            </div>
            <button>CALCULATE</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
