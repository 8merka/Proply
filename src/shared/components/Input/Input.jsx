import React from "react"
import './Input.scss'

export function Input(props) {
    return (
        <div className="input">
            <input
                className={`input__input ${props.styleInput}`}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                type={props.type}
                pattern={props.pattern}
            />
        </div>
    )
}
