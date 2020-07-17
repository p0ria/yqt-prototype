import React from "react";
import "./NeoIconTextButton.scss";

export default function NeoIconTextButton({handleClick, color, icon, disable}) {
    const style = {};
    if(color) style["color"] = color;
    return (
        <div className={`NeoIconTextButton ${disable && 'disable'}`}>
            <button type="button" 
                    style={style} 
                    onClick={handleClick}>
                <i className={`icon ${icon}`}></i> 
                Log in
            </button>
        </div>
    )
}