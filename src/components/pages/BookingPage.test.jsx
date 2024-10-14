import {
    createInitialAvailableTimes,
    availableTimesReducer,
} from "./BookingPage";

test("createInitialAvailableTimes and availableTimesReducer", () => {
    const initialTimes = createInitialAvailableTimes([]);
    expect(initialTimes).toBeDefined();
    expect(initialTimes.length).toBeGreaterThan(0);

    const reduced = availableTimesReducer(initialTimes, {
        type: "onDateChange",
        date: new Date(),
    });
    expect(reduced).toBeDefined();
    expect(reduced.length).toBeGreaterThan(0);
});
