import * as Yup from "yup"
import { useFormik } from "formik"

import Button from "../Button/Button"
import Section from "../Layout/Section/Section"
import FormError from "../Form/FormError"
import FormItem from "../Form/FormItem"

import "../Form/Form.css"

function BookingForm({availableTimes, onDateChange, onFormSubmit, isLoading}) {

    const date = new Date();
    date.setDate(date.getDate() - 1);

    const schema = Yup.object({
        date: Yup.date().min(date, "Please choose a date in the future").required("Please select a date"),
        time: Yup.string().required("Please select a time"),
        guests: Yup.number().required("Please enter the number of guests").min(1, 'Enter min one guest').max(10, 'Max 10 guests are allowed'),
        occasion: Yup.string().optional(),
    })

    const { getFieldProps, handleSubmit, errors, values } = useFormik({
        initialValues: {
            date: "",
            time: "17:00",
            guests: "",
            occasion: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {

            if (typeof onFormSubmit === 'function') {
                onFormSubmit(values);
            }
        },
    })

    const { onChange } = getFieldProps('date');
    const onDateChangeHandler = (event) => {
        if (typeof onDateChange === 'function') {
            onChange(event)
            onDateChange({
                type: 'onDateChnage',
                date: values.date
            });
        }
    }

    return (
        <Section>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="m-b-3">Reserve a Table</h2>
                <FormItem hasError={errors.date}>
                    <label htmlFor="res-date">Choose date *</label>
                    <input {...getFieldProps('date')} id="res-date" type="date" aria-describedby={(errors.date) ? 'res-date-error' : null} onChange={onDateChangeHandler}/>
                    { errors.date && <FormError id="res-date-error">{errors.date}</FormError> }
                </FormItem>
                <FormItem hasError={errors.time}>
                    <label htmlFor="res-time">Choose time *</label>
                    <select {...getFieldProps('time')} id="res-time" aria-describedby={(errors.time) ? 'res-time-error' : null}>
                        {availableTimes.map((time) => <option key={time}>{time}</option>)}
                    </select>
                    { errors.time && <FormError id="res-time-error">{errors.time}</FormError> }
                </FormItem>
                <FormItem hasError={errors.guests}>
                    <label htmlFor="guests">Number of guests *</label>
                    <input
                        {...getFieldProps('guests')}
                        id="guests"
                        type="number"
                        placeholder="1 to 10 guests"
                        aria-describedby={(errors.date) ? 'res-guests-error' : null}
                    />
                    { errors.guests && <FormError id="res-guests-error">{errors.guests}</FormError> }
                </FormItem>
                <FormItem hasError={errors.occasion}>
                    <label htmlFor="occasion">Occasion</label>
                    <select {...getFieldProps('occasion')} id="occasion" aria-describedby={(errors.occasion) ? 'res-occasion-error' : null}>
                        <option value="">Select a occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    { errors.occasion && <FormError id="res-occasion-error">{errors.occasion}</FormError> }
                </FormItem>
                <div className="form__action">
                    <Button type="submit" disabled={isLoading}>Make Your reservation</Button>
                </div>
            </form>
        </Section>
    )
}

export default BookingForm
