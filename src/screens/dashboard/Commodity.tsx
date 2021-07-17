import React from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

const Commodity = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Komoditas Anda</h2>
      <div
        className="px-12 py-8 rounded-md mb-6"
        style={{ backgroundColor: "#F0F4FF" }}
      >
        <h3 className="font-semibold text-2xl mb-2">
          Selamat Datang Bocah Mozaik!
        </h3>
        <p className="text-md text-purple">
          “Hal terburuk tentang bisnis adalah keraguan.” - Napoleon. Hilangkan
          keraguanmu dengan analisis dan prediksi sesering mungkin. Have a nice
          day!
        </p>
      </div>
      {/* <div className="flex-auto flex flex-col">
        <div className="flex justify-center items-center flex-auto">
          <div className="flex flex-col items-center space-y-4 flex-auto">
            <img
              src="/assets/icons/shopping.png"
              className="w-80"
              alt="Daftar Komoditas"
            />
            <div className="text-center">
              <h3 className="text-blue-marker font-semibold">
                Ingin Bergabung menjadi bagian dari Komoditas Kami?
              </h3>
              <p className="text-blue-marker text-sm">
                Dapatkan manfaat dan keuntungan bagi usaha anda
              </p>
            </div>
            <Button text="Daftar" variant="primary" className="w-32" />
          </div>
        </div>
      </div> */}
      <div className="flex flex-row mb-6">
        <div className="mr-8">
          <img
            src="/assets/pictures/kopi.jpg"
            className="w-60 rounded-md"
            alt="kopi"
          />
        </div>
        <div className="space-y-2 mt-2">
          <h3 className="text-2xl font-semibold">Komoditas Kopi Makmur</h3>
          <p>
            Menyediakan berbagai macam jenis kopi dengan kualitas premium serta
            proses lalallalala yang lalalallalala
          </p>
          <Button text="Lihat Produk" variant="secondary" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-10 mb-8">
        <div className="col-span-1 space-y-4">
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Alamat <span className="text-red-600">*</span>
            </label>
            <span>:</span>
            <TextField variant="dashboard" className="flex-auto" />
          </div>
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Tahun Berdiri
            </label>
            <span>:</span>
            <TextField
              variant="dashboard"
              type="number"
              className="flex-auto"
            />
          </div>
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Jumlah Pelanggan
            </label>
            <span>:</span>
            <TextField variant="dashboard" className="flex-auto" />
          </div>
        </div>
        <div className="col-span-1 space-y-4">
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Jumlah Perusahaan
            </label>
            <span>:</span>
            <TextField variant="dashboard" className="flex-auto" />
          </div>
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Visi <span className="text-red-600">*</span>
            </label>
            <span>:</span>
            <TextField variant="dashboard" className="flex-auto" />
          </div>
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Misi <span className="text-red-600">*</span>
            </label>
            <span>:</span>
            <TextField variant="dashboard" type="text" className="flex-auto" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button text="Edit" variant="primary" className="w-32" />
      </div>
    </div>
  );
};

export default Commodity;
