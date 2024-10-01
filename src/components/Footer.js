import logo from '../assets/logo.svg';

function Footer() {
    return <footer>
        <img src={logo} alt="" />
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#res">Reservations</a></li>
                <li><a href="#oo">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    </footer>;
}

export default Footer;
