import React, {useState} from "react";
import "./NumberOfActiveReaders.scss";
import {MDBInput} from "mdbreact";
import NeoSlider from "../../components/NeoSlider/NeoSlider";

export default function NumberOfActiveReaders(props) {
    const [activeCount, setActiveCount] = useState(28);
    const handleActiveCountChange = value => {
      if(value > activeCount) {
          setActiveCount(Math.min(30, activeCount + 2));
      } else {
          setActiveCount(Math.max(0, activeCount - 2));
      }
    };

    return (
        <div className="NumberOfActiveReaders">
            <NeoSlider title="Active Readers" 
                       min={0} 
                       max={30} 
                       value={activeCount} 
                       step={2}
                       handleValueChange={handleActiveCountChange}/>
        </div>
    );
    
}