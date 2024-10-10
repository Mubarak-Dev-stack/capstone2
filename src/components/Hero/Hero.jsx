import Button from '../Button/Button'
import image from '../../assets/hero/restauranfood.jpg';

import './Hero.css'

function Hero() {
    return <article className="hero">
        <div className="hero__inner container">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button href="/reservations">Reserve a Table</Button>
            </div>
            <div>
                <img className="hero__image" src={image} alt="restaurant food on a plate"/>
            </div>
        </div>
    </article>
}

export default Hero
