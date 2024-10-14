import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import BookingForm from "../Form/Bookingform";
import Hero from "../Hero/Hero";

import heroImage from "../../assets/hero/restaurant.jpg";
import { fetchAPI, submitAPI } from "../../data/fetchApi";
import { parse } from "date-fns";

export const createInitialAvailableTimes = (times) => {
    const response = fetchAPI(new Date());
    return [...times, ...(response || [])];
};

export const availableTimesReducer = (availableTimes, action) => {
    if (action.type === "onDateChange") {
        const response = fetchAPI(parse(action.date, 'yyyy-MM-dd', new Date()));
        return response?.length ? response : availableTimes;
    }

    return availableTimes;
};

function BookingPage() {
    const navigate = useNavigate();

    const [availableTimes, dispatchOnDateChange] = useReducer(
        availableTimesReducer,
        [],
        createInitialAvailableTimes,
    );

    const submitHandler = (formData) => {
        if (submitAPI(formData)) {
            navigate("/booking-confirmation");
        }
    };

    return (
        <>
            <Hero
                headline="Little Lemon"
                subHeadline="Chicago"
                text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                image={heroImage}
                imageAlt="Restaurent inside area"
            />
            <BookingForm
                availableTimes={availableTimes}
                onDateChange={dispatchOnDateChange}
                onFormSubmit={submitHandler}
            />
        </>
    );
}

export default BookingPage;
