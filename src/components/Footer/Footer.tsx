import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaSquareFacebook } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-copy">
        © {new Date().getFullYear()} The Jim Kelly Team.
      </p>
      
      <div className="footer-socials">
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaSquareFacebook />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.x.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaXTwitter />
        </a>
      </div>
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
    </footer>
  );
}

export default Footer;
