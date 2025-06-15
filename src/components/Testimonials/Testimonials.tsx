import { useEffect, useState } from "react";
import axios from "axios";
import "./Testimonials.css";

interface Review {
    author_name: string;
    rating: number;
    text: string;
    time: number;
}

function Testimonials() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const reviewApi = "/api/reviews";

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await axios.get(reviewApi);
                console.log("Review API URL:", response);
                setReviews(response.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        getReviews();
    }, [reviewApi]);

    return (
        <>
            <h2 id="testimonials-title">Testimonials</h2>
            <div className="testimonials-container">
                {Array.isArray(reviews) && reviews.length > 0 ? (
                    [...reviews]
                        .sort((a, b) => b.time - a.time)
                        .slice(0, 3)
                        .map((review) => (
                            <div key={review.time} className="testimonials-element">
                                <div className="review-text">
                                    <p>{review.text}</p>
                                </div>
                                <div className="review-author">
                                    <p>{"⭐".repeat(review.rating)}</p>
                                    <strong>{review.author_name}</strong>
                                    <div className="timestamp">
                                        {new Date(review.time * 1000).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        ))
                ) : (
                    <p>No reviews available.</p>
                )}
            </div>
        </>
    );
}

export default Testimonials;
