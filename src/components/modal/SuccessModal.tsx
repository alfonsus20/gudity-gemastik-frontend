import React from "react";
import Button from "../Button";
import CloseButton from "./CloseButton";
import ModalWrapper from "./ModalWrapper";

type SuccessModalProps = { shown: boolean; onClose(): void };

const SuccessModal = ({ shown, onClose }: SuccessModalProps) => {
  return (
    <ModalWrapper shown={shown} onClose={onClose}>
      <div className="bg-white px-6 py-12 rounded w-auto sm:w-128 space-y-6">
        <img
          src="/assets/icons/success.gif"
          alt="success"
          className="w-48 h-auto mx-auto"
        />
        <div>
          <h3 className="font-semibold text-blue-marker text-center mb-2 text-lg">
            Terima Kasih!
          </h3>
          <p className="font-semibold text-blue-marker text-center text-sm max-w-sm mx-auto">
            Selamat anda berhasil mendaftarkan komoditas anda pada Aplikasi
            Gudity
          </p>
        </div>
        <Button
          text="Selesai"
          variant="primary"
          size="md"
          className="w-36 mx-auto"
          onClick={onClose}
        />
      </div>
      <CloseButton color="gray" onClick={onClose} />
    </ModalWrapper>
  );
};

export default SuccessModal;
