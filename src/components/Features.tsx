import React from "react";
import Button from "./Button";

const Features = () => {
  return (
    <div className="bg-gray px-8 py-20">
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto text-white px-2">
        <div className="w-full md:w-1/2  flex flex-col justify-center">
          <div className="font-medium text-3xl mb-6">LOGO</div>
          <p className="font-medium text-2xl mb-6">
            Hal apa saja yang dibutuhkan untuk mengembangkan UMKM?{" "}
          </p>
          <div>
            <Button
              onClick={() => console.log("a")}
              className="hidden md:block"
              variant="primary"
              text="Coba Sekarang"
              size="md"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <div className="flex flex-row items-center mb-6">
            <div style={{ flex: "0 0 6rem" }} className="px-1">
              <img src="/assets/icons/analisis.png" alt="" className="w-full" />
            </div>
            <div className="px-6 border-l-2 ml-6">
              <h4 className="text-2xl font-medium">ANALISIS</h4>
              <p className="text-sm md:text-base font-light">
                PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi
                dengan PT Permodalan Nasional mendukung UMKM.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mb-6">
            <div style={{ flex: "0 0 6rem" }} className="px-1">
              <img src="/assets/icons/analisis.png" alt="" className="w-full" />
            </div>
            <div className="px-6 border-l-2 ml-6">
              <h4 className="text-2xl font-medium">ANALISIS</h4>
              <p className="text-sm md:text-base font-light">
                PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi
                dengan PT Permodalan Nasional mendukung UMKM.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mb-6">
            <div style={{ flex: "0 0 6rem" }} className="px-1">
              <img src="/assets/icons/analisis.png" alt="" className="w-full" />
            </div>
            <div className="px-6 border-l-2 ml-6">
              <h4 className="text-2xl font-medium">ANALISIS</h4>
              <p className="text-sm md:text-base font-light">
                PT Sarana Multigriya Finansial (Persero) atau SMF berkolaborasi
                dengan PT Permodalan Nasional mendukung UMKM.
              </p>
            </div>
          </div>
        </div>
        <Button
          variant="primary"
          className="text-white mt-2 mx-auto md:hidden"
          text="Coba Sekarang"
          size="md"
        />
      </div>
    </div>
  );
};

export default Features;
