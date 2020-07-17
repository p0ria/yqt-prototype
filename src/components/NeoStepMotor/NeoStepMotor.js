import React, {useState} from "react";
import "./NeoStepMotor.scss";

export default function NeoStepMotor({title}) {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        if(active) return;
        setActive(true);
        setTimeout(() => {
            setActive(false);
        }, 4000)
    };
    return (
        <div className={`NeoStepMotor ${active ? 'active' : ''}`}>
            <div className="NeoStepMotor-Overlay1">
            </div>
            <div className="NeoStepMotor-Overlay2">
                
            </div>
            <div className="NeoStepMotor-Overlay3"
                 onClick={handleClick}>
                {title}
            </div>
        </div>
    )
}