import React from "react";
import CartItem, { CartItemProps } from "./CartItem";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { ChatAltIcon } from "@heroicons/react/solid";

type CartCommodityProps = {
  name: string;
  items: CartItemProps[];
};

const CartCommodity = ({ name, items }: CartCommodityProps) => {
  return (
    <div className="shadow px-6 py-8 mb-6 ">
      <div className="flex flex-row items-center mb-4">
        <input type="checkbox" name="" id="1" className="mr-4 w-4 h-4" />
        <label htmlFor="1" className="flex flex-row items-center">
          <ShoppingBagIcon className="w-5 h-5 mr-2" />
          <h3 className="text-md md:text-lg mr-5">{name}</h3>
          <button className="flex flex-row items-center text-blue-primary">
            <ChatAltIcon className="w-4 h-4 mr-2" /> <u className='text-sm text-left'>Chat Sekarang</u>
          </button>
        </label>
      </div>
      <div>
        {items.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default CartCommodity;
