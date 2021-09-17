import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";
import { useParams, useHistory } from "react-router-dom";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentDetail } from "../../store/actions/paymentActions";
import { ToastContainer } from "react-toastify";
import { FETCH_PAYMENT_DETAIL_RESET } from "../../store/constants/paymentConstants";

const OrderDetail = () => {
  const { paymentCode } = useParams<{ paymentCode: string }>();
  const { payment, loading } = useSelector(
    (state: RootState) => state.paymentDetail
  );
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPaymentDetail(paymentCode));
  }, [dispatch, paymentCode]);

  React.useEffect(() => {
    return () => {
      dispatch({ type: FETCH_PAYMENT_DETAIL_RESET });
    };
  }, []);

  return (
    <div className="mt-20">
      <Header title="Detail Pemesanan" />
      <div className="">
        <ProgressBar status={payment.paymentStatus} />
        <div className="shadow rounded-md max-w-screen-xl mx-auto px-8 py-12 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="col-span-1">
              <p>Nomor Pemesanan</p>
              <p className="font-semibold">{payment.code}</p>
            </div>
            <div className="col-span-1">
              <p>Tanggal Transaksi</p>
              <p className="font-semibold">27 Juli 2021, 02:18</p>
            </div>
            <div className="col-span-1">
              <p>Metode Pembayaran</p>
              <p className="font-semibold">{payment.bankName}</p>
            </div>
            <div className="col-span-1">
              <p>Total Pembayaran</p>
              <p className="font-semibold">Rp {payment.totalPrice}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-auto mb-4 md:mb-0">
              <p className="font-semibold">Alamat Pengiriman</p>
              <p>{userInfo.address || "-"}</p>
              <p>{userInfo.phone || "-"}</p>
            </div>
            <div style={{ flex: "0 0 auto" }} className="w-full md:w-80">
              <Sidebar
                title="Rincian Pembayaran"
                items={[
                  { left: "Subtotal", right: payment.totalPrice },
                  { left: "Biaya Pengiriman", right: 0 },
                ]}
                total={payment.totalPrice}
              />
            </div>
          </div>
        </div>
        <div className="shadow rounded-md max-w-screen-xl mx-auto px-8 py-12 mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Produk yang Dipesan
          </h3>
          {payment.products &&
            payment.products.map((product) => (
              <div className="flex flex-row  mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={product.thumbnail}
                    className="w-32 h-24 rounded-md object-cover"
                    alt="product"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between flex-auto ">
                  <div className="mb-2">
                    <p className="text-lg font-semibold">{product.name}</p>
                    <p className="text-sm">{product.quantity} kg</p>
                    <p className="text-sm">
                      <span className="text-blue-primary font-semibold">
                        Rp {product.price}
                      </span>
                      / kg
                    </p>
                  </div>
                  <div className="flex flex-row items-center space-x-2 sm:space-x-6">
                    {payment.paymentStatus === "diterima" && (
                      <Button
                        text="Beri Penilaian"
                        variant="secondary"
                        pathName={`orders/${payment.id}/review`}
                      />
                    )}
                    <Button
                      text="Beli Lagi"
                      variant="primary"
                      pathName={`produk/${product.id}`}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <ToastContainer autoClose={2000} position="bottom-right" />
    </div>
  );
};

export default OrderDetail;
