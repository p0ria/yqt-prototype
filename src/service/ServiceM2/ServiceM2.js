import React from "react";
import "./ServiceM2.scss";
import NeoSimpleCard from "../../components/NeoSimpleCard/NeoSimpleCard";
import NeoRotateMotor from "../../components/NeoRotateMotor/NeoRotateMotor";

export default function ServiceM2(props) {
    return (
        <div className="ServiceM2">
            <NeoSimpleCard>
                <div className="NeoSimpleCard-Content">
                    <NeoRotateMotor title="M2" />
                </div>
            </NeoSimpleCard>
        </div>
    )
}