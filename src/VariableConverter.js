import React from "react";
import "./VariableConverter.css";

class VariableConverter extends React.Component {

    state = {
        feet: "",
        inches: "",
        stone: "",
        pounds: "",
        height: "",
        weight: ""
    }
    heightConverter = () => {
        let feet = this.state.feet;
        let inches = this.state.inches;
        let feetInInches = feet * 12;
        let heightInInches = parseInt(feetInInches) + parseInt(inches);
        console.log(heightInInches)
        let heightInCM = heightInInches * 2.54;
        this.setState({ height: heightInCM });
    }
    weightConverter = () => {
        let stone = this.state.stone;
        let pounds = this.state.pounds;
        let stoneInKG = stone * 6.35
        let poundsInKG = pounds * 0.45
        let weightInKG = stoneInKG + poundsInKG
        this.setState({ weight: weightInKG })
    }
    updateFeet = (e) => {
        this.setState({ feet: e.target.value })
    }
    updateInches = (e) => {
        this.setState({ inches: e.target.value })
    }
    updateStone = (e) => {
        this.setState({ stone: e.target.value })
    }
    updatePounds = (e) => {
        this.setState({ pounds: e.target.value })
    }
    render() {
        return (
            <div className="variableConverter">
                <div className="converterTitle">
                    <h2>Converter</h2>
                    <p>Convert your height and weight into centimetres and kilograms respectively</p>
                </div>
                <div className="heightConverter">
                    <h3>Height Converter</h3>
                    <input type="text" placeholder="Feet" value={this.state.feet} onChange={this.updateFeet}></input>
                    <input type="text" placeholder="Inches" value={this.state.inches} onChange={this.updateInches}></input>
                    <button type="submit" onClick={this.heightConverter}>Calculate</button>
                    <div className="conversionDisplay">
                        <h4></h4>
                    </div>
                </div>
                <div className="weightConverter">
                    <h3>Weight Converter</h3>
                    <input type="text" placeholder="Stone" value={this.state.stone} onChange={this.updateStone}></input>
                    <input type="text" placeholder="Pounds" value={this.state.pounds} onChange={this.updatePounds}></input>
                    <button type="submit" onClick={this.weightConverter}>Calculate</button>
                    <div className="conversionDisplay">
                        <p>Your height is {this.state.height}cm</p>
                        <p>Your weight is {this.state.weight}kg</p>
                    </div>
                </div>

            </div>
        )
    }
}
export default VariableConverter;