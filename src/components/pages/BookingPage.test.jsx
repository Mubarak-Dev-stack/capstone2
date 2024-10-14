import {
    createInitialAvailableTimes,
    availableTimesReducer,
} from "./BookingPage";

describe("Booking page", () => {

    test("createInitialAvailableTimes", () => {
        const initialTimes = createInitialAvailableTimes([]);
        expect(initialTimes).toBeDefined();
        expect(initialTimes.length).toBeGreaterThan(0);
    });

    test("availableTimesReducer", () => {
        const initialTimes = createInitialAvailableTimes([]);
        const reduced = availableTimesReducer(initialTimes, {
            type: "onDateChange",
            date: "2024-11-23",
        });
        expect(reduced).toBeDefined();
        expect(reduced.length).toBeGreaterThan(0);
    });
});
