import React, {useContext} from "react";
import "./JobsModal.scss";
import {AppContext} from "../../contexts/AppContext";
import JobsTable from "../JobsTable/JobsTable";

export default function JobsModal({isExpanded = false}) {
    const [appState, setAppState] = useContext(AppContext);
    return (
        <div className={`JobsModal ${isExpanded ? "expanded" : ""}`}>
            <div className="JobsModal-Content">
                <JobsTable />
            </div>
            <div className="JobsModal-Ticket" 
                 onClick={() => setAppState({...appState, activeModal: isExpanded ? "" : "jobs"})}>
                <span className="JobsModal-Ticket__Title">{appState.selectedJob}</span>
                <i className="JobsModal-Ticket__Icon fa fa-arrow-down"/>
            </div>
        </div>
    );
}