import React from "react";
import "./ServiceM0.scss";
import NeoSimpleCard from "../../components/NeoSimpleCard/NeoSimpleCard";
import NeoRotateMotor from "../../components/NeoRotateMotor/NeoRotateMotor";

export default function ServiceM0(props) {
    return (
        <div className="ServiceM0">
            <NeoSimpleCard>
                <div className="NeoSimpleCard-Content">
                    <NeoRotateMotor title="M0" />
                </div>
            </NeoSimpleCard>
        </div>
    )
}