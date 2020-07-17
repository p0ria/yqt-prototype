import React, {useContext} from "react";
import "./NeoReaderHdd.scss";
import {ThemeContext} from "../../contexts/ThemeContext";
import NeoSensor from "../NeoSensor/NeoSensor";

export default function NeoReaderHdd({number, status, good, bad}) {
    const [theme] = useContext(ThemeContext);
    const color = status === 0 ? theme.colors.primary : status === 1 ? theme.colors.yellow : theme.colors.red;
    const percent = 100 * good / (good + bad) *.9;
    return (
        <div className="NeoReaderHdd">
            <i className="fa fa-hdd-o fa-5x">
                <div className="sensor" style={{backgroundColor: color}} />
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
                <div className="progress" style={{right: `${100 - percent}%`}} />
            </i>
        </div>
    )
}