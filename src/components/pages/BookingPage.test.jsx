import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import BookingPage, {
    createInitialAvailableTimes,
    availableTimesReducer,
} from "./BookingPage";

describe("Booking page", () => {
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    test("createInitialAvailableTimes", () => {
        const initialTimes = createInitialAvailableTimes([]);

        expect(initialTimes).toBeDefined();
        expect(initialTimes.length).toBeGreaterThan(0);

        initialTimes.forEach((value) => expect(value).toMatch(timeFormat));
    });

    test("availableTimesReducer", () => {
        const initialTimes = createInitialAvailableTimes([]);
        const reduced = availableTimesReducer(initialTimes, {
            type: "onDateChange",
            date: "2024-11-23",
        });
        expect(reduced).toBeDefined();
        expect(reduced.length).toBeGreaterThan(0);

        reduced.forEach((value) => expect(value).toMatch(timeFormat));
    });

    test("should have one or more available booking time options", async () => {
        render(
            <MemoryRouter>
                <BookingPage />
            </MemoryRouter>
        );

        const timeOptions = await screen.findAllByTestId("res-time-option");

        expect(timeOptions.length).toBeGreaterThanOrEqual(1);
        timeOptions.forEach((option) =>
            expect(option.value).toMatch(timeFormat),
        );
    });

    test("should update available booking time options when changing booking date", async () => {
        render(
            <MemoryRouter>
                <BookingPage />
            </MemoryRouter>,
        );

        const bookingDate = "2024-11-02";
        const dateInput = screen.getByLabelText("Choose date *");
        const initialTimeOptions = await screen.findAllByTestId(
            "res-time-option",
        );
        fireEvent.change(dateInput, { target: { value: bookingDate } });
        fireEvent.blur(dateInput);

        const updatedTimeOptions = await screen.findAllByTestId(
            "res-time-option",
        );

        expect(dateInput).toHaveValue(bookingDate);
        initialTimeOptions.forEach((option) =>
            expect(option.value).toMatch(timeFormat),
        );
        updatedTimeOptions.forEach((option) =>
            expect(option.value).toMatch(timeFormat),
        );
    });
});
