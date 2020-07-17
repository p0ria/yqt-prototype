import React, {useState} from "react";
import "./HealthIndicators.scss"
import HealthIndicator from "./HealthIndicator/HealthIndicator";

export default function HealthIndicators(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className={`HealthIndicators ${isExpanded ? "expanded" : ""}`} 
             onMouseEnter={() => setIsExpanded(true)} 
             onMouseLeave={() => setIsExpanded(false)} >
            <HealthIndicator label="PLC" isExpanded={isExpanded} icon="ion-ios-cube" isHealthy={true} />
            <HealthIndicator label="Database" isExpanded={isExpanded} icon="fa fa-database" />
            <HealthIndicator label="Thin Client 1" isExpanded={isExpanded} icon="ion-ios-desktop" />
            <HealthIndicator label="Thin Client 2" isExpanded={isExpanded} icon="ion-ios-desktop" isHealthy={false} />
            <HealthIndicator label="Thin Client 3" isExpanded={isExpanded} icon="ion-ios-desktop" />
        </div>
    )
}