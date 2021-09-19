import React, { Dispatch } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import { ProductCartState } from "../../store/reducers/cartReducers";
import { SetStateAction } from "react";
import { useDispatch } from "react-redux";

import {
  ADD_CHECKOUT_ITEM,
  REMOVE_CHECKOUT_ITEM,
} from "../../store/constants/checkoutConstants";
import { removeItemFromCart } from "../../store/actions/cartActions";

const CartItem = ({
  product,
  setChoosenValues,
  choosenValues,
}: {
  product: ProductCartState;
  setChoosenValues: Dispatch<SetStateAction<number[]>>;
  choosenValues?: number[];
}) => {
  const dispatch = useDispatch();
  const { cart_id, name, price, quantity, thumbnail, id } = product;

  const handleRemoveCartItem = () => {
    choosenValues?.includes(cart_id) &&
      setChoosenValues((prev) => prev.filter((x) => x !== cart_id));

    choosenValues?.includes(cart_id) &&
      dispatch({
        type: REMOVE_CHECKOUT_ITEM,
        payload: product,
      });
    dispatch(removeItemFromCart(cart_id, id));
  };

  const handleUncheckCartItem = () => {
    choosenValues?.includes(cart_id)
      ? setChoosenValues((prev) => prev.filter((x) => x !== cart_id))
      : setChoosenValues((prev) => [...prev, cart_id]);
    choosenValues?.includes(cart_id)
      ? dispatch({
          type: REMOVE_CHECKOUT_ITEM,
          payload: product,
        })
      : dispatch({
          type: ADD_CHECKOUT_ITEM,
          payload: product,
        });
  };

  return (
    <div className="flex flex-row mb-6">
      <div className="mr-3 md:mr-6 flex-shrink-0 flex items-start">
        <div className="flex flex-row items-center">
          <div className="mr-4 flex items-center flex-initial">
            <input
              type="checkbox"
              name=""
              id={cart_id.toString()}
              className="w-4 h-4"
              checked={choosenValues?.includes(cart_id)}
              onChange={handleUncheckCartItem}
            />
          </div>
          <img
            src={thumbnail}
            className="w-28 h-20 md:w-36 md:h-28 rounded-md object-cover "
            alt=""
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-medium md:mb-2 text-md sm:text-lg">{name}</h3>
        <p className="font-bold mb-2 md:mb-4 ">
          Rp {price} <span className="text-xs"> / kg</span>
        </p>
        <div className="text-sm space-y-2">
          <div className="flex flex-row mb-3 items-center">
            <span className="text-blue-primary font-medium mr-2">
              {quantity} kg
            </span>
            <button className="ml-auto">
              <TrashIcon
                className="w-5 h-5 text-gray"
                onClick={handleRemoveCartItem}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
