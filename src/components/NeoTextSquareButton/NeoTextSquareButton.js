import React from "react";
import "./NeoTextSquareButton.scss";

export default function NeoTextSquareButton({text, icon, isLoading, disable, handleClick, buttonWidth = "150", textWidth= "70"}) {
    return (
        <div className={`NeoTextSquareButton ${isLoading ? 'loading': ''} ${disable ? 'disable': ''}`}>
            <button className="unit"
                    type="button"
                    style={{width: `${buttonWidth}px`}}
                    onClick={handleClick}>
                {isLoading ?
                    <div className="spinner spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    :
                    <div className="content">
                        <i className={icon} />
                        <svg className="title" x="0" y="0" width={`${textWidth}px`} height="16px" viewBox={`0 0 ${textWidth} 16`}>
                            <defs>
                                <linearGradient id="brand-gradient2" >
                                    <stop offset="15%" stopColor="#0167af" />
                                    <stop offset="100%" stopColor="#0d9eef" />
                                </linearGradient>
                            </defs>
                            <text textAnchor="middle"
                                  alignmentBaseline="middle"
                                  fill="url(#brand-gradient2)"
                                  x="50%" y="9">
                                {text}
                            </text>
                        </svg>
                    </div>
                }
            </button>
        </div>
    )
}