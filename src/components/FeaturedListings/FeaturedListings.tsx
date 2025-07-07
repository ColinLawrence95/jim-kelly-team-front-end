import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./FeaturedListings.css";
import { motion } from "framer-motion";

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
            <div className="featured-listings-grid">
                {topListings.map((listing) => (
                    <a
                        key={listing.ListingKey}
                        href={`https://www.remaxhallmark.com/details/${listing.ListingKey}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="featured-listing-link"
                    >
                        <motion.div
                            className="featured-listing-card"
                            whileHover={{
                                scale: 1.03,
                                transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                },
                            }}
                        >
                            {listing.MediaURL ? (
                                <motion.img
                                    className="featured-image"
                                    src={listing.MediaURL}
                                    alt="Listing"
                                    whileHover={{
                                        scale: 1.01,
                                        transition: {
                                            type: "spring",
                                            stiffness: 10,
                                            damping: 182,
                                        },
                                    }}
                                />
                            ) : (
                                <p>No photo available</p>
                            )}
                            <p className="featured-address">
                                {listing.UnparsedAddress.split(",")[0]}
                                <br />
                                <p id="city">{listing.UnparsedAddress.split(",")[1]?.trim()}</p>
                                
                            </p>

                            <p className="featured-price">
                                ${listing.ListPrice.toLocaleString()}
                            </p>
                        </motion.div>
                    </a>
                ))}
            </div>

            <Link to="/listings">
                <motion.button
                    id="featured-more-listings"
                    whileHover={{
                        scale: 1.08,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        },
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    MORE LISTINGS
                </motion.button>
            </Link>
        </section>
    );
}

export default FeaturedListings;
