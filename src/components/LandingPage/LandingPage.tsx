import Hero from "../Hero/Hero";
import OurStory from "../OurStory/OurStory";
import Testimonials from "../Testimonials/Testimonials";
import FeaturedListings from "../FeaturedListings/FeaturedListings";
import { motion } from "framer-motion";

function LandingPage() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Hero />
            </motion.div>
            <OurStory />
            <Testimonials />
            <FeaturedListings />
        </>
    );
}

export default LandingPage;
