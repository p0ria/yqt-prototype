import React from "react";
import "./TestReaderList.scss";
import NeoGlassReader from "../../components/NeoGlassReader/NeoGlassReader";

export default function TestReaderList({readers = []}) {
    return (
        <div className="TestReaderList">
            {readers.map(reader => (
                <NeoGlassReader number={reader.id} status={reader.status} />
            ))}
        </div>
    )
}