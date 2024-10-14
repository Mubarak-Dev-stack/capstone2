import { render, screen } from "@testing-library/react";
import { act } from 'react';
import { format } from "date-fns";

import BookingForm from "./Bookingform";

describe("Booking form", () => {
    const submitHandler = jest.fn();
    const today = format(new Date(), "yyyy-MM-dd");

    test("should render the heading", () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Reserve a Table");
        expect(headingElement).toBeInTheDocument();
    });

    test("should successfully submit form", async() => {
        const availableTimes = ["17:00", "18:00"];
        render(
            <BookingForm
                availableTimes={availableTimes}
                onFormSubmit={submitHandler}
            />,
        );

        const submitButton = screen.getByText("Make Your reservation");

        await act(async () => {
            submitButton.click();
        });

        expect(submitHandler).toHaveBeenCalledWith({
            date: today,
            time: availableTimes[0],
            guests: "1",
            occasion: "",
        });
    });
});
