import React, { useState } from "react"
import './Button.scss'


// export function Button() {
export function Button(props) {
    function handleClick() {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <div className="button">
            <button
                className={`button__button ${props.styleButton}`}
                onClick={handleClick}
            >
                {props.wordButton}
            </button>
        </div>
    );
}