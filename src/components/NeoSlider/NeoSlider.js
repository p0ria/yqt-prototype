import React from "react";
import "./NeoSlider.scss";

export default function NeoSlider({title, min, max, value, handleValueChange, step = 1}) {
    const right = 100 - (100 *(value - min) / (max - min));
    return (
      <div className="NeoSlider">
          <input type="range"
                 min={min} 
                 max={max} 
                 value={value}
                 step={step}
                 onChange={e => handleValueChange(e.target.value)}
                 className="slider" />
          <div className="neo-slider">
              <div className="neo-slider-progress" style={{right: right + "%"}}>
                  <div className="neo-slider-thumb" />
              </div>
              <div className="neo-slider-title">{title}</div>
              <span className="neo-slider-number">{value}</span>
          </div>    
      </div>
    );
}