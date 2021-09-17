import React from "react";
import Header from "../../components/Header";
import Tab from "../../components/Tab";
import OrderWaitingPayment from "../../components/order/OrderWaitingPayment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getOrderList } from "../../store/actions/orderActions";

const OrderList = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const { orderList, loading } = useSelector(
    (state: RootState) => state.orderList
  );

  React.useEffect(() => {
    if (userInfo && userInfo.id) {
      dispatch(getOrderList(userInfo.id));
    }
  }, [dispatch, userInfo]);

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
                <div className="space-y-2 mb-6">
                  {<OrderWaitingPayment variant="dikemas" />}
                </div>
              ),
            },
            {
              title: "Dalam Pengiriman",
              content: (
                <div className="space-y-2 mb-6">
                  {<OrderWaitingPayment variant="diantar" />}
                </div>
              ),
            },
            {
              title: "Selesai",
              content: (
                <div className="space-y-2 mb-6">
                  {<OrderWaitingPayment variant="diterima" />}
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default OrderList;
