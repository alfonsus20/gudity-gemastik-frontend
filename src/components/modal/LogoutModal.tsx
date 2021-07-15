import React from "react";
import Button from "../Button";
import CloseButton from "./CloseButton";
import ModalWrapper from "./ModalWrapper";

type LogoutModalProps = { shown: boolean; onClose(): void };

const LogoutModal = ({ shown, onClose }: LogoutModalProps) => {
  return (
    <ModalWrapper shown={shown} onClose={onClose}>
      <div className="bg-white px-6 py-12 rounded w-auto sm:w-128 space-y-6">
        <img
          src="/assets/icons/logout.png"
          alt="logout"
          className="w-80 h-auto mx-auto"
        />
        <h3 className="font-semibold text-blue-marker text-center">
          Anda yakin ingin keluar dari akun ini?
        </h3>
        <div className="flex flex-row gap-x-4 mx-8 sm:mx-12">
          <Button text="TIDAK" variant="secondary" size="full" onClick={onClose}/>
          <Button text="YA" variant="secondary" size="full" />
        </div>
      </div>
      <CloseButton color="gray" onClick={onClose} />
    </ModalWrapper>
  );
};

export default LogoutModal;
