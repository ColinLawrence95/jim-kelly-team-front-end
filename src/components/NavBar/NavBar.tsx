import { motion } from "framer-motion";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    const navItems = [
        { label: "HOME", path: "/" },
        { label: "ABOUT", path: "/about" },
        { label: "FEATURED LISTINGS", path: "/listings" },
        { label: "BUYERS GUIDE", path: "/buyers" },
        { label: "SELLERS GUIDE", path: "/sellers" },
        { label: "CONTACT US", path: "/contact" },
    ];

    return (
        <div className="nav-bar-container">
            <motion.div
                className="nav-bar-contents"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div
                    className="nav-bar-logo"
                    style={{ backgroundImage: `url(/REMAX_logo.png)` }}
                />
                
                {navItems.map((item) => (
                    <motion.p
                        key={item.label}
                        onClick={() => navigate(item.path)}
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
        </div>
    );
}

export default NavBar;
