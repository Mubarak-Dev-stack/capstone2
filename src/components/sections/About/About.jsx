import Section from "../../Layout/Section/Section";

import img1 from "../../../assets/about/MarioAndAdrianA.jpg";
import img2 from "../../../assets/about/MarioAndAdrianB.jpg";

import "./About.css";

function About() {
    return (
        <Section>
            <div className="about">
                <div className="about__text">
                    <h2 className="h1">Little Lemon</h2>
                    <h3 className="h2">Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt.
                    </p>
                </div>
                <div className="about__images">
                    <img
                        className="about__image"
                        src={img1}
                        alt="Mario and Adrian in the kitchen"
                    />
                    <img
                        className="about__image"
                        src={img2}
                        alt="Mario and Adrian in the kitchen"
                    />
                </div>
            </div>
        </Section>
    );
}

export default About;
