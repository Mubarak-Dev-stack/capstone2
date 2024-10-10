import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faMastodon, faThreads, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import logo from "../../../assets/logo-white.png";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <img src={logo} alt="" />
                <nav>
                    <h2>Sitemap</h2>
                    <ul className="footer__list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/Menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/bookings">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/order-online">Order Online</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h2>Contact</h2>
                    <ul className="footer__list">
                        <li><span><FontAwesomeIcon icon={faLocationDot} />678 Pisa Ave, Chicago, IL 60611</span></li>
                        <li><span><FontAwesomeIcon icon={faPhone} />(030) 123-9876</span></li>
                        <li>
                            <a href="mailto:customer@littlelemon.com">
                                <FontAwesomeIcon icon={faEnvelope} />
                                customer@littlelemon.com
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h2>Social Media</h2>
                    <ul className="footer__list">
                        <li>
                            <a href="https://facebook.com">
                                <FontAwesomeIcon icon={faFacebook} />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com">
                                <FontAwesomeIcon icon={faInstagram} />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://joinmastodon.org">
                                <FontAwesomeIcon icon={faMastodon} />
                                Mastodon
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com">
                                <FontAwesomeIcon icon={faYoutube} />
                                Youtube
                            </a>
                        </li>
                        <li>
                            <a href="https://threads.net">
                                <FontAwesomeIcon icon={faThreads} />
                                Threads
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
