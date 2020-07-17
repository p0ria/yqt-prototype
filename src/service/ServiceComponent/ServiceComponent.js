import React, {useState} from "react";
import "./ServiceComponent.scss";
import NeoTabs from "../../components/NeoTabs/NeoTabs";
import PLCTab from "../PLCTab/PLCTab";
import ReadersTab from "../ReadersTab/ReadersTab";

export default function ServiceComponent(props) {
    const [tab, setTab] = useState(0);
    return (
        <div className="ServiceComponent">
            <div className="ServiceComponent-Header">
                <NeoTabs handleTabChanged={tabIndex => setTab(tabIndex)} />
            </div>
            <div className="ServiceComponent-Content">
                {
                    tab === 0 ? <PLCTab /> : <ReadersTab />
                }
            </div>
        </div>
    )
}