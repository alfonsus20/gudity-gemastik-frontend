import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";
import Tab from "../../components/Tab";

const OrderList = () => {
  return (
    <div className="mt-20">
      <Header title="Detail Pemesanan" />
      <Tab
        tabs={[
          {
            title: "ATM BNI",
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
                <li>Masukkan nomor Virtual Account Anda (476420743909).</li>
                <li>
                  Tagihan yang harus dibayarkan akan muncul pada layar
                  konfirmasi
                </li>
                <li>Konfirmasi, apabila telah sesuai, lanjutkan transaksi.</li>
                <li>Transaksi Anda telah selesai.</li>{" "}
              </ol>
            ),
          },
          {
            title: "Mobile Banking BNI",
            content: <div className="space-y-2 mb-6"></div>,
          },
          {
            title: "Internet Banking BNI",
            content: <div className="space-y-2 mb-6"></div>,
          },
        ]}
      />
    </div>
  );
};

export default OrderList;
