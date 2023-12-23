import React, { useState } from "react";
import './Burger.scss';

export function Burger({ items }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" checked={isOpen} onChange={toggleMenu} />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <ul className={`menu__box ${isOpen ? 'open' : ''}`}>
                {items.map((item, index) => (
                    <li key={index}>
                        <a className="menu__item" href={item.link} onClick={toggleMenu}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
