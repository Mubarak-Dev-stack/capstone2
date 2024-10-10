import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BookingPage from "./components/pages/BookingPage";
import Homepage from "./components/pages/Homepage";

import "./App.css";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/bookings" element={<BookingPage />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
