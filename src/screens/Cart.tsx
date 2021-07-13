import React from "react";
import CartCommodity from "../components/cart/CartCommodity";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Wrapper from "../components/Wrapper";

const Cart = () => {
  return (
    <div className="mt-20">
      <Header title="Keranjang Belanja" />
      <Wrapper>
        <Wrapper.Left>
          <CartCommodity
            name="Komoditas Kopi Lalala"
            items={[
              {
                price: 3725,
                name: "Kopi Robusta (Masak Pohon)",
                measurement: "gram",
                amount: 100,
                image: "kopi.jpg",
              },
              {
                price: 3725,
                name: "Kopi Robusta (Masak Pohon)",
                measurement: "gram",
                amount: 100,
                image: "kopi.jpg",
              },
            ]}
          />
          <CartCommodity
            name="Komoditas Guls NaNaNa"
            items={[
              {
                price: 3725,
                name: "Kopi Robusta (Masak Pohon)",
                measurement: "gram",
                amount: 100,
                image: "gula.jpg",
              },
            ]}
          />
          <CartCommodity
            name="Komoditas Kopi Lalala"
            items={[
              {
                price: 3725,
                name: "Kopi Robusta (Masak Pohon)",
                measurement: "gram",
                amount: 100,
                image: "kopi.jpg",
              },
            ]}
          />
        </Wrapper.Left>
        <Wrapper.Right>
          <Sidebar
            title="Total Biaya"
            buttonText="Pesan Sekarang"
            buttonAction={() => console.log("object")}
            total={1286020}
            items={[{ left: "Total Produk", right: 2 }]}
          />
        </Wrapper.Right>
      </Wrapper>
    </div>
  );
};

export default Cart;
