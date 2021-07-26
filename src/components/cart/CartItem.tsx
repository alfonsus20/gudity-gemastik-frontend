import React, { Dispatch } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import { ProductCartState } from "../../store/reducers/cartReducers";
import { SetStateAction } from "react";
import { useDispatch } from "react-redux";
import {
  DECREASE_TOTAL,
  INCREASE_TOTAL,
} from "../../store/constants/cartConstants";
import {
  ADD_CHECKOUT_ITEM,
  REMOVE_CHECKOUT_ITEM,
} from "../../store/constants/checkoutConstants";

const CartItem = ({
  product,
  setChoosenValues,
  choosenValues,
}: {
  product: ProductCartState;
  setChoosenValues?: Dispatch<SetStateAction<number[]>>;
  choosenValues?: number[];
}) => {
  const dispatch = useDispatch();
  const { cart_id, product_name, product_price, product_quantity } = product;

  return (
    <label htmlFor={cart_id.toString()} className="flex flex-row mb-6">
      <div className="mr-3 md:mr-6 flex-shrink-0 flex items-start">
        <div className="flex flex-row items-center">
          <div className="mr-4 flex items-center flex-initial">
            <input
              type="checkbox"
              name=""
              id={cart_id.toString()}
              className="w-4 h-4"
              checked={choosenValues?.includes(cart_id)}
              onChange={() => {
                setChoosenValues &&
                  (choosenValues?.includes(cart_id)
                    ? setChoosenValues((prev) =>
                        prev.filter((x) => x !== cart_id)
                      )
                    : setChoosenValues((prev) => [...prev, cart_id]));
                choosenValues?.includes(cart_id)
                  ? dispatch({
                      type: REMOVE_CHECKOUT_ITEM,
                      payload: product,
                    })
                  : dispatch({
                      type: ADD_CHECKOUT_ITEM,
                      payload: product,
                    });
              }}
            />
          </div>
          <img
            src={`/assets/pictures/kopi.jpg`}
            className="w-28 h-20 md:w-36 md:h-28 rounded-md object-cover "
            alt=""
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-medium md:mb-2 text-md sm:text-lg">
          {product_name}
        </h3>
        <p className="font-bold mb-2 md:mb-4 ">
          Rp {product_price} <span className="text-xs"> / kg</span>
        </p>
        <div className="text-sm space-y-2">
          <div className="flex flex-row mb-3 items-center">
            <span className="text-blue-primary font-medium mr-2">
              {product_quantity} kg
            </span>
            <button className="ml-auto">
              <TrashIcon className="w-5 h-5 text-gray" />
            </button>
          </div>
        </div>
      </div>
    </label>
  );
};

export default CartItem;
