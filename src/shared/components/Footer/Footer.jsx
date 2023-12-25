import React, { useState } from "react"
import { FooterMedia } from '../../components/FooterMedia/FooterMedia';
import { HeaderText } from "../HeaderText/HeaderText";
import { Copyright } from "../Copyright/Copyright";
// import logotip from "../../../image/logoLitlib.png"

import './Footer.scss'

export function Footer() {

    return (

        <footer className="footer">

            <FooterMedia></FooterMedia>
            <div className="footer__box">
                <HeaderText word="Houses" style="footer__box__houses" />
                <HeaderText word="Community" style="footer__box__community" />
                <HeaderText word="About Us" style="footer__box__aboutUs" />
            </div>
            <Copyright copyrightStyle="copyrightStyle" copyrightWord="Copyright 2023; Designed by Zotov Alexey"></Copyright>
        </footer>
    )
}