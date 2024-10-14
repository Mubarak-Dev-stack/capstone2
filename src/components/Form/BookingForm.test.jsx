import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import { format } from "date-fns";

import BookingForm from "./Bookingform";

describe("Booking form", () => {
    const availableTimes = ["17:00", "18:00"];
    const dispatchOnDateChange = jest.fn();
    const submitHandler = jest.fn();
    const today = format(new Date(), "yyyy-MM-dd");

    test("should render the heading", () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Reserve a Table");
        expect(headingElement).toBeInTheDocument();
    });

    test("should successfully submit form with default values", async () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                onFormSubmit={submitHandler}
            />,
        );

        const submitButton = screen.getByText("Make Your reservation");
        fireEvent.click(submitButton);

        // flush formik microtasks
        await act(() => Promise.resolve());

        expect(submitHandler).toHaveBeenCalledWith({
            date: today,
            time: availableTimes[0],
            guests: "1",
            occasion: "Anniversary",
        });
    });

    test("should display an error message when date field's value is empty", async () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                submitData={submitHandler}
            />,
        );

        const dateInput = screen.getByLabelText("Choose date *");

        fireEvent.focus(dateInput);
        fireEvent.change(dateInput, { target: { value: "" } });
        fireEvent.blur(dateInput);

        // flush formik microtasks
        await act(() => Promise.resolve());

        const errorMessage = screen.getByTestId("error-message");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent("Please select a date");
    });

    test("should display an error message when number of guests field's value is empty", async () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                submitData={submitHandler}
            />,
        );

        const input = screen.getByLabelText("Number of guests *");

        fireEvent.change(input, { target: { value: "" } });
        fireEvent.blur(input);

        // flush formik microtasks
        await act(() => Promise.resolve());

        const errorMessage = screen.getByTestId("error-message");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent(
            "Please enter the number of guests",
        );
    });
});
