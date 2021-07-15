import React from "react";
import Button from "../../components/Button";
import { DASHBOARD_FEATURES } from "../../utils/constants";

const Home = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-5">Halaman Utama</h2>
      <div
        className="flex flex-row px-6 py-8 rounded-md"
        style={{ backgroundColor: "#F0F4FF" }}
      >
        <div className="flex-auto">
          <h3 className="font-semibold text-xl mb-2">
            Selamat Datang Bocah Mozaik!
          </h3>
          <p className="text-lg">
            “Hal terburuk tentang bisnis adalah keraguan.” - Napoleon. Hilangkan
            keraguanmu dengan analisis dan prediksi sesering mungkin. Have a
            nice day!
          </p>
        </div>
        <div className="flex-shrink-0 hidden md:block">
          <img src="/assets/icons/visualization.png" alt="analisis" />
        </div>
      </div>
      <div className="grid grid-cols-4">
        {DASHBOARD_FEATURES.map((feature, i) => (
          <p
            className={`${feature.backgroundColor} mx-auto p-2 col-span-1 w-40 text-white rounded-md text-center flex items-center font-medium`}
            key={i}
          >
            {feature.text}
          </p>
        ))}
      </div>
      <div className="flex flex-row shadow p-6 max-w-xl rounded-md items-center mx-auto">
        <p>
          Lakukan Analisis dan Prediksi sebanyak mungkin untuk memberikan hasil
          yang maksimal dalam perencanaan usaha anda kedepan
        </p>
        <div className="flex-shrink-0">
          <Button variant="secondary" text="Mulai Sekarang" size="md" />
        </div>
      </div>
    </div>
  );
};

export default Home;
