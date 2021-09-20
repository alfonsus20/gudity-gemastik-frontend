import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import OrderCard from "../OrderCard";

export type OrderWaitingPaymentState = {
  variant: "dikemas" | "diantar" | "diterima";
};

const OrderWaitingPayment = ({ variant }: OrderWaitingPaymentState) => {
  const { orderList } = useSelector((state: RootState) => state.orderList);

  const shownOrders = orderList.filter(
    (order) => order.paymentStatus === variant
  );

  return (
    <div>
      {shownOrders.length > 0 ? (
        shownOrders.map((orderItem) => (
          <OrderCard
            variant={variant}
            supplierName={orderItem.supplierName}
            paymentCode={orderItem.code}
            orderDate="27 Juli 2021, 2:18"
            paymentMethod={orderItem.bankName}
            paymentTotal={orderItem.totalPrice}
            products={orderItem.products}
            orderId = {orderItem.id}
          />
        ))
      ) : (
        <div
          style={{ minHeight: 200 }}
          className="flex items-center justify-center"
        >
          <h2 className="text-center text-xl">Tidak ada data</h2>
        </div>
      )}
    </div>
  );
};

export default OrderWaitingPayment;
