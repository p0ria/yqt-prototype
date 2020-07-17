import React from "react";
import "./ReadersTab.scss";
import TestReaders from "../TestReaders/TestReaders";
import SetupReaders from "../SetupReaders/SetupReaders";

export default function ReadersTab(props) {
    return (
        <div className="ReadersTab">
           <div className="ReadersTab-Top">
               <TestReaders />
           </div>
           <div className="ReadersTab-Bottom">
               <SetupReaders />
           </div> 
        </div>
    )
}