import "./AboutPage.css";
import { motion } from "framer-motion";
import GuideBanner from "../GuideBanner/GuideBanner";

const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
};

function AboutPage() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="about-page-container"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <GuideBanner />

                {/* Static image and paragraph */}
                <div className="about-team-image-and-desc">
                    <div
                        className="about-team-image"
                        style={{ backgroundImage: `url(/about-team-image.JPG)` }}
                    ></div>

                    <p id="about-team-desc">
                        {" "}
                        The Jim Kelly Team is more than just a group of real estate professionals.
                        We’re family, and that’s exactly how we treat our clients. With over 45
                        years of combined experience, we bring deep market knowledge and a
                        commitment to personalized, full-service support. We specialize in buying
                        and selling homes and condos across Durham Region and the Greater Toronto
                        Area, staying ahead of trends to help you make smart, strategic decisions.
                        Whether you’re making a personal move or a financial investment, we’re here
                        to guide you with care, integrity, and results from start to finish.
                    </p>
                </div>

                <motion.div
                    className="about-container"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8,delay: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="about-element-container">
                        <div className="about-image-name-container">
                            <h1 id="about-person-name">Jim Kelly</h1>
                            <div
                                className="about-jim-image"
                                style={{ backgroundImage: `url(/about-jim.JPG)` }}
                            ></div>
                        </div>

                        <div className="about-desc">
                            <p>
                                With more than 35 years of real estate experience and a background
                                as a professional engineer, Jim Kelly brings unmatched knowledge,
                                precision, and strategy to every transaction. As the founder and
                                leader of the team, he built the business with one mission in mind:
                                to share his proven success and help others thrive. Jim is known for
                                his sharp negotiation skills and calm, confident approach, even in
                                the most complex deals. Originally from Dundee, Scotland, Jim came
                                to Canada to build a better life for his family. His work is driven
                                by the same values he lives by every day: dedication, resilience,
                                and a tireless work ethic”
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-container"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8,delay: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="about-element-container">
                        <div className="about-image-name-container">
                            <h1 id="about-person-name">Connor O'Prey</h1>
                            <div
                                className="about-connor-image"
                                style={{ backgroundImage: `url(/about-connor.JPG)` }}
                            ></div>
                        </div>

                        <div className="about-desc">
                            <p>
                                Connor O’Prey brings nearly five years of real estate experience and
                                a strong reputation for professionalism, clear communication, and
                                exceptional client care. Since day one under Jim’s mentorship,
                                Connor has committed himself to guiding clients through every step
                                of the buying or selling process with confidence. His background as
                                an electrician gives him unique insight into the technical aspects
                                of homes, and his deep understanding of the market allows him to
                                handle even the most complex deals with ease. Clients appreciate his
                                responsiveness, attention to detail, and the extra effort he puts in
                                to make their experience a positive one.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-container"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5}}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="about-element-container">
                        <div className="about-image-name-container">
                            <h1 id="about-person-name">Sydney O'Prey</h1>
                            <div
                                className="about-syd-image"
                                style={{ backgroundImage: `url(/about-syd.JPG)` }}
                            ></div>
                        </div>
                        <div className="about-desc">
                            <p>
                                Sydney O’Prey is the newest member of The Jim Kelly Team, bringing a
                                fresh perspective and a lifelong connection to real estate. As the
                                granddaughter of Jim Kelly, she grew up learning the value of hard
                                work and client care by watching him in action. A graduate of York
                                University, Sydney combines academic knowledge with strong listening
                                skills and a sincere passion for helping others. Before real estate,
                                she spent eight years as a music educator, where she developed
                                patience, empathy, and a people-first approach that now defines her
                                work with clients. Sydney is dedicated to building lasting
                                relationships and helping clients feel supported every step of the
                                way.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default AboutPage;
