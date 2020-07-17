import React, {useState} from "react";
import "./NumberOfFeedInSteps.scss";
import NeoSlider from "../../components/NeoSlider/NeoSlider";

export default function NumberOfFeedInSteps(props) {
    const [feedInSteps, setFeedInSteps] = useState(2);
    const handleFeedInStepsChange = value => {
        if(value > feedInSteps) {
            setFeedInSteps(Math.min(5, feedInSteps + 1));
        } else {
            setFeedInSteps(Math.max(0, feedInSteps - 1));
        }
    };
    return (
        <div className="NumberOfFeedInSteps">
            <NeoSlider title="Feed In Steps"
                       min={0}
                       max={5}
                       value={feedInSteps}
                       handleValueChange={handleFeedInStepsChange}/>
        </div>
    )
}