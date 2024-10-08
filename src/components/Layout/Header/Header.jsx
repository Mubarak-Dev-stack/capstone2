import logo from '../../../assets/logo.svg'
import Nav from '../Nav/Nav'

import './Header.css'

function Header() {
    return <header className="header container">
        <a href="/"><img src={logo} alt="" /></a>
        <Nav />
    </header>
}

export default Header
