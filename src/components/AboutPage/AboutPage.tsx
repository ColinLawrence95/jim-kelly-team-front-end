import "./AboutPage.css";
function AboutPage() {
    return (
        <div className="about-page-container">
            <div
                className="about-header-back"
                style={{ backgroundImage: `url(/house2.png)` }}
            >
                <div className="about-header">
                    <h1 id="about-title">The Jim Kelly Team</h1>
                    <h2>From Our Family to Yours</h2>
                </div>
            </div>
            <div className="about-team-image-and-desc">
                <h1 id="about-team-title">About The Team</h1>
                <div
                    className="about-team-image"
                    style={{ backgroundImage: `url(/about-team-image.JPG)` }}
                ></div>

                <p id="about-team-desc">
                    The Jim Kelly Team is more than just a group of real estate
                    professionals — we’re family. That’s why treating our
                    clients like family is at the heart of everything we do.
                    With over 45 years of combined experience, we bring a deep
                    understanding of the real estate market and a commitment to
                    guiding you with care, integrity, and results. We specialize
                    in buying and selling homes and condos across Durham Region
                    and the Greater Toronto Area, and we stay ahead of market
                    trends to help you make informed, strategic decisions. Our
                    extensive knowledge allows us to position you for success —
                    whether you're making a personal move or a financial
                    investment. <br></br>
                    <br></br>We know that buying or selling a home is one of the
                    biggest decisions you’ll ever make. That’s why we take the
                    time to truly get to know you and your goals, offering
                    personalized, full-service support every step of the way.
                    From the first meeting to the final signature — and well
                    beyond — we’re with you, making sure the process is smooth,
                    rewarding, and aligned with your future plans. Backed by
                    decades of experience and a shared passion for helping
                    people, The Jim Kelly Team is proud to be the trusted name
                    families turn to. When you work with us, you’re not just a
                    client — you’re treated like one of our own.
                </p>
            </div>
            <div className="about-container">
                <div className="about-image-name-container">
                    <h1>Jim Kelly</h1>
                    <div
                        className="about-jim-image"
                        style={{ backgroundImage: `url(/about-jim.JPG)` }}
                    ></div>
                </div>
                <p className="about-desc">
                    With over 35 years of real estate experience — and a
                    background as a professional engineer — Jim Kelly brings
                    unmatched knowledge, precision, and strategy to every
                    transaction. As the founder and leader of The Jim Kelly
                    Team, Jim built the group with one mission in mind: to share
                    his proven success and empower others to thrive under his
                    guidance. Known as a sharp negotiator and a true expert in
                    the market, Jim is deeply committed to helping his clients
                    secure the best possible outcome for their goals. His calm,
                    confident approach — even in the most high-stakes deals —
                    comes from decades of experience navigating complex
                    transactions with clarity and care. Detail-oriented and
                    laser-focused, Jim doesn't settle for less than excellence.
                    Originally from the small town of Dundee, Scotland, Jim
                    immigrated to Canada to build a great life for his wife and
                    children — a decision rooted in the same values he brings to
                    his work every day: dedication, resilience, and a relentless
                    work ethic. His personal motto says it all: "The words I
                    can't are not in my vocabulary.”
                </p>
            </div>
            <div className="about-container">
                <div className="about-image-name-container">
                    <h1>Connor O'Prey</h1>
                    <div
                        className="about-connor-image"
                        style={{ backgroundImage: `url(/about-connor.JPG)` }}
                    ></div>
                </div>
                <p className="about-desc">
                    With nearly five years of experience in real estate, Connor
                    O’Prey has developed a reputation for dedication,
                    professionalism, and exceptional client care. From his very
                    first day working under the mentorship of Jim Kelly, Connor
                    committed himself to providing clear communication and
                    personalized support, ensuring his clients fully understand
                    every step of the buying or selling process. Connor’s
                    background as an electrician gives him a unique insight into
                    the technical aspects of homes, enriching his real estate
                    expertise. His thorough knowledge, combined with a strong
                    work ethic, allows him to confidently navigate even the most
                    complex transactions. Always responsive and attentive,
                    Connor prioritizes client satisfaction by promptly
                    addressing questions and going the extra mile to exceed
                    expectations. Passionate about real estate and constantly
                    studying market trends, Connor brings both enthusiasm and
                    strategic insight to every deal. His clients trust him
                    implicitly — and for good reason. There is no challenge he
                    cannot meet, making him an invaluable member of The Jim
                    Kelly Team.
                </p>
            </div>
            <div className="about-container">
                <div className="about-image-name-container">
                    <h1>Sydney O'Prey</h1>
                    <div
                        className="about-syd-image"
                        style={{ backgroundImage: `url(/about-syd.JPG)` }}
                    ></div>
                </div>
                <p className="about-desc">
                    Sydney O’Prey is the newest member of The Jim Kelly Team,
                    bringing fresh energy and a strong foundation in real estate
                    cultivated from an early age. Growing up, Sydney observed
                    her grandfather, Jim Kelly — the team leader — and witnessed
                    his passion for the industry firsthand. She attended open
                    houses with him and learned the importance of dedication and
                    client care early on. Inspired by this experience, Sydney
                    decided to bring her own talents and passion to the
                    business. A graduate of York University, Sydney combines her
                    academic knowledge with a natural ability to listen
                    attentively and understand her clients’ unique needs. She
                    approaches every transaction with professionalism, empathy,
                    and a determined drive to succeed. Prior to real estate,
                    Sydney spent eight years as a music educator, where her
                    patience, kindness, and commitment to her students laid the
                    groundwork for her client-centered approach in real estate.
                    She believes that while real estate is about buying and
                    selling homes, it’s even more about building relationships
                    based on trust, communication, and mutual commitment.
                    Sydney’s dedication and genuine care make her a valuable
                    asset to clients looking for personalized, thoughtful
                    guidance throughout their real estate journey.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
