import React from "react";
import Rating from "./Rating";

type RatingState = {
  reviewersNumber: number;
  rating: number;
};

type RatingCollectionProps = {
  ratings: RatingState[];
  average: number;
  count: number;
};

const RatingCollection = ({
  ratings,
  average,
  count,
}: RatingCollectionProps) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sm:pr-10 mx-auto sm:mx-0 text-center sm:text-left">
        <h3 className="text-3xl mb-1">
          <span className="font-semibold">{average}</span>/ 5
        </h3>
        <div className="flex flex-row mb-1 items-center justify-center sm:justify-start">
          <Rating rating={average} />
        </div>
        <p>{count} Penilai</p>
      </div>
      <div className="mt-6 sm:mt-0 mx-auto sm:mx-0">
        {ratings.map((rating, i) => (
          <div className="flex flex-row items-center" key={i}>
            <div className="mr-4">
              <Rating rating={rating.rating} />
            </div>
            <div className="w-60 h-2 bg-orange bg-opacity-20 rounded-md mr-4">
              <div
                className="h-full bg-orange rounded-md"
                style={{
                  width: `${
                    (rating.reviewersNumber * 100) / (count > 0 ? count : 1)
                  }%`,
                }}
              ></div>
            </div>
            <div className="text-sm">{rating.reviewersNumber}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingCollection;
