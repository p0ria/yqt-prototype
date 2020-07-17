import React from "react";
import chroma from "chroma-js";
import "./NeoLamp.scss";

export default function NeoLamp({color = "#ccc", isOn = false}) {
    const background = `linear-gradient(to bottom right, ${isOn ? '#9b9b9b' : '#ccc'}, ${isOn ? color : '#ccc'})`;
    return (
        <div className="NeoLamp">
            <div className="NeoLamp-Overlay" style={{background}}>
                <div className="NeoLamp-Glass" />
            </div>
        </div>
    )
}