import React from "react";
import Underline from "../components/Underline";
import NewsCard from "../components/NewsCard";
import Button from "../components/Button";
import InputField from "../components/InputField";
import NewsModal from "../components/NewsModal";
import Features from "../components/Features";

const News = () => {
  return (
    <div>
      <NewsModal />
      <div className="min-h-screen ">
        <div
          className="w-full min-h-screen z-10 pt-10 text-white flex items-center"
          style={{
            background:
              "linear-gradient(86.97deg, rgba(0, 0, 0, 0.95) -0.91%, rgba(7, 11, 18, 0) 131.36%), url(assets/backgrounds/berita.jpg)",
          }}
        >
          <div className="max-w-screen-xl mx-auto w-full px-8">
            <div className="font-semibold">
              <h1 className="text-5xl my-1 leading-snug">
                Cari dan Temukan <br />
                Informasi yang Anda Butuhkan.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="mb-8">
            <h2 className="text-center text-4xl font-semibold mb-4">
              Kumpulan Berita
            </h2>
            <Underline backgroundColor="#110828" center />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center space-x-4 mb-4">
            <InputField
              type="date"
              onChange={() => console.log("object")}
              value=""
              className=""
              style={{ border: "2px solid #1D2D74" }}
            />
            <InputField
              type="text"
              onChange={() => console.log("object")}
              value=""
              className="mb-4 md:mb-0"
              placeholder="Cari Berita"
              style={{ border: "2px solid #1D2D74" }}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-lg mx-auto gap-x-4 gap-y-11 mb-12">
            {[...Array(9)].map((_, i) => (
              <NewsCard
                key={i}
                title="Penyaluran BLT UMKM Rp 1,2 Juta Tersendat karena COVID Makin Gawat"
                content="PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi dengan PT Permodalan Nasional Madani (Persero) atau PNM meluncurkan program pembiayaan renovasi rumah yang juga digunakan untuk tempat usaha atau mendukung UMKM."
                colspan={1}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="tertiary" text="Lihat Lebih Banyak" size="lg" />
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default News;
