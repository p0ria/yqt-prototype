import React, {useEffect, useState} from "react";
import "./ServiceSensors.scss";
import NeoServiceSensor from "../../components/NeoServiceSensor/NeoServiceSensor";

const serviceSensors = [
    {id: 'Sensor 1', isOn: true},
    {id: 'Sensor 2', isOn: true},
    {id: 'Sensor 3', isOn: true},
    {id: 'Sensor 4', isOn: true},
    {id: 'Sensor 5', isOn: true},
    {id: 'Sensor 6', isOn: true},
    {id: 'Sensor 7', isOn: true},
    {id: 'Sensor 8', isOn: true},
    {id: 'Sensor 9', isOn: true},
    {id: 'Sensor 10', isOn: true},
    {id: 'Sensor 11', isOn: true},
    {id: 'Sensor 12', isOn: true},
    {id: 'Sensor 13', isOn: true},
    {id: 'Sensor 14', isOn: true},
];
export default function ServiceSensors(props) {
    const [sensors, setSensors] = useState(serviceSensors);
    useEffect(() => {
        setInterval(() => {
            setSensors(sensors.map(sensor => ({
                ...sensor,
                isOn: Math.random() > .5
            })));
        }, 2000);
    }, []);
    return (
        <div className="ServiceSensors">
            {sensors.map(sensor => (
                <NeoServiceSensor title={sensor.id} isOn={sensor.isOn} />
            ))}
        </div>
    )
}