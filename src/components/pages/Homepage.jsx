import About from "../sections/About/About"
import Hero from "../Hero/Hero"
import Testimonials from "../sections/TestimonialSection/TestimonialSection"

const testimonials = [
    {
        name: "Gloria 1",
        text: "Lorem Ipsum",
        rating: 4,
    },
    {
        name: "Gloria 2",
        text: "Lorem Ipsum",
        rating: 5,
    },
    {
        name: "Gloria 3",
        text: "Lorem Ipsum",
        rating: 4,
    },
    {
        name: "Gloria 4",
        text: "Lorem Ipsum",
        rating: 5,
    },
]

function Homepage() {
    return (
        <>
            <Hero></Hero>
            <Testimonials data={testimonials} />
            <About/>
        </>
    )
}

export default Homepage
