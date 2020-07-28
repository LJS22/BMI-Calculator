import React from "react";
import "./ColourKey.css";


const ColourKey = () => (
    <div className="key">
        <p>Key Chart</p>
        <span className="underWeight">
            <div className="amber"></div>
            <p>Underweight</p>
        </span>
        <span className="healthyWeight">
            <div className="green"></div>
            <p>Healthy weight</p>
        </span>
        <span className="overWeight">
            <div className="amber"></div>
            <p>Over weight</p>
        </span>
        <span className="obeseWeight">
            <div className="red"></div>
            <p>Obese</p>
        </span>
    </div>
)

export default ColourKey;