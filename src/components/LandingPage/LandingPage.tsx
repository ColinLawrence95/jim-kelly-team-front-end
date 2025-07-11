import Hero from "../Hero/Hero";
import OurStory from "../OurStory/OurStory";
import Testimonials from "../Testimonials/Testimonials";
import FeaturedListings from "../FeaturedListings/FeaturedListings";
import { motion } from "framer-motion";
import "./LandingPage.css"

const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
};

function LandingPage() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <motion.div
            className="landing-page-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Hero />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <OurStory />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Testimonials />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3}}
                viewport={{ once: true, amount: 0.2 }}
            >
                <FeaturedListings />
            </motion.div>
        </motion.div>
    );
}

export default LandingPage;
