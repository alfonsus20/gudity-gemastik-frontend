import React from "react";
import { StarIcon as StarOutline } from "@heroicons/react/outline";
import { StarIcon as StarSolid } from "@heroicons/react/solid";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ReviewProductState } from "./card/ReviewCard";
import { postReview } from "../store/actions/orderActions";
import Rating from "./product/Rating";

const ReviewInput = ({ product }: { product: ReviewProductState }) => {
  const [review, setReview] = React.useState<string>("");
  const [star, setStar] = React.useState<number>(0);
  const starButtons = Array.from(Array(5).keys()).map((x) => ({
    id: x + 1,
    active: x < star,
    onClick: () => setStar(x + 1),
  }));

  const dispatch = useDispatch();

  const handleSendReview = () => {
    if (star === 0) {
      toast.error("Harap Masukkan Bintang");
    } else if (!review) {
      toast.error("Harap Masukkan Review");
    } else {
      dispatch(postReview({ star, review, invoice_product_id: product.id }));
    }
  };

  return (
    <div className="mb-4">
      <div className="flex flex-row  mb-4">
        <div className="flex-shrink-0 mr-4">
          <img
            src={product.thumbnail}
            className="w-32 h-24 rounded-md object-cover"
            alt="thumbnail"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between flex-auto ">
          <div className="mb-2">
            <p className="text-lg font-semibold">{product.name}</p>
            <p className="text-sm">{product.quantity} kg</p>
            <p className="text-sm">
              <span className="text-blue-primary font-semibold">
                Rp {product.price}
              </span>
              / kg
            </p>
          </div>
        </div>
      </div>
      {product.review ? (
        <div>
          <Rating rating={product.review.rating} />
          <p>{product.review.review}</p>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-row mb-2">
            {starButtons.map((starButton) =>
              starButton.active ? (
                <StarSolid
                  className="w-6 h-6 text-orange cursor-pointer"
                  onClick={starButton.onClick}
                />
              ) : (
                <StarOutline
                  className="w-6 h-6 text-orange cursor-pointer"
                  onClick={starButton.onClick}
                />
              )
            )}
          </div>
          <label htmlFor="" className="text-blue-primary">
            Review
          </label>
          <textarea
            onChange={(e) => setReview(e.target.value)}
            value={review}
            className="outline-none border-2 border-gray-200 focus:border-blue-primary rounded-md
                  px-4 py-2 h-28 resize-none text-sm
                "
          ></textarea>
        </div>
      )}
      {!product.review && (
        <div className="flex justify-end mt-4">
          <Button
            text="Kirim"
            variant="primary"
            size="md"
            onClick={handleSendReview}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewInput;
