import React from "react";
import Rating from "./product/Rating";

type ReviewProps = {
  reviewerName: string;
  review: string;
  rating: number;
};

const Review = ({ reviewerName, review, rating }: ReviewProps) => {
  return (
    <div className="mb-8">
      <h4 className="mb-2 text-lg font-medium">{reviewerName}</h4>
      <p className="mb-4">{review}</p>
      <Rating rating={rating} />
    </div>
  );
};

export default Review;
