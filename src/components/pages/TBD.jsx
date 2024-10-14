import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../Layout/Section/Section";
import Hero from "../Hero/Hero";

import heroImage from '../../assets/hero/restauranfood.jpg';

function TBD() {
    return (
        <>
            <Hero
                headline="Little Lemon"
                subHeadline="Chicago"
                text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                image={heroImage}
                imageAlt="restaurant food on a plate"
            />
            <Section>
                <div className="flex gap-2">
                    <FontAwesomeIcon className="m-t-1" icon={faHelmetSafety} size="xl" />
                    <div>
                        <h2>This page is still under construction</h2>
                        <p>Please come back later.</p>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default TBD;
