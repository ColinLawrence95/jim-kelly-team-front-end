import { useEffect, useState } from "react";
import axios from "axios";
import "./Testimonials.css";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { IoMdStar } from "react-icons/io";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number | string | undefined; // Allow number, string, or undefined
}

function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const reviewApi = import.meta.env.VITE_REVIEWS_URL;

  const slideVariants = {
    enter: (slideDirection: number) => ({
      x: slideDirection > 0 ? -80 : 80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (slideDirection: number) => ({
      x: slideDirection > 0 ? 80 : -80,
      opacity: 0,
    }),
  };

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
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  // Format date safely
  const formatDate = (time: number | string | undefined) => {
    if (typeof time !== "number" || isNaN(time)) {
      return "Date not available";
    }
    const date = new Date(time * 1000); // Convert Unix timestamp (seconds) to milliseconds
    return isNaN(date.getTime())
      ? "Date not available"
      : date.toLocaleDateString("en-US", {
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
          <div className="testimonials-element">
            <button className="nav-button left" onClick={handlePrev} aria-label="Previous review">
              <MdOutlineArrowBackIos />
            </button>

            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={reviews[activeIndex].time || activeIndex}
                className="testimonial-content"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
              >
                <div className="review-text">
                  <p id="testimonials-text">{reviews[activeIndex].text}</p>
                </div>
                <div className="review-author">
                  <p>{Array.from({ length: reviews[activeIndex].rating }, (_, i) => (
                    <IoMdStar key={i} size={24} />
                  ))}</p>
                  <strong>{reviews[activeIndex].author_name}</strong>
                  <div className="timestamp">{formatDate(reviews[activeIndex].time)}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button className="nav-button right" onClick={handleNext} aria-label="Next review">
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

export default Testimonials;
