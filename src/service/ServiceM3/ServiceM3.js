import React from "react";
import "./ServiceM3.scss";
import NeoSimpleCard from "../../components/NeoSimpleCard/NeoSimpleCard";
import NeoStepMotor from "../../components/NeoStepMotor/NeoStepMotor";

export default function ServiceM3(props) {
    return (
        <div className="ServiceM3">
            <NeoSimpleCard>
                <div className="NeoSimpleCard-Content">
                    <NeoStepMotor title="M3" />
                </div>
            </NeoSimpleCard>
        </div>
    )
}