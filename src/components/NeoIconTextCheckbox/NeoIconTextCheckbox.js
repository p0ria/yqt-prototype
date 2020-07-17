import React, {useContext, useState} from "react";
import "./NeoIconTextCheckbox.scss";
import {ThemeContext} from "../../contexts/ThemeContext";

export default function NeoIconTextCheckbox({text, checked, handleCheckedChanged, color, icon}) {
    const {colors} = useContext(ThemeContext);
    const style = {color: checked ? (color || colors.primary2) : colors.textSecondary};
    return (
        <div className="NeoIconTextCheckbox">
            <label>
                <div className="title">{text}</div>
                <input type="checkbox" name="" onChange={e => handleCheckedChanged(e.target.checked)} />
                <div className="icon-box">
                    <i className={`icon ${icon}`} style={style} aria-hidden="true"></i>
                </div>
            </label>
        </div>
    );
}