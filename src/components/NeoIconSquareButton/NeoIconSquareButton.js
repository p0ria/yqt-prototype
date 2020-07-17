import React from "react";
import "./NeoIconSquareButton.scss";

export default function NeoIconSquareButton({handleClick, color, icon}) {
    const style = {};
    if(color) style["color"] = color;
    return (
        <div className="NeoIconSquareButton">
            <button className="unit"
                    type="button" 
                    style={style} 
                    onClick={handleClick}>
                <i className={`icon ${icon}`}></i>
            </button>
        </div>
    )
}