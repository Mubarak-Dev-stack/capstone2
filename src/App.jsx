import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BookingPage from "./components/pages/BookingPage";
import BookingConfirmationPage from "./components/pages/BookingConfirmationPage";
import Homepage from "./components/pages/Homepage";
import TBD from "./components/pages/TBD";

import "./App.css";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/bookings" element={<BookingPage />} />
                    <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
                    <Route path="/about" element={<TBD />} />
                    <Route path="/menu" element={<TBD />} />
                    <Route path="/order-online" element={<TBD />} />
                    <Route path="/login" element={<TBD />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
