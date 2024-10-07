import Button from '../Button/Button'
import './Hero.css'

function Hero() {
    return <article className="hero">
        <div className="hero__inner">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button href="#reserve">Reserve a Table</Button>
            </div>
            <img src="" alt=""/>
        </div>
    </article>
}

export default Hero
