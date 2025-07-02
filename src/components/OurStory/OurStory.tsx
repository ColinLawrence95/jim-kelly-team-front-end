import "./OurStory.css";
import { Link } from "react-router-dom";

function OurStory() {
    return (
        <div className="our-story-container">
            <h3 id="our-story-title">Our Story</h3>
            <div className="our-story-title-and-text">
                <p>
                    The Jim Kelly Team is more than just a group of real estate
                    professionals — we’re family. That’s why treating our
                    clients like family is at the heart of everything we do.
                    With over 45 years of combined experience, we bring a deep
                    understanding of the real estate market and a commitment to
                    guiding you with care, integrity, and results. We specialize
                    in buying and selling homes and condos across Durham Region
                    and the Greater Toronto Area, and we stay ahead of market
                    trends to help you make informed, strategic decisions.
                </p>
                <Link to="/about">
                    <button>Read More</button>
                </Link>
            </div>
        </div>
    );
}

export default OurStory;
