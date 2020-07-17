import React from "react";
import "./NeoSimpleCard.scss";

export default function NeoSimpleCard({children}) {
    return (
        <div className="NeoSimpleCard">
           <div className="NeoSimpleCard-Overlay">
               {children}
           </div> 
        </div>
    )
}