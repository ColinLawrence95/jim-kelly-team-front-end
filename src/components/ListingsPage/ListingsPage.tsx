import { useState, useEffect } from "react";
import CurrentListings from "../CurrentListings/CurrentListings";
import axios from "axios";
import { toast } from "react-toastify";
import "./ListingsPage.css";
import { motion } from "framer-motion";

type SortType = "price-asc" | "price-desc" | "date-newest" | "date-oldest";

interface Listing {
    ListPrice: number;
    UnparsedAddress: string;
    PublicRemarks: string;
    MlsStatus: string;
    MediaURL?: string;
    ListingKey: string;
    ListingContractDate?: string;
}

function ListingsPage() {
    const [sortType, setSortType] = useState<SortType>("price-asc");
    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchListings() {
            try {
                const response = await axios.get<Listing[]>(
                    "http://localhost:3000/api/listings"
                );
                setListings(response.data || []);
            } catch (error) {
                console.error("Error fetching listings:", error);
                toast.error("Failed to fetch listings");
            } finally {
                setLoading(false);
            }
        }
        fetchListings();
    }, []);

    return (
        <motion.div
            className="listings-page-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <div className="listings-page-top-container">
                <h1 id="listings-page-title">FEATURED LISTINGS</h1>

                <div className="listings-page-sort">
                    <select
                        id="sort"
                        value={sortType}
                        onChange={(e) =>
                            setSortType(e.target.value as SortType)
                        }
                    >
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="date-newest">Date: Newest</option>
                        <option value="date-oldest">Date: Oldest</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <p id="listings-page-loading">Loading listings...</p>
            ) : (
                <motion.div
                    initial={{ opacity: 0,  }}
                    animate={{ opacity: 1, }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <CurrentListings sortType={sortType} listings={listings} />
                </motion.div>
            )}
        </motion.div>
    );
}

export default ListingsPage;
