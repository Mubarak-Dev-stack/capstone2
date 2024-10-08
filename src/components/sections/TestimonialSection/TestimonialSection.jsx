import Section from "../../Layout/Section/Section";
import Testimonial from "../../Testimonial/Testimonial";

import './TestimonialSection.css'

function TestimonialSection({ data = [] }) {
    return (
        <Section bg="dark">
            <h2>Testimonials</h2>
            <ul className="testimonials">
                {data.map((testimonial) => (
                    <li key={testimonial.id}>
                        <Testimonial
                            name={testimonial.name}
                            rating={testimonial.rating}
                            text={testimonial.text}
                            image={testimonial.image}
                        />
                    </li>
                ))}
            </ul>
        </Section>
    );
}

export default TestimonialSection;
