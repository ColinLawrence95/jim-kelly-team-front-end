import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./ContactForm.css";

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE;
const TEMPLATE_ID_AUTO_REPLY = import.meta.env.VITE_EMAIL_TEMPLATE_AUTO_REPLY;
const TEMPLATE_ID_NOTIFICATION = import.meta.env.VITE_EMAIL_TEMPLATE_NOTIFICATION;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_API;

console.log("import.meta.env:", import.meta.env);
const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
        timeframe: "",
        subject: "",
    });

    const [status, setStatus] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_NOTIFICATION,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    phone: formData.phone,
                    timeframe: formData.timeframe,
                    subject: formData.subject,
                },
                PUBLIC_KEY
            );
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_AUTO_REPLY,
                {
                    name: formData.name,
                    email: formData.email,
                },
                PUBLIC_KEY
            );

            toast.success("✅ Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: "",
                phone: "",
                timeframe: "",
                subject: "",
            });
        } catch (error) {
            console.error(error);
            toast.error("❌ Failed to send message. Please try again later.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
                <h1 id="contact-form-title">CONTACT US</h1>
                
                <input
                    name="name"
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                />
                <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    required
                />
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                />
                <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="" disabled>
                        What's this regarding?
                    </option>
                    <option value="BUY">I'm looking to Buy</option>
                    <option value="SELL">I'm looking to Sell</option>
                    <option value="INFO">I'd like some additional information</option>
                </select>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please let us know your inquiry."
                    required
                />
                <select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>
                        When are you thinking of moving?
                    </option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-3 months">1–3 months</option>
                    <option value="3-6 months">3–6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Undecided">Undecided</option>
                </select>

                <button type="submit" disabled={isSending}>
                    {isSending ? "SENDING..." : "SEND"}
                </button>
                {status && <p>{status}</p>}
            </form>
         
        </div>
    );
};

export default ContactForm;
