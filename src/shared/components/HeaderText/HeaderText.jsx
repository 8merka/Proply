import React, { useState } from "react"

import './HeaderText.scss'

export function HeaderText(props) {
    function handleClick() {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <>
            <div className={`${props.style} ${props.dopStyle}`} 
            onClick={handleClick}
            >{props.word}</div>
        </>
    )
}