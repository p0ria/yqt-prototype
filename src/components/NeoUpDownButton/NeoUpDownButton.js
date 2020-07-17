import React, {useState} from "react";
import "./NeoUpDownButton.scss";

export default function NeoUpDownButton(props) {
    // 0: no selection, 1: up, 2: down
    const [active, setActive] = useState(0);
    const handleButtonClick = index => {
      setActive(index);
      setTimeout(() => setActive(0), 3000);
    };
    return (
        <div className={`NeoUpDownButton ${active !== 0 ? 'busy' : ''}`}>
            <button className={`btn-up ${active === 1 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(1)}>
                <i className="fa fa-2x fa-angle-up" />
            </button>
            <button className={`btn-down ${active === 2 ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(2)}>
                <i className="fa fa-2x fa-angle-down" />
            </button>
        </div>
    )
}