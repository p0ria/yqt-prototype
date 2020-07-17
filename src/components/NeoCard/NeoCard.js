import React from "react";
import "./NeoCard.scss";

export default function NeoCard(props) {
    return (
        <div className="NeoCard">
            {props.children}
        </div>
    )
}