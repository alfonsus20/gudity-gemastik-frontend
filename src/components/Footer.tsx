import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-secondary">
      <div className="max-w-screen-xl px-8 py-12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-1">
          <h5 className="text-white text-lg font-medium mb-4">Tentang Kami</h5>
          <dl style={{ color: "rgba(256,256,256,0.5)" }} className="text-sm">
            <dd className="mb-4">Visi</dd>
            <dd className="mb-4">Misi</dd>
            <dd className="mb-4">Keunggulan</dd>
          </dl>
        </div>
        <div className="col-span-1">
          <h5 className="text-white text-lg font-medium mb-4">Layanan</h5>
          <dl style={{ color: "rgba(256,256,256,0.5)" }} className="text-sm">
            <dd className="mb-4">Visi</dd>
            <dd className="mb-4">Misi</dd>
            <dd className="mb-4">Keunggulan</dd>
          </dl>
        </div>
        <div className="col-span-1">
          <h5 className="text-white text-lg font-medium mb-4">
            Informasi Terkait
          </h5>
          <dl style={{ color: "rgba(256,256,256,0.5)" }} className="text-sm">
            <dd className="mb-4">Visi</dd>
            <dd className="mb-4">Misi</dd>
            <dd className="mb-4">Keunggulan</dd>
          </dl>
        </div>
        <div className="col-span-1">
          <h5 className="text-white text-lg font-medium mb-4">Lorem Ipsum</h5>
          <dl style={{ color: "rgba(256,256,256,0.5)" }} className="text-sm">
            <dd className="mb-4">Visi</dd>
            <dd className="mb-4">Misi</dd>
            <dd className="mb-4">Keunggulan</dd>
          </dl>
        </div>
      </div>
      <div className="bg-blue-donker py-4 text-center text-white text-base">
        &copy; 2021 <span className="font-medium">NamaAplikasi</span> all rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
