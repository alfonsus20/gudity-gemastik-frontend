import React from "react";
import Header from "../../components/Header";
import Tab from "../../components/Tab";
import OrderCard from "../../components/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderList } from "../../store/actions/orderActions";
import { RootState } from "../../store";
import OrderWaitingPayment from "../../components/order/OrderWaitingPayment";

const OrderList = () => {
  // const dispatch = useDispatch();
  // const { orderList, loading } = useSelector(
  //   (state: RootState) => state.orderList
  // );
  // React.useEffect(() => {
  //   dispatch(getOrderList());
  // }, [dispatch]);

  return (
    <div className="mt-20">
      <Header title="Detail Pemesanan" />
      <div className="max-w-screen-xl mx-auto px-8 py-8">
        <h3 className="text-center text-2xl font-semibold mb-8">
          Daftar Pesanan Anda
        </h3>
        <Tab
          tabs={[
            {
              title: "Dalam Pemesanan",
              content: (
                <div className="space-y-2 mb-6">{<OrderWaitingPayment />}</div>
              ),
            },
            {
              title: "Dalam Pengiriman",
              content: <div className="space-y-2 mb-6"></div>,
            },
            {
              title: "Selesai",
              content: <div className="space-y-2 mb-6"></div>,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default OrderList;
