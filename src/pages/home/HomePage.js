import React, {useContext, useState} from "react";
import "./HomePage.scss";
import {AppContext} from "../../contexts/AppContext";
import AutoComponent from "../../app-components/AutoComponent/AutoComponent";
import ModeSelect from "../../app-components/ModeSelect/ModeSelect";
import JobsModal from "../../app-components/JobsModal/JobsModal";
import HealthIndicators from "../../app-components/HealthIndicators/HealthIndicators";
import ErrorList from "../../app-components/ErrorList/ErrorList";
import LampList from "../../app-components/LampList/LampList";
import ServiceComponent from "../../service/ServiceComponent/ServiceComponent";

export default function HomePage (props) {
    const [appState, setAppState] = useContext(AppContext);
    const style = appState.activeModal ? {pointerEvents: "none"} : {};
    return (
        <div className="HomePage">
            <header className="HomePage-Header" style={style}>
                <ModeSelect />
                <LampList />
            </header>
            <main className="HomePage-Content" style={style}>
                <div className="HomePage-Content__Left">
                    <HealthIndicators />
                </div>
                <div className="HomePage-Content__Middle">
                    <div className={`mode mode-auto ${appState.mode !== 2 ? 'active' : ''}`}>
                        <AutoComponent />
                    </div>
                    <div className={`mode mode-service ${appState.mode === 2 ? 'active' : ''}`}>
                        <ServiceComponent />
                    </div>
                </div>
                <div className="HomePage-Content__Right">
                </div>
            </main>
            <footer className="HomePage-Footer" style={style}>
                <div className="HomePage-Footer__Overlay">
                    <ErrorList errors={appState.errors}/>
                </div>
            </footer>
            <JobsModal isExpanded={appState.activeModal === "jobs"} />
        </div>
    )
}