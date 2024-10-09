import Button from "../../Button/Button";
import Section from "../../Layout/Section/Section";
import Meal from "../../Meal/Meal";

import './MealSection.css'

function MealSection({ data = [] }) {
    return (
        <Section>
            <div className="section__header">
                <h2>Meals</h2>
                <Button>Online Menu</Button>
            </div>
            <ul className="meals">
                {data.map((meal) => (
                    <li key={meal.id}>
                        <Meal
                            title={meal.title}
                            price={meal.price}
                            description={meal.description}
                            image={meal.image}
                        />
                    </li>
                ))}
            </ul>
        </Section>
    );
}

export default MealSection;
