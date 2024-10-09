import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

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
                    <a className="nav__link active" href="/">
                        Home
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#about">
                        About
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#menu">
                        Menu
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#res">
                        Reservations
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#oo">
                        Order Online
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#login">
                        Login
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
