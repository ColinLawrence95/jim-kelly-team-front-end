import { useEffect, useState } from "react";
import axios from "axios";
import "./Testimonials.css";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number | string | undefined; // Allow number, string, or undefined
}

function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const reviewApi = import.meta.env.VITE_REVIEWS_URL;

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get(reviewApi);
        const sorted = [...response.data]
          .map((review) => ({
            ...review,
            // Ensure time is a number (convert string if needed)
            time: typeof review.time === "string" ? Date.parse(review.time) / 1000 : review.time,
          }))
          .filter((review) => typeof review.time === "number" && !isNaN(review.time)) // Filter out invalid times
          .sort((a, b) => b.time - a.time);
        setReviews(sorted.slice(0, 5));
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    getReviews();
  }, [reviewApi]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  // Format date safely
  const formatDate = (time: number | string | undefined) => {
    if (typeof time !== "number" || isNaN(time)) {
      return "Date not available";
    }
    const date = new Date(time * 1000); // Convert Unix timestamp (seconds) to milliseconds
    return isNaN(date.getTime()) ? "Date not available" : date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className="testimonials-container"
      style={{ backgroundImage: `url(/testimonials-image.png)` }}
    >
      {reviews.length > 0 ? (
        <div className="testimonial-slider-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[activeIndex].time || activeIndex} // Fallback to activeIndex if time is undefined
              className="testimonials-element"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              <button
                className="nav-button left"
                onClick={handlePrev}
                aria-label="Previous review"
              >
                <IoMdArrowRoundBack />
              </button>

              <div className="testimonial-content">
                <div className="review-text">
                  <p id="testimonials-text">{reviews[activeIndex].text}</p>
                </div>
                <div className="review-author">
                  <p>{"⭐".repeat(reviews[activeIndex].rating)}</p>
                  <strong>{reviews[activeIndex].author_name}</strong>
                  <div className="timestamp">
                    {formatDate(reviews[activeIndex].time)}
                  </div>
                </div>
              </div>

              <button
                className="nav-button right"
                onClick={handleNext}
                aria-label="Next review"
              >
                <IoMdArrowRoundForward />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

export default Testimonials;