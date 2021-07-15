import React from "react";
import AddressCard from "../AddressCard";
import Button from "../Button";
import CloseButton from "./CloseButton";
import ModalWrapper from "./ModalWrapper";

type AddressModalProps = { shown: boolean; onClose(): void };

const AddressModal = ({ shown, onClose }: AddressModalProps) => {
  return (
    <ModalWrapper shown={shown} onClose={onClose}>
      <div className="bg-white p-8 rounded-md">
        <h3 className="text-violet text-lg font-semibold mb-2">
          Alamat Pengiriman Anda
        </h3>
        <div className="flex flex-row gap-x-4 w-full overflow-x-auto pt-2 pb-4 my-8 px-2">
          <AddressCard
            name="Rumah"
            main
            detail="Jl Taman Edelweis 1 no 14, Kec. Lowokwaru, Kab. Malang, Jawa Timur, Kode pos. 61256"
          />
          {[...Array(8)].map((_, i) => (
            <AddressCard
              name="Rumah"
              key={i}
              detail="Jl Taman Edelweis 1 no 14, Kec. Lowokwaru, Kab. Malang, Jawa Timur, Kode pos. 61256"
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button text="Pilih" variant="primary" size="md" />
        </div>
      </div>
      <CloseButton color="gray" onClick={onClose} />
    </ModalWrapper>
  );
};

export default AddressModal;
