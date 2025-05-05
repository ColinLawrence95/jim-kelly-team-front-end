import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import CurrentListings from "./components/CurrentListings/CurrentListings";
import OurStory from "./components/OurStory/OurStory";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <CurrentListings />
            <OurStory />
            <Testimonials />
            <Footer />
        </>
    );
}

export default App;
