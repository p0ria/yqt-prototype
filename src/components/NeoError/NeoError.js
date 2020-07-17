import React from "react";
import "./NeoError.scss";

export default function NeoError({title}) {
    return (
        <div className="NeoError">
            <i className="NeoError-Icon fa fa-exclamation-triangle" />
            <span className="NeoError-Title">{title}</span>
        </div>
    )
}