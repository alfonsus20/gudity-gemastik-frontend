import React from "react";
import Underline from "../components/Underline";
import Button from "../components/Button";
import TextField from "../components/TextField";
import Features from "../components/Features";
import CommodityCard from "../components/CommodityCard";
import { SearchIcon } from "@heroicons/react/outline";

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
            <TextField
              type="date"
              onChange={() => console.log("object")}
              value=""
              variant='secondary'
            />
            <TextField
              type="text"
              onChange={() => console.log("object")}
              value=""
              placeholder="Cari UMKM"
              variant='secondary'
              icon={
                <SearchIcon className='w-6 h-6'/>
              }
            />
          </div>
          <div className="max-w-screen-lg mx-auto mb-12">
            <CommodityCard
              image="kopi.jpg"
              name="Komoditas Kopi Lalalala"
              description="Kualitas terjamin, harga bersahabat, lalalalalalalalalalalala"
              location="Lalalala, Kec. Lalala, Kabupaten Lalala, Jawa Timur, Kode Pos Lalala"
              establishedIn={2010}
              relationship="10.000 pelanggan dan 3 perkebunan"
            />
            <CommodityCard
              image="gula.jpg"
              name="Komoditas Gula Lalalala"
              description="Kualitas terjamin, harga bersahabat, lalalalalalalalalalalala"
              location="Lalalala, Kec. Lalala, Kabupaten Lalala, Jawa Timur, Kode Pos Lalala"
              establishedIn={2010}
              relationship="10.000 pelanggan dan 10 Pabrik"
            />
          </div>
          <div className="flex justify-center">
            <Button
              variant="tertiary"
              className="border-black"
              text="Lihat Lebih Banyak"
              size="md"
            />
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Commodity;
