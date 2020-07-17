import React, {useContext} from "react";
import "./ModeSelect.scss"
import {AppContext} from "../../contexts/AppContext";

export default function ModeSelect() {
    const [appState, setAppState] = useContext(AppContext);
    const left = appState.mode === 0 ? 0 : (appState.mode === 1) ? -135 : -290;
    const handleModeSelect = () => {
        let {preMode, mode} =  appState;
        if(mode === 0 || mode === 2) {
            preMode = mode;
            mode = 1;
        } else if(mode > preMode) {
            preMode = mode;
            mode = mode + 1;
        } else {
            preMode = mode;
            mode = mode - 1;
        }
        setAppState({...appState, preMode, mode});
    };
    return (
        <div className="ModeSelect" onClick={handleModeSelect}>
            <div className="ModalSelect-Items" style={{left: left + "px"}}>
                <div className="ModalSelect-Item">
                    Auto
                </div>
                <div className="ModalSelect-Item">
                    Manual
                </div>
                <div className="ModalSelect-Item">
                    Service
                </div>
            </div>
            
            
        </div>
    )
}