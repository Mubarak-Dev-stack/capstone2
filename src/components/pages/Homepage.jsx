import About from "../sections/About/About"
import Hero from "../Hero/Hero"
import Testimonials from "../sections/TestimonialSection/TestimonialSection"
import MealSection from "../sections/MealSection/MealSection"
import testimonialdata from "../../data/testimonials"
import mealdata from "../../data/meals"

function Homepage() {
    return (
        <>
            <Hero></Hero>
            <MealSection data={mealdata} />
            <Testimonials data={testimonialdata} />
            <About/>
        </>
    )
}

export default Homepage
