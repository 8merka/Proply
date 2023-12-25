import React, { useState } from "react"
// import logotip from "../../../image/logoLitlib.png"

import './Copyright.scss'

export function Copyright(props) {

    return (

        <div className="copyright">
            <div className={`copyright__text ${props.copyrightStyle}`}>{props.copyrightWord}</div>
        </div>

    )
}