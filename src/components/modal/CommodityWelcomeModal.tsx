import React from "react";
import Button from "../Button";
import CloseButton from "./CloseButton";
import ModalWrapper from "./ModalWrapper";

type CommodityWelcomeModalProps = { shown: boolean; onClose(): void };

const CommodityWelcomeModal = ({
  shown,
  onClose,
}: CommodityWelcomeModalProps) => {
  return (
    <ModalWrapper shown={shown} onClose={onClose}>
      <div className="bg-white px-6 py-12 rounded w-auto sm:w-128 space-y-6">
        <div>
          <h3 className="font-semibold text-blue-marker text-center mb-2">
            Selamat Datang!
          </h3>
          <div className="space-y-4">
            <p className="text-center text-xs">
              Terima kasih karena sudah menggunakan Aplikasi Gudity dan
              memiliki niatan untuk menjadi bagian dari salah satu komoditas
              terbaik kami. Kami berharap agar kedepannya kepercayaan yang
              diberikan oleh anda kepada kami sebagai platform pemasaran
              komoditas anda dan kepercayaan kami terhadap anda sebagai salah
              satu bagian dari komoditas kami dapat berjalan dengan baik dan
              sebagaimana mestinya.
            </p>
            <p className="text-center text-xs">
              Kami berharap agar apa yang kita lakukan bersama ini dapat
              memberikan dampak yang positif, baik untuk kita, orang disekitar
              kita ataupun Indonesia.
            </p>
            <p className="text-center text-xs">
              Adapun beberapa pertanyaan dan persyaratan yang harus anda penuhi.
              Pertanyaan dan persyaratan dapat dilihat dan diisi pada halaman
              setelah setelah ini. Harap menekan tombol dengan pesan “Mengerti”
              jika anda sudah mengerti dan siap untuk mengisi beberapa syarat
              yang ada. Terima kasih.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <Button
            text="Mengerti"
            variant="primary"
            size="md"
            onClick={onClose}
            className="w-28"
          />
        </div>
      </div>
      <CloseButton color="gray" onClick={onClose} />
    </ModalWrapper>
  );
};

export default CommodityWelcomeModal;
