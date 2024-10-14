import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import BookingForm from "../Form/Bookingform";
import Hero from "../Hero/Hero";

import useSubmit from "../../hooks/useSubmit";
import fetchTimes from "../../data/availableTimes";

import heroImage from '../../assets/hero/restaurant.jpg';

const createInitialAvailableTimes = (times) => {
    const response = fetchTimes(new Date());
    return [...times, ...(response?.data || [])];
};

const availableTimesReducer = (availableTimes, action) => {
    if (action.type === "onDateChnage") {
        const response = fetchTimes(new Date(action.date));
        return response?.data?.length ? response.data : availableTimes;
    }

    return availableTimes;
};

function BookingPage() {
    const { isLoading, submit } = useSubmit();
    const navigate = useNavigate();

    const [availableTimes, dispatchOnDateChange] = useReducer(
        availableTimesReducer,
        [],
        createInitialAvailableTimes
    );

    const submitHandler = (formData) => {
        return new Promise((res, fail) => {
            if (!isLoading) {
                submit("submitData", formData)
                    .then(() => {
                        navigate("/booking-confirmation");
                        res();
                    })
                    .catch(() => {
                        fail();
                    });
            } else {
                res();
            }
        });
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
                isLoading={isLoading}
            />
        </>
    );
}

export default BookingPage;
