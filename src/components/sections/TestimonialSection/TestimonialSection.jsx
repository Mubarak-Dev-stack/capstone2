import Section from "../../Layout/Section/Section";
import Testimonial from "../../Testimonial/Testimonial";

import './TestimonialSection.css'

function TestimonialSection({ data = [] }) {
    return (
        <Section>
            <h2>Testimonials</h2>
            <ul className="testimonials">
                {data.map((testimonial, index) => (
                    <li key={index}>
                        <Testimonial
                            name={testimonial.name}
                            rating={testimonial.rating}
                            text={testimonial.text}
                        />
                    </li>
                ))}
            </ul>
        </Section>
    );
}

export default TestimonialSection;
