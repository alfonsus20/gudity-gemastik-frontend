import React from "react";
import Button from "../Button";
import CloseButton from "./CloseButton";
import ModalWrapper from "./ModalWrapper";

type ConfirmProductAcceptedModalProps = {
  shown: boolean;
  onClose(): void;
  onAccept(): void;
};

const ConfirmProductAcceptedModal = ({
  shown,
  onClose,
  onAccept,
}: ConfirmProductAcceptedModalProps) => {
  return (
    <ModalWrapper shown={shown} onClose={onClose}>
      <div className="bg-white px-6 py-12 rounded w-auto sm:w-128 space-y-6">
        <h3 className="font-semibold text-blue-marker text-center mb-2">
          Apakah barang yang anda pesan sudah diterima?
        </h3>
        <div className="flex flex-row gap-x-4 mx-8 sm:mx-12 justify-center">
          <Button
            text="BELUM"
            variant="secondary"
            size='md'
            onClick={onClose}
          />
          <Button
            text="SUDAH"
            variant="primary"
            size='md'
            onClick={onAccept}
          />
        </div>
      </div>
      <CloseButton color="gray" onClick={onClose} />
    </ModalWrapper>
  );
};

export default ConfirmProductAcceptedModal;
