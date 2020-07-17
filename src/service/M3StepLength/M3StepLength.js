import React, {useState} from "react";
import "./M3StepLength.scss";
import NeoSlider from "../../components/NeoSlider/NeoSlider";

export default function M3StepLength(props) {
    const [m3StepLength, setM3StepLength] = useState(12);
    const handleM3StepLengthChange = value => {
        if(value > m3StepLength) {
            setM3StepLength(Math.min(15, m3StepLength + 1));
        } else {
            setM3StepLength(Math.max(0, m3StepLength - 1));
        }
    };
    return (
        <div className="M3StepLength">
            <NeoSlider title="M3 Step Length"
                       min={1} 
                       max={15} 
                       value={m3StepLength} 
                       handleValueChange={handleM3StepLengthChange}/>
        </div>
    )
}