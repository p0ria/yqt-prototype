import React, {useState} from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import "./SetupReadersList.scss"

export default function SetupReadersList({readers = [], handleSelectedChanged}) {
    const [selectedId, setSelectedId] = useState(null);
    const handleSelected = readerId => {
        const newSelectedId = selectedId === readerId ? null : readerId
        setSelectedId(newSelectedId);
        if(handleSelectedChanged) handleSelectedChanged(newSelectedId);
    };
    return (
        <Scrollbars style={{ width: "100%", height: "100%" }}>
            <div className="SetupReadersList">
                {readers.map(reader => {
                    return reader.readerNumber ? 
                            <></> :
                            <div className={`SetupReadersList-Item ${reader.id === selectedId ? 'active' : ''}`}
                                 onClick={() => handleSelected(reader.id)}>
                                {reader.id}
                            </div>
                    }
                )}
            </div>
        </Scrollbars>
    )
}