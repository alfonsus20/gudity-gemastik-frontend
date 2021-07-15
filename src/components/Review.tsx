import React from "react";
import { Image } from "./ImageGallery";
import Rating from "./product/Rating";

type ReviewProps = {
  reviewerName: string;
  review: string;
  images: Image[];
  rating: number;
};

const Review = ({ reviewerName, review, images, rating }: ReviewProps) => {
  return (
    <div className="mb-8">
      <h4 className="mb-2 text-lg font-medium">{reviewerName}</h4>
      <p className="mb-4">{review}</p>
      <div className="flex flex-row flex-wrap gap-4 mb-2">
        {images.map((image, i) => (
          <img
            key={i}
            src={`/assets/pictures/${image.name}`}
            className="object-cover w-28 h-28 rounded-md"
            alt={image.name}
          />
        ))}
      </div>
      <Rating rating={rating} />
    </div>
  );
};

export default Review;
