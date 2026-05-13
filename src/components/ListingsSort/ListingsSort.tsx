import { useEffect, useState } from "react";
import { Range } from "react-range";
import "./ListingsSort.css";

interface ListingsSortProps {
  sortOption: "price-asc" | "price-desc" | "date-newest" | "date-oldest";
  setSortOption: (value: "price-asc" | "price-desc" | "date-newest" | "date-oldest") => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  transactionType: "all" | "sale" | "lease";
  setTransactionType: (value: "all" | "sale" | "lease") => void;
}

const MIN_PRICE = 0;
const MAX_PRICE = 4000000;
const STEP = 10000;

export default function ListingsSort({
  sortOption,
  setSortOption,
  transactionType,
  setTransactionType,
  priceRange,
  setPriceRange,
}: ListingsSortProps) {
  const [localPriceRange, setLocalPriceRange] = useState<[number, number]>(priceRange);

  useEffect(() => {
    setLocalPriceRange(priceRange);
  }, [priceRange]);

  return (
    <div className="listings-sort-container">
      <div className="listings-sort-selects">
        <select
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value as "all" | "sale" | "lease")}
          className="listings-sort-select"
          aria-label="Sort by transaction type"
        >
          <option value="all">All Properties</option>
          <option value="sale">For Sale</option>
          <option value="lease">For Lease</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) =>
            setSortOption(
              e.target.value as "price-asc" | "price-desc" | "date-newest" | "date-oldest",
            )
          }
          className="listings-sort-select"
          aria-label="Sort listings"
        >
          <option value="price-desc">Price: High to Low</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="date-newest">Date: Newest</option>
          <option value="date-oldest">Date: Oldest</option>
        </select>
      </div>

      <div className="listings-sort-range-wrapper">
        <span className="listings-sort-label">Price Range</span>
        <div className="listings-sort-range">
          <Range
            step={STEP}
            min={MIN_PRICE}
            max={MAX_PRICE}
            values={localPriceRange}
            onChange={(values) => setLocalPriceRange([values[0], values[1]])}
            onFinalChange={(values) => setPriceRange([values[0], values[1]])}
            renderTrack={({ props, children }) => (
              <div {...props} className="listings-sort-track" style={props.style}>
                <div
                  className="listings-sort-track-fill"
                  style={{
                    left: `${(localPriceRange[0] / MAX_PRICE) * 100}%`,
                    width: `${((localPriceRange[1] - localPriceRange[0]) / MAX_PRICE) * 100}%`,
                  }}
                />
                {children}
              </div>
            )}
            renderThumb={({ props, index }) => (
              <div
                {...props}
                key={index}
                aria-label={index === 0 ? "Minimum price" : "Maximum price"}
                className="listings-sort-thumb"
              />
            )}
          />

          <div className="listings-sort-values">
            <span>${localPriceRange[0].toLocaleString()}</span>
            <span>${localPriceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
