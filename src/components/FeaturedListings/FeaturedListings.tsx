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

interface FeaturedListingCard extends Listing {
  isPlaceholder?: boolean;
}

const isActive = ["New", "Extension", "Price Change"];
const LISTING_API = import.meta.env.VITE_LISTINGS_URL;

function FeaturedListings() {
  const [topListings, setTopListings] = useState<FeaturedListingCard[]>([]);

  const displayListings: FeaturedListingCard[] = (() => {
    const cards = [...topListings];

    while (cards.length < 3) {
      cards.push({
        ListPrice: 0,
        UnparsedAddress: "Coming Soon",
        MediaURL: "/placeholder.jpg",
        ListingKey: `placeholder-${cards.length}`,
        MlsStatus: "",
        ListingContractDate: "",
        isPlaceholder: true,
      });
    }

    return cards.slice(0, 3);
  })();

  useEffect(() => {
    const fetchTopListings = async () => {
      try {
        const response = await axios.get<Listing[]>(LISTING_API);
        const activeListings = response.data.filter((listing) =>
          isActive.includes(listing.MlsStatus),
        );
        const sorted = [...activeListings].sort(
          (a, b) =>
            new Date(b.ListingContractDate).getTime() - new Date(a.ListingContractDate).getTime(),
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
      <h1 className="featured-listings-title">Recent Listings</h1>
      <div className="featured-listings-grid">
        {displayListings.map((listing, index) => {
          const cardContent = (
            <motion.div className="featured-listing-card">
              <motion.img
                className="featured-image"
                src={listing.MediaURL || "/placeholder.jpg"}
                alt={listing.isPlaceholder ? "Coming soon listing" : "Listing"}
              />
              {listing.isPlaceholder ? (
                <>
                  <p className="featured-address">Coming Soon</p>
                  <p className="featured-price">Coming Soon</p>
                </>
              ) : (
                <>
                  <p className="featured-address">
                    {listing.UnparsedAddress.split(",")[0]}
                    <br />
                    <span id="city">{listing.UnparsedAddress.split(",")[1]?.trim()}</span>
                  </p>

                  <p className="featured-price">${listing.ListPrice.toLocaleString()}</p>
                </>
              )}
            </motion.div>
          );

          return listing.isPlaceholder ? (
            <div key={listing.ListingKey || index} className="featured-listing-link">
              {cardContent}
            </div>
          ) : (
            <a
              key={`${listing.ListingKey}-${index}`}
              href={`https://www.remaxhallmark.com/details/${listing.ListingKey}`}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-listing-link"
            >
              {cardContent}
            </a>
          );
        })}
      </div>

      <Link to="/listings">
        <motion.button id="featured-more-listings" whileTap={{ scale: 0.95 }}>
          MORE LISTINGS
        </motion.button>
      </Link>
    </section>
  );
}

export default FeaturedListings;
