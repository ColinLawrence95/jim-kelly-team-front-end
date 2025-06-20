import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListingsPage from "./components/ListingsPage/ListingsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div className="app-container">
            <NavBar />
            <main className="app-content">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/listings" element={<ListingsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
