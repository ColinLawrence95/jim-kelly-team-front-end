import ContactForm from "../ContactForm/ContactForm";
import GuideBanner from "../GuideBanner/GuideBanner";
import "./ContactPage.css";
import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
};

function ContactPage() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="contact-page-container"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                    <GuideBanner photoUrl="/contact-team-image.png" />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <ContactForm />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default ContactPage;
