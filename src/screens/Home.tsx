import React from "react";
import Button from "../components/Button";
import NewsCard from "../components/NewsCard";
import QuickAccess from "../components/quick-access/QuickAccess";

const Home = () => {
  return (
    <div>
      <QuickAccess />
      <div className="min-h-screen relative">
        <video
          src="assets/videos/video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        ></video>
        <div
          className="w-full min-h-screen relative z-10 pt-10 text-white flex items-center"
          style={{
            background:
              "linear-gradient(86.97deg, rgba(0, 0, 0, 0.95) -0.91%, rgba(7, 11, 18, 0) 131.36%)",
          }}
        >
          <div className="max-w-screen-xl mx-auto w-full px-8">
            <div className="font-semibold">
              <h2 className="text-4xl">Kami hadir</h2>
              <h1 className="text-5xl my-1 leading-snug">
                Sebagai Solusi UMKM Anda <br /> dalam Proses{" "}
                <span className="highlight">Analisis</span> dan{" "}
                <span className="highlight">Prediksi</span>
                <br /> pada <span className="highlight"> masa depan.</span>
              </h1>
            </div>
            <div className="mt-6">
              <Button onClick={() => console.log("aa")}>Lebih Lanjut</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="max-w-screen-xl mx-auto flex flex-row items-center space-x-10 px-8">
          <div className="text-black flex-1">
            <h2 className="font-semibold text-4xl mb-6">
              Kumpulan Berita Terkini
            </h2>
            <p className="text-lg font-light mb-4">
              Baca cerita terbaru dari sekeliling kita.
            </p>
            <Button
              onClick={() => console.log("object")}
              backgroundColor="transparent"
              border = "2px solid black"
            >
              Lihat Lebih Banyak
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2" style={{ flex: "0 1 35rem" }}>
            <NewsCard
              title="Penyaluran BLT UMKM Rp 1,2 Juta Tersendat karena COVID Makin Gawat"
              content="PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi dengan PT Permodalan Nasional Madani (Persero) atau PNM meluncurkan program pembiayaan renovasi rumah yang juga digunakan untuk tempat usaha atau mendukung UMKM."
              colspan={1}
            />
            <NewsCard
              title="Penyaluran BLT UMKM Rp 1,2 Juta Tersendat karena COVID Makin Gawat"
              content="PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi dengan PT Permodalan Nasional Madani (Persero) atau PNM meluncurkan program pembiayaan renovasi rumah yang juga digunakan untuk tempat usaha atau mendukung UMKM."
              colspan={1}
            />
            <NewsCard
              title="Penyaluran BLT UMKM Rp 1,2 Juta Tersendat karena COVID Makin Gawat"
              content="PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi dengan PT Permodalan Nasional Madani (Persero) atau PNM meluncurkan program pembiayaan renovasi rumah yang juga digunakan untuk tempat usaha atau mendukung UMKM."
              colspan={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
