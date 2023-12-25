import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Logo.scss';

export function Logo(props) {
    function handleClick() {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <div className="logo">
            <div className={`logo__text ${props.styleLogo}`} onClick={handleClick}>{props.word} </div>
        </div>
    );
}