import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  return (
    <motion.footer
      className="site-footer"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.2, delayChildren: 1.5 } },
      }}
    >
      <motion.div
        className="footer-column footer-left"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <div className="logo-img" />
        <h1>RE/MAX Hallmark First Group Realty Ltd.</h1>
        <h2>314 Harwood Ave S Unit 200, Ajax, ON L1S 2J1</h2>
        <h3>905-683-5000</h3>
      </motion.div>

      <motion.div
        className="footer-column footer-center"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
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
        <h3 className="footer-email">contact@thejimkellyteam.com</h3>
        <p className="footer-copy">© {new Date().getFullYear()} The Jim Kelly Team.</p>
      </motion.div>

      <motion.div
        className="footer-column footer-right"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <a
          href="https://codebycolin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-signature-link"
          aria-label="Built by CodeByColin"
        >
          <span
            className="footer-signature-logo"
            style={{ backgroundImage: "url(/lnr.png)" }}
            aria-hidden="true"
          />
        </a>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
