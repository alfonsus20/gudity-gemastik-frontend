import React from "react";
import Button from "../components/Button";
import ImageGallery from "../components/ImageGallery";
import {
  HeartIcon as HeartOutline,
  /* eslint-disable */
  StarIcon as StarOutline,
  ShoppingCartIcon,
  SwitchVerticalIcon,
  FilterIcon,
} from "@heroicons/react/outline";
import {
  /* eslint-disable */
  StarIcon as StarSolid,
  ShareIcon,
  /* eslint-disable */
  HeartIcon as HeartSolid,
} from "@heroicons/react/solid";
import Dropdown from "../components/Dropdown";
import ProductCard from "../components/product/ProductCard";
import InputField from "../components/InputField";
import Rating from "../components/product/Rating";
import RatingCollection from "../components/product/RatingCollection";
import Review from "../components/Review";

const Product = () => {
  const [quantity, setQuantity] = React.useState<number>(1);

  return (
    <div>
      <div className="shadow-none sm:shadow max-w-screen-xl mx-auto px-8 py-12 mt-20 sm:mt-32 sm:mb-8">
        <div className="flex flex-col sm:flex-row mb-8">
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
            <h2 className="font-semibold text-3xl mb-6 text-blue-marker">
              Kopi Robusta (Matang Pohon)
            </h2>
            <h2 className="font-semibold text-3xl mb-2 text-black">
              Rp 3.725/ gram
            </h2>
            <div className="flex flex-row justify-between">
              <div className="mb-4">
                <Rating showRate rating={4.05} />
                <p className="text-sm">Terjual 100.000 kg</p>
              </div>
              <div className="flex flex-row">
                <ShareIcon className="w-8 h-8 mr-2" />
                <HeartOutline className="w-8 h-8" />
              </div>
            </div>
            <div className="mb-2">
              <div className="flex flex-row mb-3">
                <label className="w-32 flex-shrink-0">Promosi</label>
                <div className="flex-auto">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum iste eligendi minus consequuntur nulla, omnis beatae
                  amet distinctio veniam eveniet porro dolores, ducimus vero nam
                  soluta doloremque sunt illo nihil?
                </div>
              </div>
              <div className="flex flex-row mb-3">
                <label className="w-32 flex-shrink-0">Pengiriman</label>
                <div className="flex-auto">
                  <div className="flex flex-row mb-4 items-center">
                    <div className="mr-4">
                      <img src="/assets/icons/delivery-black.svg" alt="" />
                    </div>
                    <span className="flex-auto">Gratis Biaya Kirim</span>
                  </div>
                  <div className="flex flex-row">
                    <div className="mr-4">
                      <img src="/assets/icons/delivery-blue.svg" alt="" />
                    </div>
                    <div className="flex flex-col flex-auto">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <span className="w-36">Pengiriman ke</span>
                        <Dropdown options={[]} name="" className="w-40" />
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <span className="w-36">Biaya Kirim</span>
                        <Dropdown options={[]} name="" className="w-40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mb-3">
                <label className="w-32 flex-shrink-0">Satuan</label>
                <div className="flex-auto flex flex-row flex-wrap gap-4">
                  {["Gram", "Kilogram", "Ton", "Karung (10kg)"].map(
                    (item, i) => (
                      <Button
                        key={i}
                        variant="secondary"
                        className="border-2 border-blue-primary text-blue-primary px-8 rounded-md text-sm"
                        text={item}
                        size="sm"
                      />
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-row mb-3 items-center">
                <label className="w-32 flex-shrink-0">Kuantitas</label>
                <div className="flex flex-row w-40 mr-4">
                  <button
                    className="px-2"
                    onClick={() =>
                      setQuantity((prevQuantity) => prevQuantity - 1)
                    }
                    disabled={quantity <= 0}
                  >
                    -
                  </button>
                  <InputField
                    value={quantity}
                    type="text"
                    onChange={() => console.log("object")}
                    className="px-3 py-2 rounded-md border-2 border-gray-200 mx-4"
                    textCenter
                  />
                  <button
                    className="px-2"
                    onClick={() =>
                      setQuantity((prevQuantity) => prevQuantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <span className="text-green-500 text-sm">Tersedia</span>
              </div>
            </div>
            <div className="flex flex-row">
              <Button
                className="text-blue-primary border-2 border-blue-primary text-sm mr-4"
                icon={<ShoppingCartIcon className="w-6 h-6" />}
                text="Masukkan Keranjang"
                variant="secondary"
              />
              <Button
                className="text-white border-2 border-blue-primary bg-blue-primary text-sm w-40"
                text="Beli Sekarang"
                size="md"
                variant="primary"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h3 className="font-medium text-2xl mb-2">Spesifikasi Produk</h3>
            <table>
              <tbody>
                <tr>
                  <td className="pr-4 pb-2 text-gray-500">Nama</td>
                  <td className="pb-2"> Kopi Robusta</td>
                </tr>
                <tr>
                  <td className="pr-4 pb-2 text-gray-500">Kuantitas</td>
                  <td className="pb-2"> Premium</td>
                </tr>
                <tr>
                  <td className="pr-4 pb-2 text-gray-500">Ketersediaan</td>
                  <td className="pb-2">
                    Tersedia, selalu memproduksi setiap hari
                  </td>
                </tr>
                <tr>
                  <td className="pr-4 pb-2 text-gray-500">Dikirim dari</td>
                  <td className="pb-2">
                    Lalalala, Kec. Lalala, Kabupaten Lalala, Jawa Timur, Kode
                    Pos Lalala
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-medium text-2xl mb-2">Deskripsi Produk</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto pt-4 pb-12 sm:py-20 px-8 shadow">
        <RatingCollection
          ratings={[
            { rating: 5, reviewersNumber: 305 },
            { rating: 4, reviewersNumber: 92 },
            { rating: 3, reviewersNumber: 12 },
            { rating: 2, reviewersNumber: 40 },
            { rating: 1, reviewersNumber: 1 },
          ]}
        />
        <div className="flex flex-col xs:flex-row justify-between mt-8">
          <h3 className="font-medium text-2xl mb-2">Ulasan Produk</h3>
          <div className="flex flex-row gap-2 mb-4">
            <Dropdown
              options={[]}
              name=""
              className="w-48 text-xs"
              icon={<SwitchVerticalIcon className="w-6 h-6 text-gray-500 " />}
              placeholder="Urutkan : Produk"
            />
            <Dropdown
              options={[]}
              name=""
              className="w-48 text-xs"
              icon={<FilterIcon className="w-6 h-6 text-gray-500" />}
              placeholder="Saring : Semua bintang"
            />
          </div>
        </div>
        <div>
          <Review
            reviewerName="Bocah Mozaik"
            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            images={[
              { name: "kopi-produk.jpg", id: "1" },
              { name: "kopi-produk.jpg", id: "2" },
            ]}
            rating={4}
          />
          <Review
            reviewerName="Bocah Mozaik"
            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            images={[
              { name: "kopi-produk.jpg", id: "1" },
              { name: "kopi-produk.jpg", id: "2" },
            ]}
            rating={4}
          />
          <Review
            reviewerName="Bocah Mozaik"
            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            images={[
              { name: "kopi-produk.jpg", id: "1" },
              { name: "kopi-produk.jpg", id: "2" },
            ]}
            rating={4}
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-20 px-8 w-full overflow-x-auto flex flex-row gap-4">
        {[...Array(10)].map((_, i) => (
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
    </div>
  );
};

export default Product;
