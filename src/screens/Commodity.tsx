import React from "react";
import Underline from "../components/Underline";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Features from "../components/Features";
import CommodityCard from "../components/CommodityCard";

const Commodity = () => {
  return (
    <div>
      <div className="min-h-screen relative">
        <div
          className="w-full min-h-screen relative z-10 pt-10 text-white flex items-center"
          style={{
            background:
              "linear-gradient(86.97deg, rgba(0, 0, 0, 0.95) -0.91%, rgba(7, 11, 18, 0) 131.36%), url(assets/backgrounds/komoditas.jpg)",
          }}
        >
          <div className="max-w-screen-xl mx-auto w-full px-8">
            <div className="font-semibold">
              <h1 className="text-5xl my-1 leading-snug">
                Cari dan Temukan <br />
                Komoditas Terbaik Kami
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="mb-8">
            <h2 className="text-center text-4xl font-semibold mb-4">
              Kumpulan Komoditas
            </h2>
            <Underline backgroundColor="#110828" center />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center space-x-4 mb-8">
            <InputField
              type="date"
              onChange={() => console.log("object")}
              className="border-2 border-blue-marker"
              value=""
            />
            <InputField
              type="text"
              onChange={() => console.log("object")}
              value=""
              placeholder="Cari UMKM"
              className="mb-4 md:mb-0 border-2 border-blue-marker"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
            />
          </div>
          <div className="max-w-screen-lg mx-auto mb-12">
            <CommodityCard
              image="kopi.jpg"
              name="Komoditas Kopi Lalalala"
              description="Kualitas terjamin, harga bersahabat, lalalalalalalalalalalala"
              location='Lalalala, Kec. Lalala, Kabupaten Lalala, Jawa Timur, Kode Pos Lalala'
              establishedIn={2010}
              relationship='10.000 pelanggan dan 3 perkebunan'
            />
            <CommodityCard
              image="gula.jpg"
              name="Komoditas Gula Lalalala"
              description="Kualitas terjamin, harga bersahabat, lalalalalalalalalalalala"
              location='Lalalala, Kec. Lalala, Kabupaten Lalala, Jawa Timur, Kode Pos Lalala'
              establishedIn={2010}
              relationship='10.000 pelanggan dan 10 Pabrik'
            />
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => console.log("aa")}
              className="bg-transparent border-2 border-black"
            >
              Lihat Lebih Banyak
            </Button>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Commodity;
