import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/logo-white.png";

import "./Footer.css";
import { faFacebook, faInstagram, faMastodon, faThreads, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <img src={logo} alt="" />
                <nav>
                    <h2>Sitemap</h2>
                    <ul className="footer__list">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                        <li>
                            <a href="#res">Reservations</a>
                        </li>
                        <li>
                            <a href="#oo">Order Online</a>
                        </li>
                        <li>
                            <a href="#login">Login</a>
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
