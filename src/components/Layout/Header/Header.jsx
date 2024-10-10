import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import Nav from '../Nav/Nav'

import './Header.css'

function Header() {
    return <header className="header container">
        <Link to="/"><img src={logo} alt="" /></Link>
        <Nav />
    </header>
}

export default Header
