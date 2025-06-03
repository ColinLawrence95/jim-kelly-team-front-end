import { useState, useEffect } from "react";
import axios from "axios";
import "./CurrentListings.css";
interface Listing {
    ListPrice: number;
    UnparsedAddress: string;
    PublicRemarks: string;
    MlsStatus: string;
    MediaURL?: string;
}

const isActive = ["New", "Extension", "Price Change"];

function CurrentListings() {
    const [listings, setListings] = useState<Listing[]>([]);

    useEffect(() => {
        async function fetchListings() {
            try {
                const response = await axios.get<Listing[]>("http://localhost:3000/api/listings");
                setListings(response.data || []);
                console.log(response.data);
            } catch (error) {
                console.error("Failed to fetch listings", error);
            }
        }
        fetchListings();
    }, []);
    return (
        <div className="current-listings-container">
            {listings
                .filter((listing) => isActive.includes(listing.MlsStatus)) 
                .map((listing, index) => (
                    <div className="current-listings-element" key={index}>
                          <p id="current-listings-address">{listing.UnparsedAddress}</p>
                        {listing.MediaURL ? (
                            <img
                                className="current-listings-image"
                                src={listing.MediaURL}
                                alt="Listing"
                                onError={() =>
                                    console.error("Failed to load image:", listing.MediaURL)
                                }
                            />
                        ) : (
                            <p>No photos available</p>
                        )}
                      
                        <p id="current-listings-price">${listing.ListPrice}</p>
                    </div>
                ))}
        </div>
    );
}

export default CurrentListings;
