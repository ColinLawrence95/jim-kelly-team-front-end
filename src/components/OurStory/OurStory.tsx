import { motion } from "framer-motion";
import "./OurStory.css";
import { Link } from "react-router-dom";

function OurStory() {
  return (
    <div className="our-story-container">
      <h3 id="our-story-title">Our Story</h3>
      <div className="our-story-title-and-text">
        <p className="our-story-paragraph">
          "The Jim Kelly Team is built on trust, consistency, and the kind of care that keeps the
          process clear and personal from start to finish. With more than 45 years of combined
          experience, we guide each step with calm, attention to detail, and a steady focus on
          helping our clients feel informed, supported, and confident. We help people buy and sell
          homes and condos across Durham Region and the Greater Toronto Area, always with an eye on
          the market and a commitment to making every decision feel simple, thoughtful, and
          manageable."
        </p>
        <Link to="/about">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="our-story-button"
          >
            READ MORE
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default OurStory;
