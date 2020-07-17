import React, {useState} from "react";
import "./SetupReaders.scss";
import SetupReadersList from "./SetupReadersList/SetupReadersList";
import SetupReadersItems from "./SetupReadersItems/SetupReadersItems";

const defaultSetupReaders = [
    {id: "ACS 39U 0", readerNumber: null},
    {id: "ACS 39U 1", readerNumber: null},
    {id: "ACS 39U 2", readerNumber: null},
    {id: "ACS 39U 3", readerNumber: null},
    {id: "ACS 39U 4", readerNumber: null},
    {id: "ACS 39U 5", readerNumber: null},
    {id: "ACS 39U 6", readerNumber: 9},
    {id: "ACS 39U 7", readerNumber: null},
    {id: "ACS 39U 8", readerNumber: null},
    {id: "ACS 39U 9", readerNumber: null},
    {id: "ACS 39U 10", readerNumber: null},
    {id: "ACS 39U 11", readerNumber: null},
    {id: "ACS 39U 12", readerNumber: 14},
    {id: "ACS 39U 13", readerNumber: null},
    {id: "ACS 39U 14", readerNumber: null},
    {id: "ACS 39U 15", readerNumber: null},
    {id: "ACS 39U 16", readerNumber: null},
    {id: "ACS 39U 17", readerNumber: null},
    {id: "ACS 39U 18", readerNumber: null},
    {id: "ACS 39U 19", readerNumber: null},
    {id: "ACS 39U 20", readerNumber: null},
    {id: "ACS 39U 21", readerNumber: null},
    {id: "ACS 39U 22", readerNumber: null},
    {id: "ACS 39U 23", readerNumber: null},
    {id: "ACS 39U 24", readerNumber: null},
    {id: "ACS 39U 25", readerNumber: null},
    {id: "ACS 39U 26", readerNumber: null},
    {id: "ACS 39U 27", readerNumber: null},
    {id: "ACS 39U 28", readerNumber: null},
    {id: "ACS 39U 29", readerNumber: null}
];

export default function SetupReaders(props) {
    const [readers, setReaders] = useState(defaultSetupReaders);
    const [selectedId, setSelectedId] = useState(null);
    const handleOccupied = ({id, readerNumber}) => {
        setReaders(readers.map(reader => ({
            ...reader,
            readerNumber: reader.id === id ? readerNumber : reader.readerNumber
        })));
        setSelectedId(null);
    };
    return (
        <div className="SetupReaders">
            <div className="SetupReaders-Header">
                
            </div>
            <div className="SetupReaders-Left">
                <SetupReadersList readers={readers}
                                  handleSelectedChanged={newSelectedId => setSelectedId(newSelectedId)} />
            </div>
            <div className="SetupReaders-Right">
                <SetupReadersItems readers={readers}
                                   selectedId={selectedId} 
                                   handleClicked={handleOccupied}/>
            </div>
        </div>
    )
}