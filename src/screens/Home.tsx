import React from "react";
import Button from "../components/Button";
import QuickAccess from "../components/quick-access/QuickAccess";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <video
        src="assets/videos/video.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      ></video>
      <QuickAccess/>
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
          <div className='mt-6'>
            <Button onClick={() => console.log("aa")}>Lebih Lanjut</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
