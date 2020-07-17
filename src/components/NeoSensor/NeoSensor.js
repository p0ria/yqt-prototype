import React from "react";
import "./NeoSensor.scss";

export default function NeoSensor({color}) {
    return (
        <svg className="NeoSensor">
            <circle cx="3" cy="3" r="3" fill={color} />
        </svg>
    )
}