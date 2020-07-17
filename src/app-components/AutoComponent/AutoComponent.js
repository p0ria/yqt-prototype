import React, {useContext} from "react";
import "./AutoComponent.scss";
import ReaderList from "../ReaderList/ReaderList";
import {AppContext} from "../../contexts/AppContext";
import NeoPlayPauseButton from "../../components/NeoPlayPauseButton/NeoPlayPauseButton";
import AutoAreaChart from "../AutoAreaChart/AutoAreaChart";
import AutoStatistics from "../AutoStatistics/AutoStatistics";
import ReactCardFlip from "react-card-flip";
import NeoTextSquareButton from "../../components/NeoTextSquareButton/NeoTextSquareButton";
import AutoCheckList from "../AutoCheckList/AutoCheckList";
let gAutoCheckList = [];
export default function AutoComponent(props) {
    const [appState, setAppState] = useContext(AppContext);
    gAutoCheckList = appState.autoCheckList;
    const {manualActiveAction} = appState;
    const isLoading = manualAction => manualAction === manualActiveAction;
    const handleManualAction = action => {
        setAppState({...appState, manualActiveAction: action});
        setTimeout(() => setAppState({...appState, manualActiveAction: ""}), 3000);
    };
    const isStarted = appState.autoCheckListStatus === 'passed' && appState.isPlaying;
    const handleStart = () => {
        if(appState.isPlaying) {
            setAppState({...appState, isPlaying: false});
        } else {
            setAppState({
                ...appState,
                isPlaying: true,
                autoCheckListStatus: 'validating',
                autoCheckList: appState.autoCheckList.map(item => ({...item, status: 'validating'}))
            });
            setTimeout(() => {
                setAppState({
                    ...appState,
                    isPlaying: true,
                    autoCheckListStatus: 'validating',
                    autoCheckList: gAutoCheckList.map(item => ({...item, status: 'passed'}))
                });
                setTimeout(() => {
                    setAppState({
                        ...appState,
                        isPlaying: true,
                        autoCheckListStatus: "passed",
                        autoCheckList: gAutoCheckList.map(item => ({...item, status: 'passed'})),
                    });
                }, 2000);
            }, 2000);
        }
    };
    return (
        <div className="AutoComponent">
            <div className="AutoComponent-Top">
                <AutoStatistics /> 
            </div>
            <div className="AutoComponent-Middle">
                <ReaderList readers={appState.readers} />
            </div>
            <div className="AutoComponent-Bottom">
                <div className="AutoComponent-Bottom__Chart">
                    <AutoAreaChart />
                </div>
                <div className="AutoComponent-Bottom__Actions">
                    <ReactCardFlip isFlipped={appState.mode !== 0} flipDirection="horizontal">
                        <div className="action-container auto">
                            <h4>{isStarted ? "Stop" : "Start"}</h4>
                            <NeoPlayPauseButton
                                isPlaying={isStarted}
                                handleClick={handleStart} />
                        </div>
                        <div className="action-container manual">
                            <NeoTextSquareButton icon="ion-md-pulse" isLoading={isLoading('osLoad')} disable={!!manualActiveAction} text="Load OS" handleClick={() => handleManualAction('osLoad')} />
                            <NeoTextSquareButton icon="ion-md-refresh" isLoading={isLoading('cycle')} disable={!!manualActiveAction} text="Cycle" handleClick={() => handleManualAction('cycle')} />
                            <NeoTextSquareButton icon="ion-md-log-in" isLoading={isLoading('feedIn')} disable={!!manualActiveAction} text="Feed In" handleClick={() => handleManualAction('feedIn')} />
                        </div>
                    </ReactCardFlip>
                </div>
            </div>
            {appState.autoCheckListStatus === 'validating' ?
                <AutoCheckList items={appState.autoCheckList} /> : null
            }
            
        </div>
    )
}