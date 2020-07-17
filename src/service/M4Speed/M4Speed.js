import React, {useState} from "react";
import "./M4Speed.scss";
import NeoSlider from "../../components/NeoSlider/NeoSlider";

export default function M4Speed(props) {
    const [m4Speed, setM4Speed] = useState(7);
    const handleM4SpeedChange = value => {
        if(value > m4Speed) {
            setM4Speed(Math.min(10, m4Speed + 1));
        } else {
            setM4Speed(Math.max(0, m4Speed - 1));
        }
    };
    return (
        <div className="M4Speed">
            <NeoSlider title="M4 Speed"
                       min={1}
                       max={10}
                       value={m4Speed}
                       handleValueChange={handleM4SpeedChange}/>
        </div>
    )
}