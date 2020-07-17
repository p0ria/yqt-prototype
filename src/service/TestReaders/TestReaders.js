import React, {useState} from "react";
import "./TestReaders.scss";
import NeoTextSquareButton from "../../components/NeoTextSquareButton/NeoTextSquareButton";
import TestReaderList from "../TestReaderList/TestReaderList";
const testReaders = [
    {id: 1, status: 0},
    {id: 2, status: 0},
    {id: 3, status: 0},
    {id: 4, status: 0},
    {id: 5, status: 0},
    {id: 6, status: 0},
    {id: 7, status: 0},
    {id: 8, status: 0},
    {id: 9, status: 0},
    {id: 10, status: 0},
    {id: 11, status: 0},
    {id: 12, status: 0},
    {id: 13, status: 0},
    {id: 14, status: 0},
    {id: 15, status: 0},
    {id: 16, status: 0},
    {id: 17, status: 0},
    {id: 18, status: 0},
    {id: 19, status: 0},
    {id: 20, status: 0},
    {id: 21, status: 0},
    {id: 22, status: 0},
    {id: 23, status: 0},
    {id: 24, status: 0},
    {id: 25, status: 0},
    {id: 26, status: 0},
    {id: 27, status: 0},
    {id: 28, status: 0},
    {id: 29, status: 0},
    {id: 30, status: 0},
];
export default function TestReaders(props) {
    const [readers, setReaders] = useState(testReaders);
    const [isTesting, setIsTesting] = useState(false);
    const handleTestReaders = () => {
        setIsTesting(true);
        setReaders(readers.map(reader => ({...reader, status: 1})));
        setTimeout(() => {
            setIsTesting(false);
            setReaders(readers.map(reader => {
                if(reader.id === 10 || reader.id === 14) return {...reader, status: 3};
                return {...reader, status: 2};
            }));
        }, 3000)
    };
    return (
        <div className="TestReaders">
            <NeoTextSquareButton text="Test Readers"
                                 icon="ion-ios-flask"
                                 isLoading={isTesting}
                                 handleClick={handleTestReaders}
                                 buttonWidth={160}
                                 textWidth={100} />
            <TestReaderList readers={readers} />
        </div>
    )
}