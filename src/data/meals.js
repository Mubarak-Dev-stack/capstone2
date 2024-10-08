import image1 from '../assets/meals/bruchetta.jpg'
import image2 from '../assets/meals/greekSalad.jpg'
import image3 from '../assets/meals/lemonDessert.jpg'

const meals = [
    {
        id: 'meal1',
        title: 'Bruschetta',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        price: 8.99,
        image: image1,
    },
    {
        id: 'meal2',
        title: 'Greek Salad',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        price: 10.99,
        image: image2,
    },
    {
        id: 'meal3',
        title: 'Lemon Dessert',
        description: 'This comes straight from grandma`s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        price: 5.99,
        image: image3,
    },
]

export default meals
