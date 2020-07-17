import React from "react";
import "./NeoProgressbar.scss";

export default function NeoProgressbar({percent = 0, colorStart = "gold", colorStop = "red"}) {
    const right = Math.max(2, 100 - percent) + '%';
    const background = `linear-gradient(to right, ${colorStart}, ${colorStop})`;
    console.log(background);
    return (
        <div className="NeoProgressbar">
            <div className="NeoProgressbar-Overlay" 
                 style={{right, background}} />
        </div>
    )
}