import React from "react";
import Underline from "../components/Underline";
import NewsCard from "../components/NewsCard";
import Button from "../components/Button";

const News = () => {
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
                Informasi yang Anda Butuhkan.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-8">
            <h2 className="text-center text-4xl font-semibold mb-4">
              Kumpulan Berita
            </h2>
            <Underline backgroundColor="#110828" center />
          </div>
          <div className="grid grid-cols-3 max-w-screen-lg mx-auto gap-x-4 gap-y-6 mb-8">
            {[...Array(9)].map((_) => (
              <NewsCard
                title="Penyaluran BLT UMKM Rp 1,2 Juta Tersendat karena COVID Makin Gawat"
                content="PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi dengan PT Permodalan Nasional Madani (Persero) atau PNM meluncurkan program pembiayaan renovasi rumah yang juga digunakan untuk tempat usaha atau mendukung UMKM."
                colspan={1}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => console.log("aa")}
              color="black"
              backgroundColor="transparent"
              border="2px solid black"
            >
              Lihat Lebih Banyak
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
