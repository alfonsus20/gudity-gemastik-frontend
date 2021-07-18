import React from "react";
import { Link } from "react-router-dom";
import DashboardBanner from "../../components/DashboardBanner";

const Prediction = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Komoditas Anda</h2>
      <DashboardBanner description="Prediksi harga komoditas di masadepan dan kesuksesan bisnismu agar dapat membantu anda dalam usaha di masa mendatang." />
      <div className="flex flex-row justify-around max-w-4xl mx-auto">
        <Link
          to="/dashboard/prediksi/prediksi-kesuksesan"
          className="flex flex-col items-center p-8 shadow w-64 rounded-md"
        >
          <div>
            <img
              src="/assets/icons/prediksi-kesuksesan.png"
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
              src="/assets/icons/prediksi-harga.png"
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