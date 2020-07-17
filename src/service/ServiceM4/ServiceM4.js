import React from "react";
import "./ServiceM4.scss";
import NeoSimpleCard from "../../components/NeoSimpleCard/NeoSimpleCard";
import NeoUpDownButton from "../../components/NeoUpDownButton/NeoUpDownButton";

export default function ServiceM4(props) {
    return (
        <div className="ServiceM4">
            <NeoSimpleCard>
                <div className="NeoSimpleCard-Content">
                    <span className="title">
                        M4
                    </span>
                    <NeoUpDownButton />
                </div>
            </NeoSimpleCard>
        </div>
    )
}