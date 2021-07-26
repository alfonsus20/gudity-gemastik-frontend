import React from "react";
import CartItem from "./CartItem";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { ChatAltIcon } from "@heroicons/react/solid";
import { ProductCartState } from "../../store/reducers/cartReducers";

type CartCommodityProps = {
  name: string;
  items: ProductCartState[];
  id: number;
};

const CartCommodity = ({ name, items, id }: CartCommodityProps) => {
  const [choosenValues, setChoosenValues] = React.useState<Array<number>>([]);
  const [initialValues, setInitialValues] = React.useState<Array<number>>(
    items.map((item) => item.cart_id)
  );

  return (
    <div className="shadow px-6 py-8 mb-6 ">
      <div className="flex flex-row items-center mb-4">
        <input
          type="checkbox"
          name=""
          id={`supplier_${id}`}
          className="mr-4 w-4 h-4"
          checked={
            choosenValues.sort().toString() === initialValues.sort().toString()
          }
          onChange={() =>
            choosenValues.sort().toString() === initialValues.sort().toString()
              ? setChoosenValues([])
              : setChoosenValues(initialValues)
          }
        />
        <label
          htmlFor={`supplier_${id}`}
          className="flex flex-row items-center"
        >
          <ShoppingBagIcon className="w-5 h-5 mr-2" />
          <h3 className="text-md md:text-lg mr-5">{name}</h3>
          <button className="flex flex-row items-center text-blue-primary">
            <ChatAltIcon className="w-4 h-4 mr-2" />{" "}
            <u className="text-sm text-left">Chat Sekarang</u>
          </button>
        </label>
      </div>
      <div>
        {items.map((item, i) => (
          <CartItem
            {...item}
            key={item.cart_id}
            setChoosenValues={setChoosenValues}
            choosenValues={choosenValues}
          />
        ))}
      </div>
    </div>
  );
};

export default CartCommodity;
