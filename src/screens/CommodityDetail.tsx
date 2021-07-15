import React from "react";
import Button from "../components/Button";
import ImageGallery from "../components/ImageGallery";
import Tab from "../components/Tab";
import {
  LocationMarkerIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Dropdown from "../components/Dropdown";
import ProductCard from "../components/product/ProductCard";
import Features from "../components/Features";

const CommodityDetail = () => {
  return (
    <div>
      <div className="shadow-none sm:shadow max-w-screen-xl mx-auto p-8 mt-32 flex flex-col sm:flex-row">
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
        <div className="mt-4 sm:ml-6 flex-auto">
          <h2 className="font-semibold text-3xl mb-2">
            Komoditas Kopi Lalalala
          </h2>
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
                        Lalalala, Kec. Lalala, Kabupaten Lalala, Jawa Timur,
                        Kode Pos Lalala
                      </span>
                    </div>
                    <div className="grid grid-cols-12 text-md mb-2">
                      <ClockIcon className="h-6 w-6 col-span-1" />
                      <span className="ml-2 md:ml-0 col-span-11">
                        Sejak 2010
                      </span>
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
            variant="secondary"
            className="text-sm"
            size="md"
            text="Chat Sekarang"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-semibold mb-4">Produk</h2>
        <Dropdown
          options={[]}
          className="w-60 mb-6 border-2 border-violet rounded-md px-2"
          placeholder="Saring Menurut"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6 mb-10 ">
          {[...Array(6)].map((_, i) => (
            <ProductCard
              key={i}
              name="Biji Kopi Arabika"
              description="Vintage Typewriter to post awesome stories about UI design and webdev."
              price={3.725}
              rating={4.05}
              sold={100000}
              image="biji-kopi.jpg"
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="tertiary" text="Lihat Lebih Banyak" size="lg" />
        </div>
      </div>
      <Features />
    </div>
  );
};

export default CommodityDetail;
