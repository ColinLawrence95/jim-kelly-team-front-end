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

const isActive = ["New", "Extension", "Price Change"];

interface Props {
  sortType: "price-asc" | "price-desc" | "date-newest" | "date-oldest";
  transactionType: "all" | "sale" | "lease";
  priceRange: [number, number];
  listings: Listing[];
}

function CurrentListings({ sortType, transactionType, priceRange, listings }: Props) {
  // Helper to calculate how many days ago the listing was posted
  const getDaysAgo = (dateString?: string): number | null => {
    if (!dateString) return null;
    const listingDate = new Date(dateString);
    const today = new Date();
    const diffTime = today.getTime() - listingDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const getTransactionType = (listing: Listing): "sale" | "lease" => {
    return /lease|rent/i.test(listing.PublicRemarks || "") ? "lease" : "sale";
  };

  // Filter by active status and sort based on sortType
  const filteredAndSortedListings: Listing[] = listings
    .filter((listing) => isActive.includes(listing.MlsStatus))
    .filter((listing) =>
      transactionType === "all" ? true : getTransactionType(listing) === transactionType,
    )
    .filter((listing) => listing.ListPrice >= priceRange[0] && listing.ListPrice <= priceRange[1])
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

  const displayListings: Listing[] = (() => {
    if (filteredAndSortedListings.length === 0) return [];

    return filteredAndSortedListings;
  })();

  return (
    <div className="current-listings-container">
      {displayListings.map((listing: Listing, index: number) => {
        const daysAgo = getDaysAgo(listing.ListingContractDate);

        return (
          <a
            key={index}
            href={`https://www.remaxhallmark.com/details/${listing.ListingKey}`}
            target="_blank"
            rel="noopener noreferrer"
            className="current-listings-link"
          >
            <motion.div className="current-listings-element" whileTap={{ scale: 0.95 }}>
              {listing.MediaURL ? (
                <img
                  className="current-listings-image"
                  src={listing.MediaURL}
                  alt="Listing"
                  onError={() => console.error("Failed to load image:", listing.MediaURL)}
                />
              ) : (
                <p>No photos available</p>
              )}

              <p className="featured-address">
                {listing.UnparsedAddress.split(",")[0]}
                <br />
                <span id="city">{listing.UnparsedAddress.split(",")[1]?.trim()}</span>
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
