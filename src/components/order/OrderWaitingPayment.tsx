import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getOrderList } from "../../store/actions/orderActions";
import OrderCard from "../OrderCard";

const OrderWaitingPayment = () => {
  const dispatch = useDispatch();
  const { orderList, loading } = useSelector(
    (state: RootState) => state.orderList
  );

  React.useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);

  return (
    <div>
      {orderList.map((orderItem) => (
        <OrderCard
          type="waitingPayment"
          paymentCode={orderItem.code}
          orderDate="27 Juli 2021, 2:18"
          paymentMethod={orderItem.payment_bank}
          paymentTotal={orderItem.total_payment}
          products={orderItem.products}
        />
      ))}
    </div>
  );
};

export default OrderWaitingPayment;
