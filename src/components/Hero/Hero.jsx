import Button from "../Button/Button";

import "./Hero.css";

function Hero({
    headline,
    subHeadline,
    text,
    image,
    imageAlt = "",
    buttonText,
    buttonLink,
}) {
    return (
        <article className="hero">
            <div className="hero__inner container">
                <div>
                    <h1>{headline}</h1>
                    <h2>{subHeadline}</h2>
                    {text && <p>{text}</p>}
                    {buttonLink && buttonText && (
                        <Button href={buttonLink}>Reserve a Table</Button>
                    )}
                </div>
                <div>
                    {image && (
                        <img
                            className="hero__image"
                            src={image}
                            alt={imageAlt}
                            width="416"
                            height="416"
                        />
                    )}
                </div>
            </div>
        </article>
    );
}

export default Hero;
