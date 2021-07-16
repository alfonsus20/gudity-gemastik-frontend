import React from "react";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField";

const AddProduct = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Tambah Produk Anda</h2>
      <div className="space-y-2  mx-auto">
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-blue-primary font-medium">
            Nama Produk
          </label>
          <TextField variant="tertiary" placeholder="Masukkan nama produk" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-blue-primary font-medium">
            Deskripsi Produk
          </label>
          <TextArea
            variant="tertiary"
            placeholder="Masukkan deskripsi produk"
          />
        </div>
        <div className="flex flex-row justify-between gap-x-4">
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="" className="text-blue-primary font-medium">
              Harga
            </label>
            <TextField variant="tertiary" placeholder="Masukkan harga produk" />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="" className="text-blue-primary font-medium">
              Satuan
            </label>
            <Dropdown
              options={[]}
              placeholder="Masukkan Satuan"
              className="border-gray-200 border-2 text-sm "
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-blue-primary font-medium">
            Kualitas
          </label>
          <TextField
            variant="tertiary"
            placeholder="Masukkan kualitas produk"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-blue-primary font-medium">
            Ketersediaan
          </label>
          <TextField
            variant="tertiary"
            placeholder="Masukkan ketersediaan produk"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-blue-primary font-medium">
            Gambar
          </label>
          <TextField
            variant="tertiary"
            placeholder="Masukkan gambar produk"
            type="file"
          />
        </div>
        <div className="flex justify-end pt-2">
          <Button text="Tambah" variant="primary" size="md" className="w-28" />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
