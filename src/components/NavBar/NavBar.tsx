

import "./NavBar.css";
import { useNavigate, } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="nav-bar-container">
            <div className="nav-bar-contents">
                <div className="nav-bar-logo" style={{ backgroundImage: `url(/REMAX_logo.png)` }} />
                <p onClick={() => navigate("/")}>HOME</p>
                <p onClick={() => navigate("/about")}>ABOUT</p>
                <p onClick={() => navigate("/listings")}>FEATURED LISTNGS</p>
                <p onClick={() => navigate("/buyers")}>BUYERS GUIDE</p>
                <p onClick={() => navigate("/sellers")}>SELLERS GUIDE</p>
                <p onClick={() => navigate("/contact")}>CONTACT US</p>
            </div>
        </div>
    );
}

export default NavBar;
