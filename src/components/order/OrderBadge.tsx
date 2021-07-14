import React from "react";

export interface OrderBadgeProps {
  type: "waitingPayment" | "onDelivery" | "done";
}

const OrderBadge = ({ type }: OrderBadgeProps) => {
  if (type === "waitingPayment") {
    return (
      <div className="rounded-full px-4 py-2  bg-indigo-400 text-white text-xs md:absolute right-0 top-0 mx-auto">
        Menunggu Pembayaran
      </div>
    );
  } else if (type === "onDelivery") {
    return (
      <div className="rounded-full px-4 py-2  bg-yellow-400 text-white text-xs md:absolute right-0 top-0 mx-auto">
        Dalam Pengiriman
      </div>
    );
  } else {
    return (
      <div className="rounded-full px-4 py-2  bg-green-400 text-white text-xs md:absolute right-0 top-0 mx-auto">
        Selesai
      </div>
    );
  }
};

export default OrderBadge;
