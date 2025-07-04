import ContactForm from "../ContactForm/ContactForm";
import "./ContactPage.css"

function ContactPage() {
    return (
        <div className="contact-page-container">
               <div
                className="contact-page-team-image"
                style={{ backgroundImage: `url(/contact-team-image.JPG)` }}
            ></div>
            <ContactForm />
            
        </div>
    );
}

export default ContactPage;
