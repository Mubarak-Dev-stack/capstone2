import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const onButtonClickHandler = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const icon = isMobileNavOpen ? faXmark : faBars;

    return (
        <nav className="nav">
            <button
                className="nav__toggle"
                type="button"
                title="Main menu"
                aria-label="Main menu"
                aria-expanded={isMobileNavOpen}
                aria-controls="nav-menu"
                onClick={onButtonClickHandler}
            >
                <FontAwesomeIcon icon={icon} size="2xl" />
            </button>
            <ul id="nav-menu" className="nav__list" data-open={isMobileNavOpen}>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/">Home</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/about">About</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/menu">Menu</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/bookings">Reservations</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/order-online">Order Online</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
