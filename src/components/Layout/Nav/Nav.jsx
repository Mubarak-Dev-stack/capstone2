import './Nav.css'

function Nav() {
    return <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item"><a className="nav__link" href="#home">Home</a></li>
            <li className="nav__item"><a className="nav__link" href="#about">About</a></li>
            <li className="nav__item"><a className="nav__link" href="#menu">Menu</a></li>
            <li className="nav__item"><a className="nav__link" href="#res">Reservations</a></li>
            <li className="nav__item"><a className="nav__link" href="#oo">Order Online</a></li>
            <li className="nav__item"><a className="nav__link" href="#login">Login</a></li>
        </ul>
    </nav>
}

export default Nav
