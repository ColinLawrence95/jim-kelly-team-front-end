import { useState, useEffect } from "react";
import CurrentListings from "../CurrentListings/CurrentListings";
import ListingsSort from "../ListingsSort/ListingsSort";
import axios from "axios";
import { toast } from "react-toastify";
import "./ListingsPage.css";
import { motion } from "framer-motion";

type SortType = "price-asc" | "price-desc" | "date-newest" | "date-oldest";
type TransactionType = "all" | "sale" | "lease";

interface Listing {
  ListPrice: number;
  UnparsedAddress: string;
  PublicRemarks: string;
  MlsStatus: string;
  MediaURL?: string;
  ListingKey: string;
  ListingContractDate?: string;
}

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};
const LISTING_API = import.meta.env.VITE_LISTINGS_URL;
function ListingsPage() {
  const [sortType, setSortType] = useState<SortType>("price-asc");
  const [transactionType, setTransactionType] = useState<TransactionType>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 4000000]);
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      try {
        const response = await axios.get<Listing[]>(LISTING_API);
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
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="listings-page-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="listings-page-top-container">
          <h1 id="listings-page-title">FEATURED LISTINGS</h1>
          <ListingsSort
            sortOption={sortType}
            setSortOption={setSortType}
            transactionType={transactionType}
            setTransactionType={setTransactionType}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>

        {loading ? (
          <div id="listings-page-loading" aria-live="polite" aria-busy="true">
            <div className="listings-page-spinner" aria-hidden="true" />
            <span className="visually-hidden">Loading listings</span>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <CurrentListings
              sortType={sortType}
              transactionType={transactionType}
              priceRange={priceRange}
              listings={listings}
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ListingsPage;
