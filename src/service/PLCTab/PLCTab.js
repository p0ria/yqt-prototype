import React from "react";
import "./PLCTab.scss";
import NumberOfActiveReaders from "../NumberOfActiveReaders/NumberOfActiveReaders";
import NumberOfFeedInSteps from "../NumberOfFeedInSteps/NumberOfFeedInSteps";
import M3StepLength from "../M3StepLength/M3StepLength";
import M4Speed from "../M4Speed/M4Speed";
import NeoUpDownButton from "../../components/NeoUpDownButton/NeoUpDownButton";
import NeoSimpleCard from "../../components/NeoSimpleCard/NeoSimpleCard";
import NeoTextInput from "../../components/NeoTextInput/NeoTextInput";
import ServiceM4 from "../ServiceM4/ServiceM4";
import NeoRotateMotor from "../../components/NeoRotateMotor/NeoRotateMotor";
import ServiceM3 from "../ServiceM3/ServiceM3";
import ServiceM0 from "../ServiceM0/ServiceM0";
import ServiceM1 from "../ServiceM1/ServiceM1";
import ServiceM2 from "../ServiceM2/ServiceM2";
import ServiceSensors from "../ServiceSensors/ServiceSensors";

export default function PLCTab(props) {
    return (
        <div className="PLCTab">
            <div className="PLCTab-Top">
                <ServiceSensors />
            </div>
            <div className="PLCTab-Bottom">
                <div className="PLCTab-Bottom__Left">
                    <h2>Motors</h2>
                    <ServiceM0 />
                    <ServiceM1 />
                    <ServiceM2 />
                    <ServiceM3 />
                    <ServiceM4 />
                </div>
                <div className="PLCTab-Bottom__Right">
                    <NumberOfActiveReaders />
                    <NumberOfFeedInSteps />
                    <M3StepLength />
                    <M4Speed />
                </div>
            </div>
        </div>
    )
}