import React from "react";
import "./AutoCheckList.scss";

export default function AutoCheckList({items = []}) {
    return (
        <div className="AutoCheckList">
            {items.map(item => (
                <div className="AutoCheckList-Item">
                    {item.status === 'validating' ?
                        <div className="AutoCheckList-Item__Icon spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        :
                        <i className={`AutoCheckList-Item__Icon fa ${item.status === 'passed' ? 'passed fa-check' : 'failed fa-times'}`} /> 
                    }
                    <div className="AutoCheckList-Item__Title">
                        {item.title}
                    </div>
                    
                </div>
            ))}
        </div>
    )
}