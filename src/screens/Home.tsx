import React from "react";
import Button from "../components/Button";
import Features from "../components/Features";
import NewsCard from "../components/NewsCard";
import NewsModal from "../components/NewsModal";

const Home = () => {
  return (
    <div>
      <NewsModal />
      <div className="min-h-screen relative">
        <video
          src="assets/videos/video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        ></video>
        <div
          className="w-full px-8 min-h-screen relative z-10 pt-10 text-white flex items-center"
          style={{
            background:
              "linear-gradient(86.97deg, rgba(0, 0, 0, 0.95) -0.91%, rgba(7, 11, 18, 0) 131.36%)",
          }}
        >
          <div className="max-w-screen-xl mx-auto w-full px-2">
            <div className="font-semibold">
              <h2 className="text-3xl md:text-4xl">Kami hadir</h2>
              <h1 className="text-4xl md:text-5xl my-1 leading-snug">
                Sebagai Solusi UMKM Anda <br /> dalam Proses{" "}
                <span className="highlight">Analisis</span> dan{" "}
                <span className="highlight">Prediksi</span>
                <br /> pada <span className="highlight"> masa depan.</span>
              </h1>
            </div>
            <div className="mt-6">
              <Button
                onClick={() => console.log("aa")}
                className="text-white bg-blue-primary"
              >
                Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div
          className="py-20 md:py-28 bg-white"
          style={{ borderBottomLeftRadius: "12rem" }}
        >
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:space-x-10 px-8">
            <div className="text-black w-full md:w-1/2 mb-4 md:mb-8">
              <h2 className="font-semibold text-4xl mb-6">
                Kumpulan Berita Terkini
              </h2>
              <p className="text-lg font-light mb-4">
                Baca cerita terbaru dari sekeliling kita.
              </p>
              <Button
                onClick={() => console.log("object")}
                className="border-2 border-black hidden md:block"
              >
                Lihat Lebih Banyak
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 w-full md:w-1/2">
              <NewsCard
                title="Penyaluran BLT UMKM Rp 1,2 Juta Tersendat karena COVID Makin Gawat"
                content="PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi dengan PT Permodalan Nasional Madani (Persero) atau PNM meluncurkan program pembiayaan renovasi rumah yang juga digunakan untuk tempat usaha atau mendukung UMKM."
                colspan={1}
              />
              <NewsCard
                title="Test 2"
                content="PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi dengan PT Permodalan Nasional Madani (Persero) atau PNM meluncurkan program pembiayaan renovasi rumah yang juga digunakan untuk tempat usaha atau mendukung UMKM."
                colspan={1}
              />
              <NewsCard
                title="Test 3"
                content="PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi dengan PT Permodalan Nasional Madani (Persero) atau PNM meluncurkan program pembiayaan renovasi rumah yang juga digunakan untuk tempat usaha atau mendukung UMKM."
                colspan={1}
              />
              <NewsCard
                title="Test 4"
                content="PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi dengan PT Permodalan Nasional Madani (Persero) atau PNM meluncurkan program pembiayaan renovasi rumah yang juga digunakan untuk tempat usaha atau mendukung UMKM."
                colspan={1}
              />
            </div>
            <Button
              onClick={() => console.log("object")}
              className="border-2 mt-8 border-black md:hidden"
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

export default Home;
