import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-logo">
                <div className="logo-img" />
                <h1>RE/MAX Hallmark First Group Realty Ltd.</h1>
                <h2>
                  314 Harwood Ave S Unit 200, Ajax, ON L1S
                    2J1 
                </h2>
                <h3>905-683-5000</h3>
            </div>

            <div className="footer-link-wrap">
                <div className="footer-socials">
                    <a
                        href="https://www.facebook.com/opreyrealestate"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <FaSquareFacebook />
                    </a>
                    <a
                        href="https://www.instagram.com/thejimkellyteam"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                </div>
                <p className="footer-copy">© {new Date().getFullYear()} The Jim Kelly Team.</p>
                <p className="footer-credit">
                    Built by{" "}
                    <a
                        href="https://codebycolin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="designer-link"
                    >
                        <strong>CodeByColin</strong>
                        <img
                            src="/Profile.png"
                            alt="Profile of Colin Lawrence"
                            className="profile-pic"
                            width={30}
                            height={30}
                        />
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
