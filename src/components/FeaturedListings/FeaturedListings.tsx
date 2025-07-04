import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./FeaturedListings.css";

interface Listing {
    ListPrice: number;
    UnparsedAddress: string;
    MediaURL?: string;
    ListingKey: string;
    MlsStatus: string;
    ListingContractDate: string;
}

const isActive = ["New", "Extension", "Price Change"];

function FeaturedListings() {
    const [topListings, setTopListings] = useState<Listing[]>([]);

    useEffect(() => {
        const fetchTopListings = async () => {
            try {
                const response = await axios.get<Listing[]>(
                    "http://localhost:3000/api/listings"
                );
                const activeListings = response.data.filter((listing) =>
                    isActive.includes(listing.MlsStatus)
                );
                const sorted = [...activeListings].sort(
                    (a, b) =>
                        new Date(b.ListingContractDate).getTime() -
                        new Date(a.ListingContractDate).getTime()
                );

                setTopListings(sorted.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch top listings", error);
            }
        };

        fetchTopListings();
    }, []);

    return (
        <section className="featured-listings-container">
            <h2 id="featured-listings-title">Featured Listings</h2>
            <div className="featured-listings-grid">
                {topListings.map((listing) => (
                    <a
                        key={listing.ListingKey}
                        href={`https://www.remaxhallmark.com/details/${listing.ListingKey}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="featured-listing-link"
                    >
                        <div className="featured-listing-card">
                            <p className="featured-address">
                                {listing.UnparsedAddress.replace(
                                    /,\s*[A-Z]{2}\s+[A-Z]\d[A-Z]\s*\d[A-Z]\d$/,
                                    ""
                                )}
                            </p>

                            {listing.MediaURL ? (
                                <img
                                    className="featured-image"
                                    src={listing.MediaURL}
                                    alt="Listing"
                                />
                            ) : (
                                <p>No photo available</p>
                            )}
                            <p className="featured-price">
                                ${listing.ListPrice.toLocaleString()}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
            <Link to="/listings">
                <button id="featured-more-listings">MORE LISTINGS</button>
            </Link>
        </section>
    );
}

export default FeaturedListings;
