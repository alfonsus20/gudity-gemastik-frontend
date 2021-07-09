import React from "react";
import Underline from "../components/Underline";
import Button from "../components/Button";
import InputField from "../components/InputField";
import UmkmCard from "../components/UmkmCard";
import Features from "../components/Features";

const Umkm = () => {
  return (
    <div>
      <div className="min-h-screen relative">
        <div
          className="w-full min-h-screen relative z-10 pt-10 text-white flex items-center"
          style={{
            background:
              "linear-gradient(86.97deg, rgba(0, 0, 0, 0.95) -0.91%, rgba(7, 11, 18, 0) 131.36%), url(assets/backgrounds/berita.jpg)",
          }}
        >
          <div className="max-w-screen-xl mx-auto w-full px-8">
            <div className="font-semibold">
              <h1 className="text-5xl my-1 leading-snug">
                Cari dan Temukan <br />
                Berbagai Macam UMKM yang Tersedia.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-center text-4xl font-semibold mb-4">
              Kumpulan UMKM
            </h2>
            <Underline backgroundColor="#110828" center />
          </div>
          <div className="flex flex-row justify-center items-center space-x-4 mb-4">
            <InputField
              type="date"
              onChange={() => console.log("object")}
              value=""
              className="border-2 border-blue-marker"
            />
            <InputField
              type="text"
              onChange={() => console.log("object")}
              value=""
              className="border-2 border-blue-marker"
              placeholder="Cari UMKM"
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
          <div className="grid grid-cols-3 max-w-screen-xl mx-auto gap-x-6 gap-y-11 mb-12">
            <UmkmCard
              title="Sumber Jaya UMKM"
              description="Menjual berbagai macam pernak pernik untuk oleh - oleh khas Jawa Timur dengan harga miring dengan kualitas OK!"
              location="Pertokoan LalaLili Madiun, Jl Lalala no 30, Jawa Timur"
              telephone="0811-9792-0234"
              weekdayOpenHours="07.00 - 15.30"
              weekendOpenHours="07.00 - 15.30"
            />
            <UmkmCard
              title="Sumber Jaya UMKM"
              description="Menjual berbagai macam pernak pernik untuk oleh - oleh khas Jawa Timur dengan harga miring dengan kualitas OK!"
              location="Pertokoan LalaLili Madiun, Jl Lalala no 30, Jawa Timur"
              telephone="0811-9792-0234"
              weekdayOpenHours="07.00 - 15.30"
              weekendOpenHours="07.00 - 15.30"
            />
            <UmkmCard
              title="Sumber Jaya UMKM"
              description="Menjual berbagai macam pernak pernik untuk oleh - oleh khas Jawa Timur dengan harga miring dengan kualitas OK!"
              location="Pertokoan LalaLili Madiun, Jl Lalala no 30, Jawa Timur"
              telephone="0811-9792-0234"
              weekdayOpenHours="07.00 - 15.30"
              weekendOpenHours="07.00 - 15.30"
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

export default Umkm;
