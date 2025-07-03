import "./Hero.css";
function Hero() {
    return (
        <div className="hero-page-container" style={{ backgroundImage: `url(/house2.png)` }}>
            <div className="hero-container" >
                <div className="hero-title-container">
                    <div className="hero-title-and-button">
                        <h2 id="hero-title">The Jim Kelly Team</h2>

                        <p id="hero-tagline">From Our Family to Yours</p>
                    </div>
                </div>
                <div
                    className="hero-team-image"
                    style={{ backgroundImage: `url(/test.png)` }}
                ></div>
            </div>
        </div>
    );
}

export default Hero;
