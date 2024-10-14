import * as Yup from "yup";
import { useFormik } from "formik";
import { format } from "date-fns";

import Button from "../Button/Button";
import Section from "../Layout/Section/Section";
import FormError from "../Form/FormError";
import FormItem from "../Form/FormItem";

import "../Form/Form.css";

function BookingForm({
    availableTimes = [],
    onDateChange,
    onFormSubmit,
    isLoading = false,
}) {
    const today = new Date();
    const date = new Date();
    date.setDate(date.getDate() - 1);

    const schema = Yup.object({
        date: Yup.date()
            .typeError("Please enter a valid date")
            .min(date, "Please choose a date in the future")
            .required("Please select a date"),
        time: Yup.string().required("Please select a time"),
        guests: Yup.number()
            .required("Please enter the number of guests")
            .min(1, "Enter min one guest")
            .max(10, "Max 10 guests are allowed"),
        occasion: Yup.string().required("Please select an occasion"),
    });

    const {
        getFieldProps,
        handleSubmit,
        errors,
        touched,
        handleChange
    } = useFormik({
        initialValues: {
            date: format(today, "yyyy-MM-dd"),
            time: availableTimes?.length ? availableTimes[0] : "",
            guests: "1",
            occasion: "Anniversary",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (typeof onFormSubmit === "function") {
                onFormSubmit(values);
            }
        },
    });

    const onDateChangeHandler = (event) => {
        event.preventDefault();

        handleChange(event);

        if (typeof onDateChange === "function") {
            onDateChange({
                type: "onDateChange",
                date: event.target.value,
            });
        }
    };

    return (
        <Section>
            <form className="form" onSubmit={handleSubmit} noValidate>
                <h2 className="m-b-3">Reserve a Table</h2>
                <FormItem hasError={touched.date && errors.date}>
                    <label htmlFor="res-date">Choose date *</label>
                    <input
                        id="res-date"
                        type="date"
                        min={format(today, "yyyy-MM-dd")}
                        aria-describedby={
                            touched.date && errors.date
                            ? "res-date-error"
                            : null
                        }
                        required
                        {...getFieldProps("date")}
                        onChange={onDateChangeHandler}
                    />
                    {touched.date && errors.date && (
                        <FormError id="res-date-error">{errors.date}</FormError>
                    )}
                </FormItem>
                <FormItem hasError={touched.time && errors.time}>
                    <label htmlFor="res-time">Choose time *</label>
                    <select
                        id="res-time"
                        aria-describedby={
                            touched.time && errors.time
                                ? "res-time-error"
                                : null
                        }
                        required
                        {...getFieldProps("time")}
                    >
                        {availableTimes.map((time) => (
                            <option key={time} data-testid="res-time-option">
                                {time}
                            </option>
                        ))}
                    </select>
                    {touched.time && errors.time && (
                        <FormError id="res-time-error">{errors.time}</FormError>
                    )}
                </FormItem>
                <FormItem hasError={touched.guests && errors.guests}>
                    <label htmlFor="guests">Number of guests *</label>
                    <input
                        {...getFieldProps("guests")}
                        id="guests"
                        type="number"
                        placeholder="1 to 10 guests"
                        min={1}
                        max={10}
                        aria-describedby={
                            touched.guests && errors.guests
                                ? "res-guests-error"
                                : null
                        }
                        required
                    />
                    {touched.guests && errors.guests && (
                        <FormError id="res-guests-error">
                            {errors.guests}
                        </FormError>
                    )}
                </FormItem>
                <FormItem hasError={touched.occasion && errors.occasion}>
                    <label htmlFor="occasion">Occasion *</label>
                    <select
                        {...getFieldProps("occasion")}
                        id="occasion"
                        aria-describedby={
                            touched.occasion && errors.occasion
                                ? "res-occasion-error"
                                : null
                        }
                        required
                    >
                        <option value="Anniversary">Anniversary</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Date">Date</option>
                    </select>
                    {touched.occasion && errors.occasion && (
                        <FormError id="res-occasion-error">
                            {errors.occasion}
                        </FormError>
                    )}
                </FormItem>
                <div className="form__action">
                    <Button type="submit" disabled={isLoading}>
                        Make Your reservation
                    </Button>
                </div>
            </form>
        </Section>
    );
}

export default BookingForm;
