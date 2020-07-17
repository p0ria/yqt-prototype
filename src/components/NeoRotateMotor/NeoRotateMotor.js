import React, {useState} from "react";
import "./NeoRotateMotor.scss";

export default function NeoRotateMotor({title}) {
    const [active, setActive] = useState(false);
    const handleActiveChange = newActive => {
        if(newActive === active) return;
        setActive(newActive);
    };
    return (
        <div className={`NeoRotateMotor ${active ? 'active' : ''}`}>
            <div className="NeoRotateMotor-Overlay1">
            </div>
            <div className="NeoRotateMotor-Overlay2">
                
            </div>
            <div className="NeoRotateMotor-Overlay3"
                 onMouseDown={() => handleActiveChange(true)} 
                 onMouseUp={() => handleActiveChange(false)} 
                 onMouseLeave={() => handleActiveChange(false)}>
                {title}
            </div>
        </div>
    )
}