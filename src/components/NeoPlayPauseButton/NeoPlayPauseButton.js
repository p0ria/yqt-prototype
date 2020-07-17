import React from "react";
import "./NeoPlayPauseButton.scss";

export default function NeoPlayPauseButton({isPlaying, disable, handleClick, }) {
    return (
        <div className="NeoPlayPauseButton">
            <button className={`btn play-pause ${isPlaying && 'playing'} ${disable && 'disable'}`} onClick={handleClick}>
                <div className="icon-container">
                    <svg className="icon play" viewBox="0 0 448 512">
                        <path
                            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
                    </svg>
                </div>
                <div className="icon-container">
                    <svg className="icon pause" viewBox="0 0 448 512">
                        <path
                            d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48
					48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"/>
                    </svg>
                </div>
            </button>
        </div>
    );
}