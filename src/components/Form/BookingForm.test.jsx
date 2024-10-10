import { render, screen } from '@testing-library/react';
import BookingForm from './Bookingform'

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a Table")
    expect(headingElement).toBeInTheDocument()
})
