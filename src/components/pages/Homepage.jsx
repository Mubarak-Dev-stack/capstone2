import About from "../sections/About/About"
import Hero from "../Hero/Hero"
import Testimonials from "../sections/TestimonialSection/TestimonialSection"
import testimonialdata from "../../data/testimonials"

function Homepage() {
    return (
        <>
            <Hero></Hero>
            <Testimonials data={testimonialdata} />
            <About/>
        </>
    )
}

export default Homepage
