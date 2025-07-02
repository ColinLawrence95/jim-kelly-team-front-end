import "./Hero.css";
function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-title-container">
                <div className="hero-title-and-button">
                    <h2>The Jim Kelly Team</h2>

                    <p id="hero-tagline">From Our Family to Yours</p>
                </div>
            </div>
            <div
                className="hero-team-image"
                style={{ backgroundImage: `url(/test.png)` }}
            ></div>
        </div>
    );
}

export default Hero;
