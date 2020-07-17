import React, {useContext} from "react";
import "./HealthIndicator.scss"
import {ThemeContext} from "../../../contexts/ThemeContext";
import NeoSensor from "../../../components/NeoSensor/NeoSensor";

export default function HealthIndicator({label, isHealthy = true, icon, isExpanded}) {
    const [theme] = useContext(ThemeContext);
    const color = isHealthy ? theme.colors.green : theme.colors.red;
    return (
        <div className={`HealthIndicator ${isExpanded ? "expanded" : ""}`}>
            <span className="HealthIndicator-Title">
                {label}
            </span>
            <div className="HealthIndicator-Content">
                <i className={`HealthIndicator-Icon ${icon}`} />
                <NeoSensor color={color} />
            </div>
            
            
        </div>
    )
}