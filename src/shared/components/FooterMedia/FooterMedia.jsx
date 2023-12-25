// import React, { useState } from "react"
import telegram from "../../../image/tel.png"
import facebook from "../../../image/face.png"
import vk from "../../../image/vk.png"
import you from "../../../image/you.png"
import instagram from "../../../image/inst.png"
// import logotip from "../../../image/logoLitlib.png"

import './FooterMedia.scss'

export function FooterMedia() {

    return (

        <div className="footerMedia" display="flex" gap= "5vh" flex-direction="row">
            <div className="footerMedia__picture__inst"><img src={instagram} alt="instagram" className="footerMedia__picture__inst__img" /></div>
            <div className="footerMedia__picture__vk"><img src={vk} alt="vk" className="footerMedia__picture__vk__img" /></div>
            <div className="footerMedia__picture__you"><img src={you} alt="you" className="footerMedia__picture__you__img" /></div>
            <div className="footerMedia__picture__tel"><img src={telegram} alt="telegram" className="footerMedia__picture__tel__img" /></div>
            <div className="footerMedia__picture__face"><img src={facebook} alt="facebook" className="footerMedia__picture__face__img" /></div>
        </div>
    )
}