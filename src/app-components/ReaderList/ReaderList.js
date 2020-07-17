import React from "react";
import "./ReaderList.scss"
import NeoReader from "../../components/NeoReader/NeoReader";
import NeoReaderHdd from "../../components/NeoReaderHdd/NeoReaderHdd";

export default function ReaderList({readers}) {
    return (
        <div className="ReaderList">
            {
                readers.map((reader, index) => <NeoReader number={index + 1} 
                                                          status={reader.status}
                                                          good={reader.good}
                                                          bad={reader.bad} />)
            }
        </div>
    )
}