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
                {Array.isArray(reviews) ? (
                    reviews.map((review) => (
                        <div key={review.time} className="testimonials-element">
                            <p>{review.text}</p>
                            <p>Rating: {review.rating} ⭐</p>
                            <strong>- {review.author_name}</strong>
                            <div className="timestamp">
                                {new Date(review.time * 1000).toLocaleDateString()}
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
