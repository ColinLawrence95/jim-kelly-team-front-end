import "./Hero.css";
import { Link } from "react-router-dom";
function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-title-container">
                <div className="hero-title-and-button">
                    <h2>The Jim Kelly Team</h2>
                    <Link to="/contact">
                        <button>Contact Us</button>
                    </Link>
                </div>
            </div>
            <div
                className="hero-team-image"
                style={{ backgroundImage: `url(/team-photo.JPG)` }}
            ></div>
        </div>
    );
}

export default Hero;
