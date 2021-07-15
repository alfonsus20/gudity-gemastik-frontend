import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import { ChatAltIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import Dropdown from "../components/Dropdown";
import AddressModal from "../components/modal/AddressModal";

const Checkout = () => {
  const [addressModalShown, showAddressModal] = React.useState<boolean>(false);

  return (
    <div className="mt-20">
      <AddressModal
        shown={addressModalShown}
        onClose={() => showAddressModal(false)}
      />
      <Header title="Rincian Pembayaran" />
      <Wrapper>
        <Wrapper.Left>
          <div className="shadow px-8 py-6 rounded-md mb-6">
            <div className="flex flex-row">
              <LocationMarkerIcon className="text-black w-6 h-6 mr-4" />
              <div>
                <p className="font-semibold">Alamat Pengiriman</p>
                <p>Bocah Mozaik</p>
                <p>(+62)8113552304</p>
                <p>
                  Garden Dian Regency Jl Edelweis 1 no 14, Lowokwaru, Malang,
                  Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                text="UBAH"
                variant="plain-blue"
                onClick={() => showAddressModal(true)}
              />
            </div>
          </div>
          <div className="shadow px-8 py-6  rounded-md mb-6">
            <div className="flex flex-row items-center py-3">
              <ShoppingBagIcon className="w-5 h-5 mr-2" />
              <h3 className="text-md md:text-lg mr-5">Komoditas Kopi Lalala</h3>
              <button className="flex flex-row items-center text-blue-primary">
                <ChatAltIcon className="w-4 h-4 mr-2" />
                <u className="text-sm text-left">Chat Sekarang</u>
              </button>
            </div>
            <div className="grid grid-cols-6 gap-x-3 gap-y-4 text-sm md:text-md">
              <div className="col-span-3 font-semibold text-lg">
                Produk Dipesan
              </div>
              <div className="col-span-1 flex items-center justify-end">
                Harga Satuan
              </div>
              <div className="col-span-1 flex items-center justify-end">
                Kuantitas
              </div>
              <div className="col-span-1 flex items-center justify-end">
                Sub Total
              </div>
              <div className="col-span-3">
                <div className="flex flex-row items-center">
                  <img
                    src="/assets/pictures/kopi.jpg"
                    className="w-24 h-16 sm:w-32 sm:h-24 md:w-40 md:h-32 rounded-md object-cover mr-4"
                    alt=""
                  />
                  <p>Kopi Robusta (Masak Pohon)</p>
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                Rp 3.725
              </div>
              <div className="col-span-1 flex items-center justify-end">
                1000 gram
              </div>
              <div className="col-span-1 flex items-center justify-end">
                Rp 3.725.000
              </div>
              <div className="col-span-3">
                <div className="flex flex-row items-center">
                  <img
                    src="/assets/pictures/kopi.jpg"
                    className="w-24 h-16 sm:w-32 sm:h-24 md:w-40 md:h-32 rounded-md object-cover mr-4"
                    alt=""
                  />
                  <p>Kopi Robusta (Masak Pohon)</p>
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                Rp 3.725
              </div>
              <div className="col-span-1 flex items-center justify-end">
                1000 gram
              </div>
              <div className="col-span-1 flex items-center justify-end">
                Rp 3.725.000
              </div>
              <div className="col-span-6">
                <p className="mr-2 mb-2 text-lg">Metode Pengiriman</p>
                {["Reguler", "Kilat"].map((item, i) => (
                  <label
                    htmlFor={item}
                    className="flex items-center justify-between mb-4"
                    key={i}
                  >
                    <div className="flex flex-row items-center">
                      <input
                        type="radio"
                        name="transaction"
                        id={item}
                        className="flex-shrink-0 w-4 h-4 mr-4 md:mr-6"
                      />
                      <div>
                        <p className="font-semibold">{item}</p>
                        <p className="text-sm">4 - 6 hari</p>
                      </div>
                    </div>
                    <p className="font-semibold">Rp 24.000</p>
                  </label>
                ))}
              </div>
              <label htmlFor="" className="col-span-1">
                Pesan
              </label>
              <textarea
                name=""
                id=""
                className="col-span-5 outline-none border-2 border-gray-200 focus:border-blue-primary rounded-md
                px-4 py-2 h-28 resize-none
              "
              ></textarea>
            </div>
          </div>
          <div className="shadow px-8 py-6  rounded-md">
            <p className="py-2 text-lg font-semibold">Metode Pembayaran</p>
            <div className="flex flex-row mb-4">
              <div className="space-y-4">
                <p className="font-semibold">
                  Transfer melalui virtual account
                </p>
                <div>
                  <label htmlFor="">Pilih Bank</label>
                  <Dropdown
                    options={[]}
                    className="border-2 border-violet w-auto px-2 rounded-md"
                  />
                </div>
                <div>
                  <p>Ketentuan:</p>
                  <ul className="list-disc pl-6">
                    <li>
                      Pilih metode pembayaran ini untuk melakukan pembayaran
                      dengan ATM BNI / Mobile Banking BNI / Internet Banking BNI
                    </li>
                    <li>
                      Kamu diberikan waktu maksimal 1 jam untuk melakukan
                      pembayaran, terhitung setelah kamu melakukan proses
                      checkout.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Wrapper.Left>
        <Wrapper.Right>
          <Sidebar
            title="Rincian Pembayaran"
            buttonText="Lanjut"
            buttonAction={() => console.log("object")}
            total={1286020}
            items={[
              { left: "Subtotal", right: "Rp 4.975.000" },
              { left: "Biaya Pengiriman", right: "Rp 24.000" },
            ]}
          />
        </Wrapper.Right>
      </Wrapper>
    </div>
  );
};

export default Checkout;
