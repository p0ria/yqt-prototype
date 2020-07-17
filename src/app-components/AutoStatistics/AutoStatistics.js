import React from "react";
import "./AutoStatistics.scss"
import NeoProgressbar from "../../components/NeoProgressbar/NeoProgressbar";

export default function AutoStatistics(props) {
    return (
        <div className="AutoStatistics">
            <div className="AutoStatistics-Left">
                <svg x="0" y="0" width="95px" height="40px" viewBox="0 0 105 40">
                    <defs>
                        <linearGradient id="brand-gradient" gradientTransform="rotate(90)">
                            <stop offset="5%" stopColor="gold" />
                            <stop offset="95%" stopColor="red" />
                        </linearGradient>
                    </defs>
                    <text textAnchor="end" fill="url(#brand-gradient)" x="100" y="30" className="done">3500</text>
                </svg>
                <span className="done-total-separator">/</span>
                <span className="total">5000</span>
                <div className="info">
                    <i className="info-icon fa fa-check" />
                    <span className="info-title">{3400}</span>
                </div>
                <div className="info">
                    <i className="info-icon fa fa-times" />
                    <span className="info-title">{100}</span>
                </div>
            </div>
            <div className="AutoStatistics-Right">
                <NeoProgressbar percent={70}  />
            </div>
        </div>
    )
}