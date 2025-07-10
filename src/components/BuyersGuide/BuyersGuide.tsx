import "./BuyersGuide.css";
import GuideBanner from "../GuideBanner/GuideBanner";
import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
};

export default function BuyersGuide() {
    return (
        <motion.div
        className="buyers-container"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="buyers-page-container"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <GuideBanner />
                <article id="buyersguide-article">
                    <h1 className="buyersguide-title">The Ultimate Home Buyer’s Guide</h1>
                    <p className="buyersguide-paragraph">
                        Buying a home is a major milestone, whether you're looking for a downtown
                        condo, a family-friendly suburban house, or a rural retreat. This guide
                        walks you through the key steps, offers insider tips, and outlines the
                        professionals you'll need to help make your purchase smooth, informed, and
                        rewarding.
                    </p>

                    <h2 className="buyersguide-subtitle">Why You Need a Plan</h2>
                    <p className="buyersguide-paragraph">
                        A clear strategy helps you find the right home at the right price,
                        especially in competitive or fast-changing markets. From setting your budget
                        to understanding local inventory, planning ahead will save time, reduce
                        stress, and give you an edge.
                    </p>

                    <h2 className="buyersguide-subtitle">Step-by-Step Guide to Buying Your Home</h2>

                    <h3 className="buyersguide-step-title">Step 1: Define Your Needs and Budget</h3>
                    <p className="buyersguide-paragraph">
                        Start with a list of your priorities. What are your non-negotiables? What
                        are nice-to-haves? Then, get pre-approved for a mortgage to understand your
                        actual price range.
                    </p>
                    <ul className="buyersguide-list">
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Tip:</strong> Consider commute
                            times, nearby amenities, and future lifestyle changes (like growing your
                            family or working remotely).
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Action:</strong> Create a
                            checklist of features (e.g., 3 bedrooms, office space, backyard) and
                            meet with a mortgage advisor to outline your financial limits.
                        </li>
                    </ul>

                    <h3 className="buyersguide-step-title">Step 2: Choose a Realtor</h3>
                    <p className="buyersguide-paragraph">
                        Partner with a real estate agent who knows your target areas and can
                        navigate local market trends.
                    </p>
                    <ul className="buyersguide-list">
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Why It Matters:</strong> A
                            knowledgeable agent will spot red flags, uncover hidden gems, and help
                            with pricing and negotiations.
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Tip:</strong> Ask for referrals
                            or testimonials and choose someone who understands your priorities.
                        </li>
                    </ul>

                    <h3 className="buyersguide-step-title">
                        Step 3: Get Pre-Approved for a Mortgage
                    </h3>
                    <p className="buyersguide-paragraph">
                        Before you start touring homes, get a mortgage pre-approval to confirm your
                        budget and show sellers you're serious.
                    </p>
                    <ul className="buyersguide-list">
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Why It Matters:</strong>{" "}
                            Pre-approval strengthens your offer and helps you act quickly when the
                            right home appears.
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Tip:</strong> Compare rates from
                            different lenders or work with a mortgage broker who can shop around on
                            your behalf.
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Action:</strong> Gather documents
                            like income statements, credit reports, and employment verification.
                        </li>
                    </ul>

                    <h3 className="buyersguide-step-title">Step 4: Explore the Market</h3>
                    <p className="buyersguide-paragraph">
                        Tour homes, refine your preferences, and learn how your budget aligns with
                        real options.
                    </p>
                    <ul className="buyersguide-list">
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Tip:</strong> Browse online
                            listings, attend open houses, and keep notes to compare.
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Action:</strong> Make a shortlist
                            and rank properties based on fit and value.
                        </li>
                    </ul>

                    <h3 className="buyersguide-step-title">Step 5: Make an Offer</h3>
                    <p className="buyersguide-paragraph">
                        When you find the right home, your realtor will help you make a competitive
                        offer.
                    </p>
                    <ul className="buyersguide-list">
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Key Considerations:</strong>{" "}
                            Understand comparable sales, include conditions (like financing or
                            inspection), and stay within your limits.
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Tip:</strong> Be ready to act
                            fast in hot markets, but don’t let emotion override your budget.
                        </li>
                    </ul>

                    <h3 className="buyersguide-step-title">Step 6: Do Your Due Diligence</h3>
                    <p className="buyersguide-paragraph">
                        After acceptance, it’s time to verify everything.
                    </p>
                    <ul className="buyersguide-list">
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Home Inspection:</strong> Hire a
                            qualified inspector to check for issues.
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Research:</strong> Learn about
                            local zoning, bylaws, and any upcoming developments.
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Tip:</strong> Visit the
                            neighborhood at different times of day to get a true feel.
                        </li>
                    </ul>

                    <h3 className="buyersguide-step-title">Step 7: Secure Your Mortgage</h3>
                    <p className="buyersguide-paragraph">
                        Finalize your financing based on the purchase details.
                    </p>
                    <ul className="buyersguide-list">
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">What You’ll Need:</strong> Proof
                            of income, credit score, ID, and down payment.
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Tip:</strong> Lock in your
                            interest rate and review all terms carefully.
                        </li>
                    </ul>

                    <h3 className="buyersguide-step-title">Step 8: Hire a Real Estate Lawyer</h3>
                    <p className="buyersguide-paragraph">
                        Your lawyer ensures the legal process goes smoothly, from title searches to
                        registering ownership.
                    </p>
                    <ul className="buyersguide-list">
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Cost:</strong> Expect legal fees,
                            land transfer tax, and other closing costs.
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Tip:</strong> Choose someone
                            experienced in residential transactions.
                        </li>
                    </ul>

                    <h3 className="buyersguide-step-title">Step 9: Close the Deal</h3>
                    <p className="buyersguide-paragraph">
                        Sign final documents, transfer funds, and take possession of your new home.
                    </p>
                    <ul className="buyersguide-list">
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Final Costs:</strong> Legal fees,
                            insurance, property tax adjustments, and utilities.
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Tip:</strong> Schedule utilities
                            and moving services in advance to ensure a smooth transition.
                        </li>
                    </ul>

                    <h2 className="buyersguide-subtitle">Key Professionals to Involve</h2>
                    <ul className="buyersguide-list">
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Real Estate Agent:</strong> Local
                            expert and negotiation partner
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Mortgage Broker/Lender:</strong>{" "}
                            Helps secure the best mortgage for your situation
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Home Inspector:</strong>{" "}
                            Identifies structural or safety issues
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Real Estate Lawyer:</strong>{" "}
                            Manages the legal side of your purchase
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Appraiser:</strong> Confirms
                            market value for your lender
                        </li>
                        <li className="buyersguide-list-item">
                            <strong className="buyersguide-strong">Insurance Agent:</strong>{" "}
                            Arranges required home insurance before closing
                        </li>
                    </ul>
                </article>
            </motion.div>
        </motion.div>
    );
}
