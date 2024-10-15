import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../Layout/Section/Section";
import Hero from "../Hero/Hero";
import Button from "../Button/Button";

import heroImage from "../../assets/hero/restaurant.jpg";

function BookingConfirmationPage() {
    return (
        <>
            <Hero
                headline="Little Lemon"
                subHeadline="Chicago"
                text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                image={heroImage}
                imageAlt="Restaurent inside area"
            />
            <Section>
                <div className="flex gap-2">
                    <FontAwesomeIcon className="m-t-1" icon={faCircleCheck} size="xl" />
                    <div>
                        <h2>Your reservation has been confirmed.</h2>
                        <p>You will receive an email with all the details.</p>
                        <Button href="/">Back to our Homepage</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default BookingConfirmationPage;
