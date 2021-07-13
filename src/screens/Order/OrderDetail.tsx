import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";

const OrderDetail = () => {
  return (
    <div className="mt-20">
      <Header title="Detail Pemesanan" />
      <div className="">
        <ProgressBar />
        <div className="shadow rounded-md max-w-screen-xl mx-auto px-8 py-12 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="col-span-1">
              <p>Nomor Pemesanan</p>
              <p className="font-semibold">20210709001</p>
            </div>
            <div className="col-span-1">
              <p>Tanggal Transaksi</p>
              <p className="font-semibold">9 Juli 2021, 22:18</p>
            </div>
            <div className="col-span-1">
              <p>Metode Pembayaran</p>
              <p className="font-semibold">Bank BNI</p>
            </div>
            <div className="col-span-1">
              <p>Total Pembayaran</p>
              <p className="font-semibold">Rp 4.999.000</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-auto mb-4 md:mb-0">
              <p className="font-semibold">Alamat Pengiriman</p>
              <p>Bocah Mozaik</p>
              <p>(+62)8113552304</p>
              <p>
                Garden Dian Regency Jl Edelweis 1 no 14, Lowokwaru, Malang, Jawa
                Timur
              </p>
            </div>
            <div style={{ flex: "0 0 auto" }} className='w-full md:w-80'>
              <Sidebar
                title="Rincian Pembayaran"
                items={[
                  { left: "Subtotal", right: "Rp 4.975.000" },
                  { left: "Biaya Pengiriman", right: "Rp 24.000" },
                ]}
                total={4999000}
              />
            </div>
          </div>
        </div>
        <div className="shadow rounded-md max-w-screen-xl mx-auto px-8 py-12 mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Produk yang Dipesan
          </h3>
          <div className="flex flex-row  mb-4">
            <div className="flex-shrink-0 mr-4">
              <img
                src="/assets/pictures/kopi.jpg"
                className="w-32 h-24 rounded-md object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between flex-auto ">
              <div className="mb-2">
                <p className="text-lg font-semibold">
                  Kopi Robusta (Masak Pohon)
                </p>
                <p className="text-sm">1000 gram</p>
                <p className="text-sm">
                  <span className="text-blue-primary font-semibold">
                    Rp250.000
                  </span>
                  / gram
                </p>
              </div>
              <div className="flex flex-row items-center space-x-2 sm:space-x-6">
                <Button text="Beli Penilaian" variant="secondary" />
                <Button text="Beli Lagi" variant="primary" />
              </div>
            </div>
          </div>
          <div className="flex flex-row  mb-4">
            <div className="flex-shrink-0 mr-4">
              <img
                src="/assets/pictures/kopi.jpg"
                className="w-32 h-24 rounded-md object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between flex-auto ">
              <div className="mb-2">
                <p className="text-lg font-semibold">
                  Kopi Robusta (Masak Pohon)
                </p>
                <p className="text-sm">1000 gram</p>
                <p className="text-sm">
                  <span className="text-blue-primary font-semibold">
                    Rp250.000
                  </span>
                  / gram
                </p>
              </div>
              <div className="flex flex-row items-center space-x-2 sm:space-x-6">
                <Button text="Beri Penilaian" variant="secondary" />
                <Button text="Beli Lagi" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
