import React from "react";
import "./NeoTextInput.scss";

export default function NeoTextInput({value, placeholder, handleChange, type="text"}) {
    return (
        <div className="NeoTextInput">
            <input type={type}
                   placeholder={placeholder} 
                   value={value} 
                   onChange={e => handleChange(e.target.value)} />
        </div>
    )
}