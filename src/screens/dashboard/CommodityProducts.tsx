import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

const CommodityProducts = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Kumpulan Produk Anda</h2>
      <div className="flex flex-row justify-between items-center mb-4">
        <TextField
          icon={<SearchIcon className="w-6 h-6" />}
          variant="secondary"
          placeholder="Cari Produk Anda"
          rounded
        />
        <div>
          <Button text="Tambah Produk" variant="secondary" />
        </div>
      </div>
      <div className="shadow rounded-md px-6 py-4">
        <table className="table-fixed w-full">
          <thead className="">
            <tr className="text-left">
              <th className="px-3 py-2 w-2/12">Nama Produk</th>
              <th className="px-3 py-2 w-3/12">Deskripsi Produk</th>
              <th className="px-3 py-2 w-1/12">Harga</th>
              <th className="px-3 py-2 w-1/12">Kuantitas</th>
              <th className="px-3 py-2 w-1/12">Kualitas</th>
              <th className="px-3 py-2 w-2/12">Ketersediaan</th>
              <th className="px-3 py-2 w-2/12">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="p-3">Lorem ipsum dolor sit,</td>
              <td className="p-3">
                Pariatur explicabo quibusdam veritatis temporibus quam ea, aut
                sunt nobis.
              </td>
              <td className="p-3">3.725/ KG</td>
              <td className="p-3">1000/ KG</td>
              <td className="p-3">1000/ KG</td>
              <td className="p-3">Premium</td>
              <td className="p-3 flex flex-row gap-x-4">
                <Button variant="primary" text="Edit" className="w-20" />
                <Button variant="danger" text="Hapus" className="w-20" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommodityProducts;
