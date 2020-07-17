import React, {useContext} from "react";
import "./NeoReader.scss";
import {ThemeContext} from "../../contexts/ThemeContext";
import NeoSensor from "../NeoSensor/NeoSensor";

export default function NeoReader({number, status, good, bad}) {
    const [theme] = useContext(ThemeContext);
    const color = status === 0 ? theme.colors.primary : status === 1 ? theme.colors.yellow : theme.colors.red;
    const percent = 100 * good / (good + bad);
    return (
        <div className="NeoReader">
            <div className="bg-overlay">
                <svg width="100%" height="100%">
                    <rect x="-60" y="40" width="85" height="100" fill="#d3d6de" />
                    <rect x="-30" y="50" width="120" height="100" fill="#d9dce2" />
                </svg>
            </div>
            
            <div className="content">
                <NeoSensor color={color} />
                <h4 className="number">{number}</h4>
                <div className="infos">
                    <div className="info">
                        <i className="info-icon fa fa-check" />
                        <span className="info-title">{good}</span>
                    </div>
                    <div className="info">
                        <i className="info-icon fa fa-times" />
                        <span className="info-title">{bad}</span>
                    </div>
                </div>
            </div>
            <div className="NeoReader-Progress" style={{right: `${100 - percent}%`}}>
            </div>
        </div>
    )
}