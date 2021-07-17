import React from "react";
import Button from "../../components/Button";
import SuccessModal from "../../components/modal/SuccessModal";
import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField";

const Umkm = () => {
  const [successModalShown, showSuccessModal] = React.useState<boolean>(true);

  return (
    <div className="flex flex-auto flex-col">
      <SuccessModal
        shown={successModalShown}
        onClose={() => showSuccessModal(false)}
      />
      <h2 className="text-2xl font-semibold mb-5">UMKM Anda</h2>{" "}
      {/* <div className="flex-auto flex flex-col">
        <div className="flex justify-center items-center flex-auto">
          <div className="flex flex-col items-center space-y-4 flex-auto">
            <img
              src="/assets/icons/umkm.png"
              className="w-96"
              alt="Daftar Komoditas"
            />
            <div className="text-center">
              <h3 className="text-blue-marker font-semibold">
                Ingin mempromosikan UMKM anda pada aplikasi Gudity?
              </h3>
            </div>
            <Button text="Mulai" variant="primary" className="w-32" />
          </div>
        </div>
      </div> */}
      <div>
        <div className="space-y-2  mx-auto">
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-blue-primary font-medium">
              Nama UMKM
            </label>
            <TextField variant="tertiary" placeholder="Masukkan nama UMKM" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-blue-primary font-medium">
              Deskripsi UMKM
            </label>
            <TextArea
              variant="tertiary"
              placeholder="Masukkan deskripsi UMKM"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-blue-primary font-medium">
              Alamat
            </label>
            <TextField variant="tertiary" placeholder="Masukkan nama alamat" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-blue-primary font-medium">
              No Telepon
            </label>
            <TextField
              variant="tertiary"
              placeholder="Masukkan nama nomor telepon"
            />
          </div>
          <div className="flex flex-row justify-between gap-x-4">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="" className="text-blue-primary font-medium">
                Hari Operasional
              </label>
              <TextField
                variant="tertiary"
                type="time"
                placeholder="Masukkan hari operasional"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="" className="text-blue-primary font-medium">
                Jam Operasional
              </label>
              <TextField
                variant="tertiary"
                type="time"
                placeholder="Masukkanjam operasional"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-blue-primary font-medium">
              Foto
            </label>
            <TextField
              variant="tertiary"
              placeholder="Masukkan gambar produk"
              type="file"
            />
          </div>
          <div className="flex justify-end pt-2">
            <Button
              text="Unggah"
              variant="primary"
              size="md"
              className="w-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Umkm;
