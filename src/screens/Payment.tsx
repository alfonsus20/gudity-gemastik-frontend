import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import { ChatAltIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import Dropdown from "../components/Dropdown";
import Tab from "../components/Tab";

const Payment = () => {
  return (
    <div className="mt-20">
      <Header title="Pembayaran" />
      <div className="flex flex-col justify-center items-center space-y-4 max-w-3xl mx-auto pt-8 pb-20 px-8">
        <img src="/assets/icons/payment.png" alt="" className="w-80 h-80" />
        <h3 className="font-semibold text-xl">
          Terima kasih telah membeli produk saran komoditas kami.
        </h3>
        <p className="text-center">
          Transaksi akan diproses apabila Anda telah melakukan pembayaran dengan
          batas waktu sebelum 10 Juli 2021 pukul 22:18 WIB.
        </p>
        <div className="flex flex-col justify-center items-center space-y-1">
          <p>
            Pembayaran melalui <strong>Bank BNI</strong>
          </p>
          <p>Nomor Virtual Account</p>
          <div className="font-semibold transition transform hover:scale-110">
            <Button
              text="476520743909"
              variant="plain-blue"
              size="lg"
              onClick={() => navigator.clipboard.writeText("476520743909")}
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-8">
        <h3 className="text-xl text-center font-semibold mb-6">
          Petunjuk Pembayaran
        </h3>
        <Tab
          tabs={[
            {
              title: "ATM BNI",
              content: (
                <ol className="list-decimal pl-6">
                  <li>Masukkan Kartu Anda.</li>
                  <li>Pilih Bahasa.</li>
                  <li>Masukkan PIN ATM Anda.</li>
                  <li>Pilih “Menu Lainnya”.</li>
                  <li>Pilih “Transfer”.</li>
                  <li>
                    Pilih Jenis rekening yang akan Anda gunakan (Contoh; “Dari
                    Rekening Tabungan”).
                  </li>
                  <li>Pilih “Virtual Account Billing”</li>
                  <li>Masukkan nomor Virtual Account Anda (476420743909).</li>
                  <li>
                    Tagihan yang harus dibayarkan akan muncul pada layar
                    konfirmasi
                  </li>
                  <li>
                    Konfirmasi, apabila telah sesuai, lanjutkan transaksi.
                  </li>
                  <li>Transaksi Anda telah selesai.</li>{" "}
                </ol>
              ),
            },
            {
              title: "Mobile Banking BNI",
              content: <div className="space-y-2 mb-6"></div>,
            },
            {
              title: "Internet Banking BNI",
              content: <div className="space-y-2 mb-6"></div>,
            },
          ]}
        />
        <div className="flex flex-col justify-end">
          <div className="ml-auto flex flex-col mb-2">
            <Button text="Detail Pemesanan" variant="primary" />
            <p className="text-xs mt-2">
              Status Pembayaran : <strong>Menunggu Pembayaran</strong>
            </p>
          </div>
        </div>
      </div>
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
              <Button text="UBAH" variant="plain-blue" />
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
                <div className="flex flex-row items-center">
                  <p className="mr-2">Metode Pengiriman</p>
                  <Button text="UBAH" variant="plain-blue" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Reguler</p>
                    <p className="text-sm">4 - 6 hari</p>
                  </div>
                  <p className="font-semibold">Rp 24.000</p>
                </div>
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
              <input
                type="radio"
                name="transaction"
                id=""
                className="flex-shrink-0 w-6 h-6 mr-4"
              />
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
            <div className="flex flex-row">
              <input
                type="radio"
                name="transaction"
                id=""
                className="flex-shrink-0 w-6 h-6 mr-4"
              />
              <div className="space-y-4">
                <p className="font-semibold">Kartu Kredit/ Debit</p>
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

export default Payment;
