import React from "react";
import {
  HeartIcon as HeartOutline,
  StarIcon as StarOutline,
} from "@heroicons/react/outline";
import {
  HeartIcon as HeartSolid,
  StarIcon as StarSolid,
} from "@heroicons/react/solid";
import Button from "../Button";

type ProductCardProps = {
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  sold: number;
  discount?: number;
  className?: string;
  withOrderButton?: boolean;
};

const ProductCard = ({
  image,
  name,
  description,
  price,
  rating,
  discount,
  className,
  sold,
  withOrderButton,
}: ProductCardProps) => {
  return (
    <div
      className={`p-3 xs:px-4 xs:py-6 shadow-md xs:shadow mx-auto flex-shrink-0 max-w-xs ${className}`}
    >
      <div className="mb-2 relative">
        <img
          src={`/assets/pictures/${image}`}
          alt={name}
          className="w-32 h-44 mx-auto object-cover"
        />
        <button className="absolute top-0 right-0">
          <HeartOutline className="text-pink-400 w-5 h-5" />
        </button>
      </div>
      <h3 className="text-blue-marker font-semibold">{name}</h3>
      <p className="text-sm mb-2">{description}</p>
      <p className="font-semibold mb-2">Rp {price}/gram</p>
      <div className="flex flex-col xs:flex-row justify-between">
        <div className="mb-2 xs:mb-0">
          <div className="flex flex-row mb-1">
            <StarSolid className="w-4 h-4 text-yellow-400" />
            <StarSolid className="w-4 h-4 text-yellow-400" />
            <StarSolid className="w-4 h-4 text-yellow-400" />
            <StarSolid className="w-4 h-4 text-yellow-400" />
            <StarOutline className="w-4 h-4 text-yellow-400" />
            <span className="ml-2 text-xs">{rating}</span>
          </div>
          <p className="text-xs">Terjual {sold} kg</p>
        </div>
        <div>
          {withOrderButton && (
            <Button
              onClick={() => console.log("object")}
              className="bg-blue-primary text-white text-xs rounded-md "
            >
              Pesan
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
