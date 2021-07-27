import { ChatAltIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import React from "react";
import { PurchasedProductState } from "../store/reducers/orderReducers";
import Button from "./Button";
import OrderBadge, { OrderBadgeProps } from "./order/OrderBadge";

type ProductInfo = {
  name: string;
  weight: number;
  price: number;
  image: string;
};

type TransactionInfo = {
  paymentCode: string;
  orderDate: string;
  paymentMethod: string;
  paymentTotal: number;
};

interface OrderCardProps extends OrderBadgeProps, TransactionInfo {
  products: PurchasedProductState[];
}

const OrderCard = ({
  type,
  products,
  paymentCode,
  orderDate,
  paymentMethod,
  paymentTotal,
}: OrderCardProps) => {
  const getProductCondition = (): string => {
    switch (type) {
      case "waitingPayment":
        return "Produk sedang Dipesan";
      case "onDelivery":
        return "Produk telah Dipesan";
      case "done":
        return "Produk telah Tiba";
      default:
        return "";
    }
  };

  return (
    <div className="shadow rounded-md max-w-screen-xl mx-auto p-8 mb-8">
      <div className="relative flex flex-col mb-4 md:mb-0">
        <h3 className="text-xl font-semibold text-center mb-4">
          {getProductCondition()}
        </h3>
        <OrderBadge type={type} />
      </div>
      <div className="flex flex-row items-center mb-4">
        <ShoppingBagIcon className="w-5 h-5 mr-2" />
        <h3 className="text-md md:text-lg mr-5">{paymentCode}</h3>
        <button className="flex flex-row items-center text-blue-primary">
          <ChatAltIcon className="w-4 h-4 mr-2" />{" "}
          <u className="text-sm text-left">Chat Sekarang</u>
        </button>
      </div>
      {products.map((product) => (
        <div className="flex flex-row  mb-4">
          <div className="flex-shrink-0 mr-4">
            <img
              src={`/assets/pictures/kopi.jpg`}
              className="w-32 h-24 rounded-md object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between flex-auto ">
            <div className="mb-2">
              <p className="text-lg font-semibold">{product.product_name}</p>
              <p className="text-sm">{product.product_quantity} kg</p>
              <p className="text-sm">
                <span className="text-blue-primary font-semibold">
                  Rp {product.product_price}
                </span>
                / kg
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <Button text="Beri Penilaian" variant="secondary" />
            </div>
          </div>
        </div>
      ))}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="col-span-1">
          <p>Tanggal Transaksi</p>
          <p className="font-semibold">{orderDate}</p>
        </div>
        <div className="col-span-1">
          <p>Metode Pembayaran</p>
          <p className="font-semibold">{paymentMethod}</p>
        </div>
        <div className="col-span-1">
          <p>Total Pembayaran</p>
          <p className="font-semibold">{paymentTotal}</p>
        </div>
      </div>
      <div className="flex flex-row gap-x-2 justify-end">
        <Button
          text="Bayar Sekarang"
          variant="primary"
          pathName={`pembayaran/${paymentCode}`}
        />
        <Button
          text="Lihat Detail Pesanan"
          variant="primary"
          pathName={`orders/${paymentCode}`}
        />
      </div>
    </div>
  );
};

export default OrderCard;
