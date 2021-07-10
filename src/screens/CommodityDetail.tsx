import React from "react";
import Button from "../components/Button";
import ImageGallery from "../components/ImageGallery";
import Tab from "../components/Tab";
import {
  LocationMarkerIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const CommodityDetail = () => {
  return (
    <div className="shadow max-w-screen-lg mx-auto p-8 mt-32 flex flex-row">
      <ImageGallery
        className="flex-shrink-0"
        images={[
          { name: "kopi.jpg", id: "1" },
          { name: "umkm.jpg", id: "2" },
          { name: "umkm-card.jpg", id: "3" },
          { name: "gula.jpg", id: "4" },
          { name: "prediksi.jpg", id: "5" },
          { name: "informasi.jpg", id: "6" },
        ]}
      />
      <div className="ml-6 flex-auto">
        <h2 className="font-semibold text-3xl mb-2">Komoditas Kopi Lalalala</h2>
        <p className="mb-2">
          Menyediakan berbagai macam jenis kopi dengan kualitas premium serta
          proses lalallalala yang lalalallalala
        </p>
        <Tab
          tabs={[
            {
              title: "Detail",
              content: (
                <div>
                  <div className="grid grid-cols-12 text-md mb-2">
                    <LocationMarkerIcon className="h-6 w-6 col-span-1" />
                    <span className="ml-2 md:ml-0 col-span-11">
                      Lalalala, Kec. Lalala, Kabupaten Lalala, Jawa Timur, Kode
                      Pos Lalala
                    </span>
                  </div>
                  <div className="grid grid-cols-12 text-md mb-2">
                    <ClockIcon className="h-6 w-6 col-span-1" />
                    <span className="ml-2 md:ml-0 col-span-11">Sejak 2010</span>
                  </div>
                  <div className="grid grid-cols-12 text-md mb-4">
                    <UserGroupIcon className="h-6 w-6 col-span-1" />
                    <span className="ml-2 md:ml-0 col-span-11">
                      10.000 pelanggan dan 3 perkebunan
                    </span>
                  </div>
                </div>
              ),
            },
            {
              title: "Tentang Kami",
              content: (
                <div className="space-y-2 mb-6">
                  <h3 className="font-semibold">Visi</h3>
                  <p>
                    Menyediakan berbagai macam jenis kopi dengan kualitas
                    premium serta proses lalallalala yang lalalallalala
                  </p>
                  <h3 className="font-semibold">Misi</h3>
                  <ul className="list-disc pl-6">
                    <li>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. industry.
                    </li>
                    <li>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
        <Button
          onClick={() => console.log("object")}
          className="text-blue-primary border-2 border-blue-primary text-sm"
        >
          Hubungi Kami
        </Button>
      </div>
    </div>
  );
};

export default CommodityDetail;
