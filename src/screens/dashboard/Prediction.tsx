import React from "react";
import { Link } from "react-router-dom";
import DashboardBanner from "../../components/DashboardBanner";

const Prediction = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Fitur Prediksi</h2>
      <DashboardBanner description="Prediksi harga komoditas di masa depan dan kesuksesan bisnismu agar dapat membantu Anda dalam usaha di masa mendatang." />
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-around max-w-4xl mx-auto gap-4">
        <Link
          to="/dashboard/prediksi/prediksi-kesuksesan"
          className="flex flex-col items-center p-8 shadow w-64 rounded-md"
        >
          <div>
            <img
              src="/assets/pictures/prediksi-kesuksesan.png"
              className="w-full"
              alt="Prediksi Kesukesan"
            />
          </div>
          <p className="text-blue-marker text-center font-semibold">
            Prediksi Kesuksesan Bisnismu
          </p>
        </Link>
        <Link
          to="/dashboard/prediksi/prediksi-harga"
          className="flex flex-col items-center p-8 shadow w-64 rounded-md"
        >
          <div>
            <img
              src="/assets/pictures/prediksi-harga.png"
              className="w-full"
              alt="Prediksi Kesukesan"
            />
          </div>
          <p className="text-blue-marker text-center font-semibold">
            Prediksi Harga Komoditas Dimasa Depan
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Prediction;
