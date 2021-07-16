import React from "react";
import Header from "../../components/Header";
import Tab from "../../components/Tab";
import OrderCard from "../../components/OrderCard";

const OrderList = () => {
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
                  {[
                    "waitingPayment" as const,
                    "onDelivery" as const,
                    "done" as const,
                  ].map((item) => (
                    <OrderCard
                      type={item}
                      orderId={20210709001}
                      orderDate="9 Juli 2021, 22:18"
                      paymentMethod="Bank BNI"
                      paymentTotal={4999000}
                      commodityName="Komoditas Kopi Lalala"
                      products={[
                        {
                          name: "Kopi Robusta (Masak Pohon)",
                          weight: 1000,
                          price: 200000,
                          image: "kopi.jpg",
                        },
                        {
                          name: "Kopi Robusta (Masak Pohon)",
                          weight: 1000,
                          price: 200000,
                          image: "kopi.jpg",
                        },
                      ]}
                    />
                  ))}
                </div>
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
