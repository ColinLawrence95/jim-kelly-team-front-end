import  { useState, useEffect } from "react";
import axios from "axios";

interface Listing {
    ListPrice: number;
    UnparsedAddress: string;
    PublicRemarks: string;
    MediaURL?: string; // optional string for one photo URL
}

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
        <div>
            {listings.map((listing, index) => (
                <div key={index} style={{ marginBottom: "2rem" }}>
                    <p>Address: {listing.UnparsedAddress}</p>
                    <p>Price: {listing.ListPrice}</p>
                    

                    {/* Show photo if MediaURL exists */}
                    {listing.MediaURL ? (
                        <img
                            src={listing.MediaURL}
                            alt="Listing"
                            style={{ maxWidth: "300px", height: "auto" }}
                            onError={() => console.error("Failed to load image:", listing.MediaURL)}
                        />
                    ) : (
                        <p>No photos available</p>
                    )}
                    <p>{listing.PublicRemarks}</p>
                </div>
            ))}
        </div>
    );
}

export default CurrentListings;
