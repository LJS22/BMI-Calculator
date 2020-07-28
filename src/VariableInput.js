import React from "react";
import "./VariableInput.css";

class VariableInput extends React.Component {
    state = {
        height: "",
        weight: "",
        BMI: ""
    }
    updateHeight = (e) => {
        this.setState({ height: e.target.value })
    }
    updateWeight = (e) => {
        this.setState({ weight: e.target.value })
    }
    calculateBMI = (e) => {
        e.preventDefault();
        let heightInMetresSquared = (this.state.height / 100) * (this.state.height / 100);
        let BMI = this.state.weight / heightInMetresSquared;
        this.setState({ BMI: BMI })
    }
    addClass = () => {
        if (this.state.BMI < 18.5) {
            return "amber";
        } else if (this.state.BMI > 18.5 && this.state.BMI < 24.9) {
            return "green"
        }
    }
    render() {
        return (
            <div className="variableInput">
                <div className="bmiTitle">
                    <h2>BMI Calculator</h2>
                    <p>Enter your height and weight in centimetres and kilograms respectively</p>
                </div>
                <form>
                    <h3>Enter Height:</h3>
                    <input type="text" value={this.state.height} onChange={this.updateHeight}></input>
                    <h3>Enter Weight:</h3>
                    <input type="text" value={this.state.weight} onChange={this.updateWeight}></input>
                    <button type="submit" onClick={this.calculateBMI}>Calculate</button>
                </form>
                <div className={`bmiDisplay ${this.addClass}`}>Your BMI is: {this.state.BMI}</div>
            </div>
        )
    }
}
export default VariableInput;