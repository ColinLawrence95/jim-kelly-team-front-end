import { useState, useEffect } from "react";
import axios from "axios";
import "./CurrentListings.css";
import { motion } from "framer-motion";

interface Listing {
    ListPrice: number;
    UnparsedAddress: string;
    PublicRemarks: string;
    MlsStatus: string;
    MediaURL?: string;
    ListingKey: string;
    ListingContractDate?: string;
}
const LISTING_API = import.meta.env.VITE_LISTINGS_URL

const isActive = ["New", "Extension", "Price Change"];
interface Props {
    sortType: "price-asc" | "price-desc" | "date-newest" | "date-oldest";
    listings: Listing[];
}

function CurrentListings({ sortType }: Props) {
    const [listings, setListings] = useState<Listing[]>([]);

    useEffect(() => {
        async function fetchListings() {
            try {
                const response = await axios.get<Listing[]>(LISTING_API);
                setListings(response.data || []);
            } catch (error) {
                console.error("Failed to fetch listings", error);
            }
        }
        fetchListings();
    }, []);

    const getDaysAgo = (dateString?: string): number | null => {
        if (!dateString) return null;
        const listingDate = new Date(dateString);
        const today = new Date();
        const diffTime = today.getTime() - listingDate.getTime();
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    };

    const filteredAndSortedListings = listings
        .filter((listing) => isActive.includes(listing.MlsStatus))
        .sort((a, b) => {
            switch (sortType) {
                case "price-asc":
                    return a.ListPrice - b.ListPrice;
                case "price-desc":
                    return b.ListPrice - a.ListPrice;
                case "date-newest":
                    return (
                        new Date(b.ListingContractDate || 0).getTime() -
                        new Date(a.ListingContractDate || 0).getTime()
                    );
                case "date-oldest":
                    return (
                        new Date(a.ListingContractDate || 0).getTime() -
                        new Date(b.ListingContractDate || 0).getTime()
                    );
                default:
                    return 0;
            }
        });

    return (
        <div className="current-listings-container">
            {filteredAndSortedListings.map((listing, index) => {
                const daysAgo = getDaysAgo(listing.ListingContractDate);
                return (
                    <a
                        key={index}
                        href={`https://www.remaxhallmark.com/details/${listing.ListingKey}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="current-listings-link"
                    >
                        <motion.div
                            className="current-listings-element"
                            whileHover={{
                                scale: 1.03,
                                transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                },
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
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
                            <p className="featured-address">
                                {listing.UnparsedAddress.split(",")[0]}
                                <br />
                                <span id="city">
                                    {listing.UnparsedAddress.split(",")[1]?.trim()}
                                </span>
                            </p>

                            <p className="featured-price">${listing.ListPrice.toLocaleString()}</p>

                            {daysAgo !== null && <p className="current-listings-days"></p>}
                        </motion.div>
                    </a>
                );
            })}
        </div>
    );
}

export default CurrentListings;
