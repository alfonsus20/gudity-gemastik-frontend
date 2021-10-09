import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import Tab from "../components/Tab";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useParams, useHistory } from "react-router-dom";
import { getPaymentDetail } from "../store/actions/paymentActions";
import { toast, ToastContainer } from "react-toastify";
import { updateOrderStatus } from "../store/actions/orderActions";
import { FETCH_PAYMENT_DETAIL_RESET } from "../store/constants/paymentConstants";
import { longFormatDate } from "../utils/helpers";

const Payment = () => {
  const { paymentCode } = useParams<{ paymentCode: string }>();
  const { payment, loading } = useSelector(
    (state: RootState) => state.paymentDetail
  );
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(getPaymentDetail(paymentCode));
  }, [dispatch, paymentCode]);

  React.useEffect(() => {
    if (payment.paymentStatus && payment.paymentStatus !== "dikemas") {
      history.goBack();
    }
  }, [payment, history]);

  React.useEffect(() => {
    return () => {
      dispatch({ type: FETCH_PAYMENT_DETAIL_RESET });
    };
  }, [dispatch]);

  const handleCopy = () => {
    navigator.clipboard.writeText(payment.code);
    toast.success("Nomor Virtual Akun Berhasil Disalin");
  };

  const handlePayment = () => {
    dispatch(updateOrderStatus(payment.code, "shipped"));
    history.replace("/orders");
  };

  return (
    <div className="mt-20">
      <Header title="Pembayaran" />
      <div className="flex flex-col justify-center items-center space-y-4 max-w-3xl mx-auto pt-8 pb-20 px-8">
        <img src="/assets/pictures/payment.png" alt="" className="w-80 h-80" />
        <h3 className="font-semibold text-xl text-center">
          Terima kasih telah membeli produk saran komoditas kami.
        </h3>
        <p className="text-center">
          Transaksi akan diproses apabila Anda telah melakukan pembayaran dengan
          batas waktu sebelum {longFormatDate(payment.date, 1)}.
        </p>
        <div className="flex flex-col justify-center items-center space-y-1">
          <p>
            Pembayaran melalui <strong>{payment.bankName}</strong>
          </p>
          <p>Nomor Virtual Account</p>
          <div className="font-semibold transition transform hover:scale-110">
            <Button
              text={payment.code}
              variant="plain-blue"
              size="lg"
              onClick={handleCopy}
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-8">
        <h3 className="text-xl text-center font-semibold mb-6">
          Petunjuk Pembayaran
        </h3>
        {loading || !payment.bankName ? (
          <h2>Loading....</h2>
        ) : (
          <Tab
            tabs={[
              {
                title: payment.bankName,
                content: (
                  <ol className="list-decimal pl-6">
                    <li>Masukkan Kartu Anda.</li>
                    <li>Pilih Bahasa.</li>
                    <li>Masukkan PIN ATM Anda.</li>
                    <li>Pilih “Menu Lainnya”.</li>
                    <li>Pilih “Transfer”.</li>
                    <li>
                      Pilih Jenis rekening yang akan Anda gunakan (Contoh; “Dari
                      Rekening Tabungan”).
                    </li>
                    <li>Pilih “Virtual Account Billing”</li>
                    <li>
                      Masukkan nomor Virtual Account Anda ({payment.code}).
                    </li>
                    <li>
                      Tagihan yang harus dibayarkan akan muncul pada layar
                      konfirmasi
                    </li>
                    <li>
                      Konfirmasi, apabila telah sesuai, lanjutkan transaksi.
                    </li>
                    <li>Transaksi Anda telah selesai.</li>{" "}
                  </ol>
                ),
              },
              {
                title: `Mobile Banking ${payment.bankName}`,
                content: <div className="space-y-2 mb-6"></div>,
              },
              {
                title: `Internet Banking ${payment.bankName}`,
                content: <div className="space-y-2 mb-6"></div>,
              },
            ]}
          />
        )}
        <div className="flex flex-col justify-end">
          <div className="ml-auto flex flex-col mb-2">
            <Button
              text="Detail Pemesanan"
              variant="primary"
              pathName={`orders/${payment.code}`}
              size="full"
            />
            <p className="text-xs mt-2">
              Status Pembayaran : <strong>Menunggu Pembayaran</strong>
            </p>
          </div>
        </div>
      </div>
      <Wrapper>
        <Wrapper.Left>
          <div className="shadow px-8 py-6  rounded-md mb-6">
            <div className="flex flex-row items-center py-3">
              <h3 className="text-md md:text-xl mr-5 font-semibold">
                Produk yang Dipesan
              </h3>
            </div>
            <div className="mb-4">
              <div className="text-md flex flex-row">
                <div className="w-40 flex-shrink-0">Dari</div>
                <div className="font-semibold">Komoditas Kopi Lalala</div>
              </div>
              <div className="text-sm flex flex-row">
                <div className="w-40 flex-shrink-0">Pengiriman</div>
                <div>{payment.expedition}</div>
              </div>
              <div className="text-sm flex flex-row">
                <div className="w-40 flex-shrink-0">Estimasi Pengiriman</div>
                <div>
                  {longFormatDate(payment.date, 0, false)} -{" "}
                  {longFormatDate(payment.date, 4, false)}
                </div>
              </div>
            </div>
            <div>
              {payment.products &&
                payment.products.map((product, index) => (
                  <div className="text-md flex flex-row mb-4" key={index}>
                    <div>
                      <img
                        src={product.thumbnail}
                        className="w-24 h-16 sm:w-32 sm:h-24 rounded-md object-cover mr-4"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-sm">{product.quantity} kg</p>
                      <p className="text-sm">
                        Rp {product.price * product.quantity}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="mb-4">
              <div className="text-md flex flex-row">
                <div className="w-40 flex-shrink-0">Kepada</div>
                <div className="font-semibold">{userInfo.name}</div>
              </div>
              <div className="text-sm flex flex-row">
                <div className="w-40 flex-shrink-0">Email</div>
                <div>{userInfo.email}</div>
              </div>
              <div className="text-sm flex flex-row">
                <div className="w-40 flex-shrink-0">No Telepon</div>
                <div>{userInfo.phone}</div>
              </div>
              <div className="text-sm flex flex-row">
                <div className="w-40 flex-shrink-0">Alamat</div>
                <div>{userInfo.address}</div>
              </div>
            </div>
          </div>
        </Wrapper.Left>
        <Wrapper.Right>
          <Sidebar
            title="Rincian Pembayaran"
            buttonText="Lanjut"
            buttonAction={handlePayment}
            total={payment.totalPrice}
            items={[
              { left: "Subtotal", right: payment.totalPrice },
              { left: "Biaya Pengiriman", right: 0 },
            ]}
          />
        </Wrapper.Right>
      </Wrapper>
      <ToastContainer autoClose={2000} position="bottom-right" />
    </div>
  );
};

export default Payment;
