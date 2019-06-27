import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    bill: "",
    tip: "",
    people: "",
    amount: "",
    errors: {bill: '', tip: "", people: ""},
    validBill: false,
    validTip: false,
    validPeople: false,
    validForm: false
  }
  handleChange = (event) => {
    const{name, value} = event.target;
    let errors = this.state.errors;
    // switch (name) {
    //   case "bill": 
    //     errors.bill = 
    //       (parseInt(value)<5)
    //         ? "Bill error"
    //         : "" 
    // }
    this.setState({[name]: value})
    // https://www.telerik.com/blogs/up-and-running-with-react-form-validation
  }
  // handlePeople = (e) => {
  //   this.setState({people: e.target.value})
  // }
  Calc = (event) => {
    event.preventDefault()
    let bill = parseFloat(this.state.bill);
    let tip = parseFloat("." + this.state.tip);
    let people = parseFloat(this.state.people)
    let result = (bill*tip)/people
    console.log(this.state)
    console.log(tip)
    console.log("result:" + result)
    this.setState({amount: parseFloat(result)})
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
          <div id="results">
            <h2>Tip Amount:</h2>
            <p>$ {this.state.amount}</p>
            <p>each</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
