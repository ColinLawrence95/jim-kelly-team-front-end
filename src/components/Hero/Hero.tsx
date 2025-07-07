import "./Hero.css";
import { motion } from "framer-motion";
function Hero() {
    return (
        <div
            className="hero-page-container"
            style={{ backgroundImage: `url(/house2.png)` }}
        >
            <div className="hero-container">
                <div className="hero-title-container">
                    <motion.div
                        className="hero-title-and-button"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0}}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <h2 id="hero-title">The Jim Kelly Team</h2>

                        <p id="hero-tagline">From Our Family to Yours</p>
                    </motion.div>
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
