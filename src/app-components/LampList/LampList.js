import React, {useContext} from "react";
import "./LampList.scss";
import NeoLamp from "../../components/NeoLamp/NeoLamp";
import {ThemeContext} from "../../contexts/ThemeContext";

export default function LampList(props) {
    const [theme] = useContext(ThemeContext);
    return (
        <div className="LampList">
            <NeoLamp color={theme.colors.yellow} isOn={true} />
            <NeoLamp color={theme.colors.green} isOn={true} />
            <NeoLamp color={theme.colors.red} isOn={true} />
        </div>
    )
}