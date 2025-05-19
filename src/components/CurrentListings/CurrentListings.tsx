import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "./CurrentListings.css";
function CurrentListings() {
    const [listings, setListings] = useState<number[]>([]);
    useEffect(() => {
        setListings([1, 2, 3]);
    }, []);

    return (
        <div className="current-listings-container">
            <FaArrowLeftLong className="current-listings-arrow-left" size={40} />
            {listings.map((listing, index) => (
                <div key = {index} className="current-listings-element-container">
                    <div>Listing #{listing}</div>
                    <div
                        key={index}
                        className="current-listings-element"
                        style={{ backgroundImage: `url(/house.png)` }}
                    ></div>
                </div>
            ))}
            <FaArrowRightLong className="current-listings-arrow-right" size={40} />
        </div>
    );
}

export default CurrentListings;
