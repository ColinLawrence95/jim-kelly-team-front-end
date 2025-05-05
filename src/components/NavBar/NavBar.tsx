

import "./NavBar.css";
function NavBar() {
    return (
        <div className="nav-bar-container">
            <div className="nav-bar-contents">
                <div className="nav-bar-logo" style={{ backgroundImage: `url(/REMAX_logo.svg)` }} />
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Current Listings</h4>
                <h4>Past Sales</h4>
                <h4>Buyers Guide</h4>
                <h4>Sellers Guide</h4>
                <h4>Contact</h4>
            </div>
        </div>
    );
}

export default NavBar;
