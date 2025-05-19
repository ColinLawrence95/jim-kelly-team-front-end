import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element = {<LandingPage/>}/>
               
                
            </Routes>
            <Footer />
        </>
    );
}

export default App;
