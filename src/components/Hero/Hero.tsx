import "./Hero.css";
function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-title-and-button">
                <h2>The Jim Kelly Team</h2>
                <button>Contact Us</button>
            </div>
            <div
                className="hero-team-image"
                style={{ backgroundImage: `url(/team-photo.JPG)` }}
            ></div>
        </div>
    );
}

export default Hero;
