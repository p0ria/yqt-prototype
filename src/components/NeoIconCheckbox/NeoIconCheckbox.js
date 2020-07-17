import React, {useContext, useState} from "react";
import "./NeoIconCheckbox.scss";
import {ThemeContext} from "../../contexts/ThemeContext";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    icon: props => ({
        color: props.color
    })
});

export default function NeoIconCheckbox({handleCheckedChanged, checked, color, icon}) {
    const {colors} = useContext(ThemeContext);
    const style = {color: checked ? (color || colors.primary2) : colors.textSecondary};
    const classes = useStyles(style);
    return (
        <div className="NeoIconCheckbox">
            <label>
                <input type="checkbox" name="" onChange={e => handleCheckedChanged(e.target.checked)} />
                <div className="icon-box">
                    <i className={`icon ${icon} ${classes.icon}`} aria-hidden="true"></i>
                </div>
            </label>
        </div>
    );
}