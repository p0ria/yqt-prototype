import React, {useContext} from "react";
import "./NeoServiceSensor.scss";
import NeoSensor from "../NeoSensor/NeoSensor";
import {ThemeContext} from "../../contexts/ThemeContext";

export default function NeoServiceSensor({title, isOn = false}) {
    const [theme] = useContext(ThemeContext);
    return (
        <div className="NeoServiceSensor">
            <span className="NeoServiceSensor-Title">
                {title}
            </span>
            <NeoSensor color={isOn ? theme.colors.lightGreen : theme.colors.gray} />
        </div>
    )
}