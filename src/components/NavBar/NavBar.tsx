

import "./NavBar.css";
import { useNavigate, } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="nav-bar-container">
            <div className="nav-bar-contents">
                <div className="nav-bar-logo" style={{ backgroundImage: `url(/REMAX_logo.png)` }} />
                <h4 onClick={() => navigate("/")}>Home</h4>
                <h4 onClick={() => navigate("/about")}>About</h4>
                <h4 onClick={() => navigate("/listings")}>Current Listings</h4>
                <h4 onClick={() => navigate("/sales")}>Past Sales</h4>
                <h4 onClick={() => navigate("/buyers")}>Buyers Guide</h4>
                <h4 onClick={() => navigate("/sellers")}>Sellers Guide</h4>
                <h4 onClick={() => navigate("/contact")}>Contact Us</h4>
            </div>
        </div>
    );
}

export default NavBar;
