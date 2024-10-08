import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

import './Testimonial.css'

function Testimonial({
    name,
    image,
    text,
    rating = 0
}) {

    const ratingIcons = [];

    for (let i = 0; i < 5; i++) {
        ratingIcons.push(i < rating ? faStarSolid: faStarRegular);
    }

    return <article className="testimonial">
        <div className="testimonial__inner">
            <div className="testimonial__avatar">
                <img className="testimonial__image" src={image} alt=""/>
                <div>
                    <div className="testimonial__rating" role="img" aria-label={`Rating: ${rating} of 5 stars`}>
                        { ratingIcons.map((ratingIcon, index) => <FontAwesomeIcon key={index} icon={ratingIcon} />) }
                    </div>
                    <p className="testimonial__name">{name}</p>
                </div>
            </div>
            <p className="testimonial__text">&quot;{text}&quot;</p>
        </div>
    </article>
}

export default Testimonial
