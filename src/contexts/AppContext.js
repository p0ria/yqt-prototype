import React, {createContext, useState} from "react";


export const AppContext = createContext();

export function AppContextProvider(props) {
    const [appState, setAppState] = useState({
        username: "",
        password: "",
        activePage: "home",
        preMode: 0,
        mode: 0,
        isPlaying: false,
        activeModal: "",
        selectedJob: "",
        manualActiveAction: "",
        autoCheckList: [
            {title: 'Job is selected', status: 'validating'},
            {title: 'Readers are ready', status: 'validating'},
            {title: 'PLC is ready', status: 'validating'},
            {title: 'Database is connected', status: 'validating'},
            {title: 'Thin Client 1 is connected', status: 'validating'},
            {title: 'Thin Client 2 is connected', status: 'validating'},
            {title: 'Thin Client 3 is connected', status: 'validating'}
        ],
        autoCheckListStatus: "",
        readers: [
            {status: 0, good: 24, bad: 0},
            {status: 1, good: 20, bad: 2},
            {status: 2, good: 24, bad: 10},
            {status: 0, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 2, good: 24, bad: 10},
            {status: 0, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 2, good: 24, bad: 10},
            {status: 0, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 2, good: 24, bad: 10},
            {status: 0, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 2, good: 24, bad: 10},
            {status: 0, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 2, good: 24, bad: 10},
            {status: 0, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 2, good: 24, bad: 10},
            {status: 0, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 2, good: 24, bad: 10},
            {status: 1, good: 24, bad: 10},
            {status: 2, good: 24, bad: 10}
        ],
        errors: [
            {id: "Output spacer empty"},
            {id: "Reader operation sensor error"},
            {id: "Output buffer full"},
        ]
    });
    
    return (
        <AppContext.Provider value={[appState, setAppState]}>
            {props.children}
        </AppContext.Provider>
    )
}