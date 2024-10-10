import About from "../sections/About/About"
import Hero from "../Hero/Hero"
import Testimonials from "../sections/TestimonialSection/TestimonialSection"
import MealSection from "../sections/MealSection/MealSection"
import testimonialdata from "../../data/testimonials"
import mealdata from "../../data/meals"

import image from '../../assets/hero/restauranfood.jpg';

function Homepage() {
    return (
        <>
            <Hero
                headline="Little Lemon"
                subHeadline="Chicago"
                text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                image={image}
                imageAlt="restaurant food on a plate"
                buttonLink="/bookings"
                buttonText="Reserve a Table"
            />
            <MealSection data={mealdata} />
            <Testimonials data={testimonialdata} />
            <About/>
        </>
    )
}

export default Homepage
