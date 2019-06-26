import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    bill: "",
    tip: "",
    people: "",
    formErrors: {bill: '', tip: "", people: ""},
    validBill: false,
    validTip: false,
    validPeople: false,
    validForm: false
  }
  handleChange = (event) => {
    const{name, value} = event.target
    this.setState({[name]: value})
    
  }
  // handlePeople = (e) => {
  //   this.setState({people: e.target.value})
  // }
  Calc = (event) => {
    event.preventDefault()
    console.log(this.state)
    
  }
  render() {
    return (
      <div className="App">
        <div className="calc">
          <h1>Tip Calculator</h1>
          <form>
            <div className="form-group">
              <label htmlFor="bill">How much was your bill?</label><br />
              $ <input type="text" name="bill" className="form-control" id="bill" value={this.state.bill} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="tip-percent">How was your service?</label><br />
              <select name="tip" onChange={this.handleChange} className="form-control" id="tip-percent" required>
                <option disabled selected value> -- select an option -- </option>
                <option>30% Outstanding</option>
                <option>20% Good</option>
                <option>15% Okay</option>
                <option>10% Mediocre</option>
                <option>5% Terrible</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="number of people">How many people are sharing the bill?</label><br />
              <input type="text" name="people" className="form-control" id="people" value={this.state.people} onChange={this.handleChange}/>
            </div>
            <button id="calc" onClick={this.Calc}>CALCULATE</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
