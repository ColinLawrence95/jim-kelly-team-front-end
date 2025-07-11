import { motion } from "framer-motion";
import "./SellersGuide.css";
import GuideBanner from "../GuideBanner/GuideBanner";
import Accordion from "../Accordian/Accordian";

const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
};

export default function SellersGuide() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="sellers-page-container"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <GuideBanner />
                <article id="sellersguide-article">
                    <h1 className="sellersguide-title">The Ultimate Home Seller’s Guide</h1>
                    <p className="sellersguide-paragraph">
                        Selling your home is a big decision—one that involves careful planning,
                        smart marketing, and expert support. Whether you're upsizing, downsizing, or
                        relocating, this guide walks you through each step to help you sell with
                        confidence and maximize your return.
                    </p>

                    <h2 className="sellersguide-subtitle">Why Preparation Matters</h2>
                    <p className="sellersguide-paragraph">
                        A successful home sale starts long before the "For Sale" sign goes up. From
                        pricing to presentation, a clear strategy helps you stand out in the market,
                        attract serious buyers, and close with fewer surprises.
                    </p>

                    <h2 className="sellersguide-subtitle">Step-by-Step Guide to Selling Your Home</h2>

                    <Accordion title="Step 1: Define Your Goals">
                        <p className="sellersguide-paragraph">
                            Why are you selling? Do you need to sell quickly, or is getting top dollar
                            your priority?
                        </p>
                        <ul className="sellersguide-list">
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Tip:</strong> Clarify your
                                timeline and financial needs. Are you buying another home right away, or
                                waiting?
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Action:</strong> Calculate your
                                ideal sale price and minimum acceptable offer.
                            </li>
                        </ul>
                    </Accordion>

                    <Accordion title="Step 2: Choose a Realtor">
                        <p className="sellersguide-paragraph">
                            An experienced real estate agent will guide you through pricing, marketing,
                            showings, and negotiations.
                        </p>
                        <ul className="sellersguide-list">
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Why It Matters:</strong> The
                                right agent will understand your market, set the right price, and
                                position your home for a faster, more profitable sale.
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Tip:</strong> Ask for a listing
                                presentation, review recent sales in your area, and check client
                                reviews.
                            </li>
                        </ul>
                    </Accordion>

                    <Accordion title="Step 3: Price It Right">
                        <p className="sellersguide-paragraph">
                            Setting the right price is key to attracting interest and avoiding
                            stagnation.
                        </p>
                        <ul className="sellersguide-list">
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Strategy:</strong> Use
                                comparable sales, current listings, and market trends.
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Tip:</strong> Avoid pricing too
                                high—it can turn buyers away.
                            </li>
                        </ul>
                    </Accordion>

                    <Accordion title="Step 4: Prepare Your Home">
                        <p className="sellersguide-paragraph">
                            First impressions count. Clean, declutter, and make minor repairs before
                            listing.
                        </p>
                        <ul className="sellersguide-list">
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Checklist:</strong> Fresh paint,
                                clean windows, fix leaky faucets, and tidy landscaping.
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Pro Tip:</strong> Consider
                                professional staging or virtual staging.
                            </li>
                        </ul>
                    </Accordion>

                    <Accordion title="Step 5: Market the Property">
                        <p className="sellersguide-paragraph">
                            Your agent will promote your home using online listings, social media,
                            signage, open houses, and more.
                        </p>
                        <ul className="sellersguide-list">
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Key Tools:</strong> High-quality
                                photos, video tours, and a compelling description.
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Tip:</strong> Be flexible with
                                showing times.
                            </li>
                        </ul>
                    </Accordion>

                    <Accordion title="Step 6: Review Offers">
                        <p className="sellersguide-paragraph">
                            Once you receive offers, your agent will help you evaluate each one based on
                            price, conditions, and buyer qualifications.
                        </p>
                        <ul className="sellersguide-list">
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Considerations:</strong> Closing
                                date, contingencies, and deposit size.
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Tip:</strong> Don’t focus only
                                on price—terms matter too.
                            </li>
                        </ul>
                    </Accordion>

                    <Accordion title="Step 7: Negotiate and Accept">
                        <p className="sellersguide-paragraph">
                            Work with your agent to negotiate the best terms for your needs.
                        </p>
                        <ul className="sellersguide-list">
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Goal:</strong> Strike a balance
                                between price, timing, and conditions.
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Tip:</strong> Stay
                                responsive—delays can cause buyers to move on.
                            </li>
                        </ul>
                    </Accordion>

                    <Accordion title="Step 8: Finalize the Sale">
                        <p className="sellersguide-paragraph">
                            After accepting an offer, you’ll work with a lawyer to complete legal
                            paperwork and prepare for closing.
                        </p>
                        <ul className="sellersguide-list">
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">What to Expect:</strong> Home
                                inspection, appraisal, final walk-through.
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Tip:</strong> Keep the home
                                clean and in the agreed condition.
                            </li>
                        </ul>
                    </Accordion>

                    <h2 className="sellersguide-subtitle">Key Professionals to Involve</h2>
                    <Accordion title="Who You'll Work With">
                        <ul className="sellersguide-list">
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Real Estate Agent:</strong>
                                Markets the home and negotiates on your behalf
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Real Estate Lawyer:</strong>
                                Handles contracts, title transfers, and closing
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Home Stager:</strong> Prepares
                                your home for buyer appeal (optional)
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Photographer/Videographer:</strong>
                                Provides professional visuals for listings
                            </li>
                            <li className="sellersguide-list-item">
                                <strong className="sellersguide-strong">Cleaner and Handyperson:</strong>
                                Helps with pre-listing touch-ups
                            </li>
                        </ul>
                    </Accordion>
                </article>
            </motion.div>
        </motion.div>
    );
}