import { useState, useEffect } from "react";
import CurrentListings from "../CurrentListings/CurrentListings";
import axios from "axios";
import { toast } from "react-toastify";
import "./ListingsPage.css";

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
                const response = await axios.get<Listing[]>("http://localhost:3000/api/listings");
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
        <div className="listings-page-container">
            <div className="listings-page-top-container">
                <h1 id="listings-page-title">FEATURED LISTINGS</h1>

                <div className="listings-page-sort">
                    <select
                        id="sort"
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value as SortType)}
                    >
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="date-newest">Date: Newest</option>
                        <option value="date-oldest">Date: Oldest</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <p>Loading listings...</p>
            ) : (
                <CurrentListings sortType={sortType} listings={listings} />
            )}
        </div>
    );
}

export default ListingsPage;
