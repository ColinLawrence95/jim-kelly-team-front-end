import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ListingsPage from "./components/ListingsPage/ListingsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import BuyersGuide from "./components/BuyersGuide/BuyersGuide";
import SellersGuide from "./components/SellersGuide/SellersGuide";

import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
    const location = useLocation();

    return (
        <div className="app-container">
            <NavBar />
            <main className="app-content">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/listings" element={<ListingsPage />} />
                        <Route path="/Buyers" element={<BuyersGuide />} />
                        <Route path="/Sellers" element={<SellersGuide />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
