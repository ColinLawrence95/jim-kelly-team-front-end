import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListingsPage from "./components/ListingsPage/ListingsPage";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/listings" element={<ListingsPage />} />

            </Routes>
            <Footer />
        </>
    );
}

export default App;
