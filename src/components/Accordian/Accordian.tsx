import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Accordian.css";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-container">
            <button
                className="accordion-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
                    {isOpen ? "−" : "+"}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="accordion-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="accordion-inner">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
