import logo from '../../../assets/logo.svg'
import Nav from '../Nav/Nav'

import './Header.css'

function Header() {
    return <header className="header">
        <a href="/"><img src={logo} alt="" /></a>
        <Nav></Nav>
    </header>
}

export default Header
