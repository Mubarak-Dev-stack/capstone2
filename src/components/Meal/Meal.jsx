import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import './Meal.css'

function Meal({title, image, description, price}) {
    return <article className="meal">
        <div class="meal__inner">
            <div className="meal__head">
                <h3 className="meal__headline">{title}</h3>
                <span className="meal__price">$ {price}</span>
            </div>
            <div className="meal__image">
                <img src={image} alt="" />
            </div>
            <p className="meal__text">{description}</p>
            <a className="meal__link" href="#order">Order a delivery <FontAwesomeIcon icon={faMotorcycle} size=""/></a>
        </div>
    </article>
}

export default Meal
