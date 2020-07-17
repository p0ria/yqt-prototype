import React from "react";
import "./ErrorList.scss";
import NeoError from "../../components/NeoError/NeoError";

export default function ErrorList({errors}) {
    return (
        <div className="ErrorList">
            {errors.map(error => (
                <NeoError title={error.id} />
            ))} 
        </div>
    )
}