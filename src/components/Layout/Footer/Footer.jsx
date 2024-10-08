import logo from '../../../assets/logo-white.png'

import './Footer.css'

function Footer() {
    return <footer className="footer">
        <div className="footer__inner">
            <img src={logo} alt="" />
            <nav>
                <h2>Sitemap</h2>
                <ul className="footer__list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#res">Reservations</a></li>
                    <li><a href="#oo">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
            <nav>
                <h2>Contact</h2>
                <ul className="footer__list">
                    <li>678 Pisa Ave, Chicago, IL 60611</li>
                    <li>(030) 123-9876</li>
                    <li><a href="mailto:customer@littlelemon.com">customer@littlelemon.com</a></li>
                </ul>
            </nav>
            <nav>
                <h2>Social Media</h2>
                <ul className="footer__list">
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://joinmastodon.org">Mastodon</a></li>
                    <li><a href="https://youtube.com">Youtube</a></li>
                    <li><a href="https://threads.net">Threads</a></li>
                </ul>
            </nav>
        </div>
    </footer>
}

export default Footer
