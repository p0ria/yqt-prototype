import React from "react";
import "./ServiceM1.scss";
import NeoSimpleCard from "../../components/NeoSimpleCard/NeoSimpleCard";
import NeoRotateMotor from "../../components/NeoRotateMotor/NeoRotateMotor";

export default function ServiceM1(props) {
    return (
        <div className="ServiceM1">
            <NeoSimpleCard>
                <div className="NeoSimpleCard-Content">
                    <NeoRotateMotor title="M1" />
                </div>
            </NeoSimpleCard>
        </div>
    )
}