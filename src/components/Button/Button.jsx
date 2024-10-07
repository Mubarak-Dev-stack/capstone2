import './Button.css'

function Button({href, children, type="button"}) {

    return href
        ? <a className="btn" href={href}>{children}</a>
        : <button className="btn" type={type}>{children}</button>
}

export default Button
