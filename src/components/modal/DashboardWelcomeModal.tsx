import React from "react";
import Button from "../Button";
import CloseButton from "./CloseButton";
import ModalWrapper from "./ModalWrapper";

type DashboardWelcomeModalProps = { shown: boolean; onClose(): void };

const DashboardWelcomeModal = ({
  shown,
  onClose,
}: DashboardWelcomeModalProps) => {
  return (
    <ModalWrapper shown={shown} onClose={onClose}>
      <div className="bg-white px-6 py-12 rounded w-auto sm:w-128 space-y-6">
        <img
          src="/assets/icons/welcome.png"
          alt="welcome"
          className="w-80 h-auto mx-auto"
        />
        <div>
          <h3 className="font-semibold text-blue-marker text-center mb-2">
            Selamat Datang
          </h3>
          <p className="font-semibold text-blue-marker text-center text-xs">
            Harap lengkapi data diri Anda
          </p>
        </div>
        <div className="flex flex-row gap-x-4 mx-8 sm:mx-12">
          <Button
            text="NANTI"
            variant="secondary"
            size="full"
            onClick={onClose}
          />
          <Button text="SEKARANG" variant="secondary" size="full" />
        </div>
      </div>
      <CloseButton color="gray" onClick={onClose} />
    </ModalWrapper>
  );
};

export default DashboardWelcomeModal;
