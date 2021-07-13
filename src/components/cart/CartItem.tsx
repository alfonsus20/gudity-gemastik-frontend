import React from "react";
import InputField from "../InputField";
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
      <div className="mr-4 flex items-center flex-initial">
        <input type="checkbox" name="" id="" className="w-4 h-4" />
      </div>
      <div className="mr-6 flex-initial">
        <img
          src={`/assets/pictures/${image}`}
          className="w-36 h-28 rounded-md object-cover"
          alt=""
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium mb-2 text-lg">{name}</h3>
        <p className="font-bold mb-4 ">Rp {price} <span className='text-xs'> / gram</span></p>
        <div className="text-sm space-y-2">
          <div className="flex flex-row">
            <label htmlFor="" className="w-28 flex-shrink-0">
              Satuan
            </label>
            <span className="text-blue-primary font-medium">Gram</span>
          </div>
          <div className="flex flex-row mb-3 items-center justify-between">
            <div className="flex flex-row items-center">
              <label className="w-28 flex-shrink-0">Kuantitas</label>
              <div className="flex flex-row  w-40 mr-4">
                <button
                  className="px-2"
                  onClick={() =>
                    setQuantity((prevQuantity) => prevQuantity - 1)
                  }
                  disabled={quantity <= 0}
                >
                  -
                </button>
                <InputField
                  value={quantity}
                  type="text"
                  onChange={() => console.log("object")}
                  className="px-3 py-2 rounded-md border-2 border-gray-200 mx-4"
                  textCenter
                />
                <button
                  className="px-2"
                  onClick={() =>
                    setQuantity((prevQuantity) => prevQuantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <span className="text-green-500 text-sm">Tersedia</span>
            </div>
            <button>
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
