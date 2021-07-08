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
          <div className="max-w-screen-xl mx-auto w-full px-2">
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
      <div className="bg-black">
        <div className="py-20 bg-white" style={{ borderBottomLeftRadius: "12rem" }}>
          <div className="max-w-screen-xl mx-auto flex flex-row items-center space-x-10 px-2">
            <div className="text-black w-1/2 ">
              <h2 className="font-semibold text-4xl mb-6">
                Kumpulan Berita Terkini
              </h2>
              <p className="text-lg font-light mb-4">
                Baca cerita terbaru dari sekeliling kita.
              </p>
              <Button
                onClick={() => console.log("object")}
                backgroundColor="transparent"
                border="2px solid black"
              >
                Lihat Lebih Banyak
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2 w-1/2">
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
      <div className="bg-gray py-20">
        <div className="flex flex-row max-w-screen-xl mx-auto text-white px-2">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="font-medium text-3xl mb-6">LOGO</div>
            <p className="font-medium text-2xl mb-6">
              Hal apa saja yang dibutuhkan untuk mengembangkan UMKM?{" "}
            </p>
            <div>
              <Button onClick={() => console.log("a")} color="white">
                Coba Sekarang
              </Button>
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <div className="flex flex-row items-center mb-6">
              <div style={{ flex: "0 0 6rem" }} className="px-1">
                <img
                  src="assets/icons/analisis.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="px-6 border-l-2 ml-6">
                <h4 className="text-2xl font-medium">ANALISIS</h4>
                <p className="text-base font-light">
                  PT Sarana Multigriya Finansial (Persero) atau SMF
                  berkolaborasi dengan PT Permodalan Nasional mendukung UMKM.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center mb-6">
              <div style={{ flex: "0 0 6rem" }} className="px-1">
                <img
                  src="assets/icons/analisis.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="px-6 border-l-2 ml-6">
                <h4 className="text-2xl font-medium">ANALISIS</h4>
                <p className="text-base font-light">
                  PT Sarana Multigriya Finansial (Persero) atau SMF
                  berkolaborasi dengan PT Permodalan Nasional mendukung UMKM.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center mb-6">
              <div style={{ flex: "0 0 6rem" }} className="px-1">
                <img
                  src="assets/icons/analisis.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="px-6 border-l-2 ml-6">
                <h4 className="text-2xl font-medium">ANALISIS</h4>
                <p className="text-base font-light">
                  PT Sarana Multigriya Finansial (Persero) atau SMF
                  berkolaborasi dengan PT Permodalan Nasional mendukung UMKM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
