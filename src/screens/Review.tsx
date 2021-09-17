import ReviewCard from "../components/card/ReviewCard";
import Header from "../components/Header";
import { useParams } from "react-router";
import { ToastContainer } from "react-toastify";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getOrderDetail } from "../store/actions/orderActions";

const Review = () => {
  const {
    auth: { userInfo },
    orderDetail,
  } = useSelector((state: RootState) => state);
  const { orderId } = useParams<{ orderId: string }>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (userInfo.id) {
      dispatch(getOrderDetail(orderId, userInfo.id));
    }
  }, [userInfo]);

  return (
    <div className="mt-20">
      <Header title="Beri Penilaian" />
      <div className="max-w-screen-xl mx-auto px-8 py-8">
        {orderDetail.order && orderDetail.order.products && (
          <ReviewCard
            supplierName={orderDetail.order.supplierName}
            products={orderDetail.order.products}
          />
        )}
      </div>
      <ToastContainer autoClose={2000} position="bottom-right" />
    </div>
  );
};

export default Review;
