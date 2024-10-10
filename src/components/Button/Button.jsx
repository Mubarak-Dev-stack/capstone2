import { Link } from 'react-router-dom'
import './Button.css'

function Button({href, children, type="button"}) {

    return href
        ? <Link className="btn" to={href}>{children}</Link>
        : <button className="btn" type={type}>{children}</button>
}

export default Button
