import React from "react";
import { ChatAltIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { PaymentProductState } from "../../store/reducers/paymentReducers";
import { ReviewProps } from "../Review";
import ReviewInput from "../ReviewInput";

type TransactionInfo = {
  supplierName: string;
};

export interface ReviewProductState extends PaymentProductState {
  review: ReviewProps;
}

interface ReviewCardProps extends TransactionInfo {
  products: ReviewProductState[];
}

const ReviewCard = ({ products, supplierName }: ReviewCardProps) => {
  return (
    <div className="shadow rounded-md max-w-screen-xl mx-auto p-8">
      <div className="flex flex-row items-center mb-4">
        <ShoppingBagIcon className="w-5 h-5 mr-2" />
        <h3 className="text-md md:text-lg mr-5">{supplierName}</h3>
        <button className="flex flex-row items-center text-blue-primary">
          <ChatAltIcon className="w-4 h-4 mr-2" />{" "}
          <u className="text-sm text-left">Chat Sekarang</u>
        </button>
      </div>
      {products.map((product, index) => (
        <ReviewInput key={index} product={product} />
      ))}
    </div>
  );
};

export default ReviewCard;
