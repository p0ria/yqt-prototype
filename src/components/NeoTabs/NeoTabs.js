import React, {useState} from "react";
import "./NeoTabs.scss";

const tab0 = {width: '138px', left: '7px'};
const tab1 = {width: '173px', left: '158px'};
const serviceTabs = [
    {icon: 'ion-md-settings', title: 'PLC Config'},
    {icon: 'ion-md-card', title: "Readers Config"}
];
export default function NeoTabs({tabs = serviceTabs, handleTabChanged}) {
    const [state, setState] = useState({tabIndex: 0, style: tab0});
    const handleTabChange = tabIndex => {
        if(tabIndex === 0) setState({tabIndex, style: tab0});
        else setState({tabIndex, style: tab1});
        handleTabChanged(tabIndex);
    };
    return (
        <div className="NeoTabs">
            {tabs.map((tab, index) => (
                <div className={`NeoTab ${index === state.tabIndex ? 'active' : ''}`} onClick={() => handleTabChange(index)}>
                    <i className={`NeoTab-Icon ${tab.icon}`} />
                    <span className="NeoTab-Title">{tab.title}</span>
                </div>
            ))}
            <div className="NeoTabs-Overlay" style={state.style} />
        </div>
    );
}