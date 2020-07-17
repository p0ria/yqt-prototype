import React from "react";
import "./SetupReadersItems.scss";

export default function SetupReadersItems({readers, selectedId, handleClicked}) {
    const indexedReaders = readers.map(_ => ({id: null, status: 0}));
    readers.filter(reader => !!reader.readerNumber)
        .forEach(reader => {
            const indexedReader = indexedReaders[reader.readerNumber - 1];
            indexedReader.id = reader.id;
            indexedReader.status = 1;
        });
    return (
        <div className={`SetupReadersItems ${selectedId ? 'active' : ''}`}>
            <div className="legend">
                <li>
                    <div className="reader-item" />
                    <small>N/A</small>
                </li>
                <li>
                    <div className="reader-item assigned" />
                    <small>Assigned</small>
                </li>
            </div>
            <div className="reader-items">
                {indexedReaders.map((reader, index) => (
                    <div className={`reader-item ${reader.status === 1 ? 'assigned' : ''}`} 
                         onClick={() => handleClicked({id: selectedId, readerNumber: index + 1})}>
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    )
}