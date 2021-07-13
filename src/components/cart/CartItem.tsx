import React from "react";
import { TrashIcon } from "@heroicons/react/outline";

export type CartItemProps = {
  price: number;
  measurement: "gram" | "kilogram" | "ton" | "karung (10kg)";
  discount?: number;
  amount: number;
  image: string;
  name: string;
};

const CartItem = ({
  price,
  measurement,
  discount,
  amount,
  image,
  name,
}: CartItemProps) => {
  const [quantity, setQuantity] = React.useState<number>(amount);

  return (
    <div className="flex flex-row mb-6">
      <div className="mr-3 md:mr-6 flex-shrink-0 flex items-start">
        <div className="flex flex-row items-center">
          <div className="mr-4 flex items-center flex-initial">
            <input type="checkbox" name="" id="" className="w-4 h-4" />
          </div>
          <img
            src={`/assets/pictures/${image}`}
            className="w-28 h-20 md:w-36 md:h-28 rounded-md object-cover "
            alt=""
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-medium md:mb-2 text-md sm:text-lg">{name}</h3>
        <p className="font-bold mb-2 md:mb-4 ">
          Rp {price} <span className="text-xs"> / gram</span>
        </p>
        <div className="text-sm space-y-2">
          <div className="flex flex-row mb-3 items-center">
            <div className="flex flex-row mr-0 md:mr-4">
              <button
                className="px-2"
                onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
                disabled={quantity <= 0}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={() => console.log("object")}
                className="py-1 rounded-md border-2 border-gray-200 md:mx-4 w-16 text-center"
              />
              <button
                className="px-2"
                onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
              >
                +
              </button>
            </div>
            <span className="text-blue-primary font-medium mr-2">
              {measurement}
            </span>
            <button className="ml-auto">
              <TrashIcon className="w-5 h-5 text-gray" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
