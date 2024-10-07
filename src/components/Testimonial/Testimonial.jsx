import './Testimonial.css'

function Testimonial({
    name,
    img,
    text,
    rating = 0
}) {
    return <article className="testimonial">
        <span>{rating} of 5</span>
        <img className="testimonial__image" src={img} alt=""/>
        <p className="testimonial__name">{name}</p>
        <p className="testimonial__text">{text}</p>
    </article>
}

export default Testimonial
