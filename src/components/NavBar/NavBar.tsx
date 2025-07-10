import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "HOME", path: "/" },
        { label: "ABOUT", path: "/about" },
        { label: "FEATURED LISTINGS", path: "/listings" },
        { label: "BUYERS GUIDE", path: "/buyers" },
        { label: "SELLERS GUIDE", path: "/sellers" },
        { label: "CONTACT US", path: "/contact" },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-bar-container">
            <motion.div
                className="nav-bar-contents"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {/* Logo */}
                <div
                    className="nav-bar-logo"
                    style={{ backgroundImage: `url(/REMAX_logo.png)` }}
                />

                {/* Hamburger Icon */}
                <motion.div
                    className="hamburger-menu"
                    onClick={toggleMenu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    {isOpen ? (
                        <FaTimes size={30} color="#000" />
                    ) : (
                        <FaBars size={30} color="#000" />
                    )}
                </motion.div>

                {/* Desktop Menu (non-animated) */}
                <div className="nav-links-desktop">
                    {navItems.map((item) => (
                        <motion.p
                            key={item.label}
                            onClick={() => {
                                navigate(item.path);
                                setIsOpen(false);
                            }}
                            whileHover={{
                                scale: 1.1,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15,
                                },
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="nav-link"
                        >
                            {item.label}
                        </motion.p>
                    ))}
                </div>

                {/* Mobile Slide-in Menu */}
                <motion.div
                    className="nav-links-mobile"
                    initial={{ x: "100%" }}
                    animate={{ x: isOpen ? "0%" : "100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {navItems.map((item) => (
                        <motion.p
                            key={item.label}
                            onClick={() => {
                                navigate(item.path);
                                setIsOpen(false);
                            }}
                            whileHover={{
                                scale: 1.1,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15,
                                },
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="nav-link"
                        >
                            {item.label}
                        </motion.p>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default NavBar;
