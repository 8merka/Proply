import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderText } from "../HeaderText/HeaderText";
import { Logo } from "../Logo/Logo";
import './Header.scss';
import {Burger} from "../Burger/Burger";

export function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname);
    const [isAuthorized, setIsAuthorized] = useState(localStorage.getItem('authorization') === '1');

    useEffect(() => {
        setIsAuthorized(localStorage.getItem('authorization') === '1');
    }, []);

    async function handleCommunityClick() {
        navigate("/community");
        setCurrentPage("/community");
    }

    async function handleHousesClick() {
        navigate("/houses");
        setCurrentPage("/houses");
    }

    async function handleAboutUsClick() {
        navigate("/main");
        setCurrentPage("/main");
    }

    async function handleProfileClick() {
        navigate("/profile");
        setCurrentPage("/profile");
    }

    async function handleLoginClick() {
        navigate("/login");
        setCurrentPage("/login");
    }

    async function handleMainClick() {
        navigate("/proply");
        setCurrentPage("/proply");
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__container__logo">
                    <Logo word="proply" styleLogo="proplyStyle" onClick={handleMainClick}></Logo>
                </div>
                <div className="header__container__navigation">
                    <HeaderText word="Houses" onClick={handleHousesClick}
                        style={currentPage === "/houses" ? "selectedStyle" : ""}/>
                    <HeaderText word="Community" 
                    onClick={handleCommunityClick}
                        style={currentPage === "/instruction" ? "selectedStyle" : ""}/>
                    <HeaderText word="About Us" 
                    onClick={handleAboutUsClick}
                        style={currentPage === "/profile" ? "selectedStyle" : ""}
                      />
                    <HeaderText word={isAuthorized ? "Profile" : "Log In"} 
                    onClick={isAuthorized ? handleProfileClick : handleLoginClick}
                        style={currentPage === (isAuthorized ? "/profile" : "/login") ? "selectedStyle" : ""}
                        dopStyle="logIn"
                    />
                </div>
                <Burger items={[{ text: 'Houses', link: '#' },{ text: 'Community', link: '/community' },{ text: 'About Us', link: '/main' }, { text: isAuthorized ? 'Profile' : 'Log In', link: isAuthorized ? '/profile' : '/login' }, ]}></Burger>
            </div>
        </header>
    );
}
