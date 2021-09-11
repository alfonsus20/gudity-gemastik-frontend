import React from "react";
import { HeartIcon as HeartOutline } from "@heroicons/react/outline";
/* eslint-disable */
import Button from "../Button";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { ProductReview } from "../../store/reducers/productReducers";
import { countRatingAverage } from "../../utils/helpers";

type ProductCardProps = {
  image: string;
  name: string;
  description: string;
  price: number;
  reviews: ProductReview[];
  className?: string;
  withOrderButton?: boolean;
  supplierId?: string;
  productId?: number;
};

const ProductCard = ({
  image,
  name,
  description,
  price,
  className,
  withOrderButton,
  supplierId,
  productId,
  reviews,
}: ProductCardProps) => {
  return (
    <Link
      to={`/suppliers/${supplierId}/produk/${productId}`}
      className={`p-3 xs:px-4 xs:py-6 shadow-md xs:shadow flex-shrink-0 w-64 ${className}`}
    >
      <div className="mb-2 relative">
        <img
          src={
            !image || image === "http://image.com"
              ? "/assets/pictures/biji-kopi.jpg"
              : image
          }
          alt={name}
          className="w-32 h-44 mx-auto object-cover"
        />
        <button className="absolute top-0 right-0">
          <HeartOutline className="text-pink-400 w-5 h-5" />
        </button>
      </div>
      <h3 className="text-blue-marker font-semibold">{name}</h3>

      <p
        className="overflow-hidden text-sm mb-2 text-justify"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </p>
      <p className="font-semibold mb-2">Rp {price}/kg</p>
      <div className="flex flex-col xs:flex-row justify-between">
        <div className="mb-2 xs:mb-0">
          <Rating rating={countRatingAverage(reviews)} size="sm" />
          <p className="text-xs">{reviews.length} review</p>
        </div>
        <div>
          {withOrderButton && (
            <Button
              className="text-xs rounded-md "
              variant="primary"
              text="Pesan"
              size="sm"
              rounded
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
