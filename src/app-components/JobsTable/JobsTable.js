import React from "react";
import "./JobsTable.scss";
import WithCheckBoxes from "../JobsModal/WithCheckBoxes";

export default function JobsTable(props) {
    return (
        <div className="JobsTable">
            <WithCheckBoxes />
        </div>
    )
}