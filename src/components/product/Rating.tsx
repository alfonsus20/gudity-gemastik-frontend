import React from "react";
import { StarIcon as StarOutline } from "@heroicons/react/outline";
import { StarIcon as StarSolid } from "@heroicons/react/solid";

type RatingProps = {
  rating: number;
  showRate?: boolean;
};

const Rating = ({ rating, showRate }: RatingProps) => {
  return (
    <div className="flex flex-row mb-1 items-center">
      {[...Array(Math.round(rating))].map((_, i) => (
        <StarSolid className="w-4 h-4 sm:w-6 sm:h-6 text-orange" key={i} />
      ))}
      {[...Array(5 - Math.round(rating))].map((_, i) => (
        <StarOutline className="w-4 h-4 sm:w-6 sm:h-6 text-orange" key={i} />
      ))}
      {showRate && <span className="ml-2 text-xs">{rating}</span>}
    </div>
  );
};

export default Rating;
