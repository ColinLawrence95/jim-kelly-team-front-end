import ContactForm from "../ContactForm/ContactForm";
import "./ContactPage.css"

function ContactPage() {
    return (
        <div className="contact-page-container">
            <ContactForm />
               <div
                className="contact-page-team-image"
                style={{ backgroundImage: `url(/contact-team-image.JPG)` }}
            ></div>
        </div>
    );
}

export default ContactPage;
