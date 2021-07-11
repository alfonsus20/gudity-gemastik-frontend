import React from "react";
import { Image } from "./ImageGallery";
import Rating from "./product/Rating";
import { ThumbUpIcon } from "@heroicons/react/solid";

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
      <div className="flex flex-row justify-between">
        <Rating rating={rating} />
        <button className="flex flex-row items-center">
          <ThumbUpIcon className="w-6 h-6 text-blue-primary mr-2" /> 124
        </button>
      </div>
    </div>
  );
};

export default Review;
