import React from "react";
import "./NeoGlassReader.scss";

export default function NeoGlassReader({number, status}) {
    return (
        <div className={`NeoGlassReader ${status === 1 ? "yellow-light" : ""} ${status === 2 ? "green-light" : ""} ${status === 3 ? "red-light" : ""}`}>
            {number}
        </div>
    )
}