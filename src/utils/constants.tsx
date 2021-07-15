import { FeatureCardProps } from "../components/FeatureCard";
import {
  ShoppingCartIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

export type QuickAccessFeature = {
  title: string;
  image: string;
  colspan: 1 | 2 | 3;
  path: string;
};

export const QUICK_ACCESS_FEATURES: QuickAccessFeature[] = [
  {
    title: "PREDIKSI KEDEPAN UMKM ANDA",
    image: "prediksi",
    colspan: 3,
    path: "dashboard",
  },
  {
    title: "KUMPULAN DAFTAR UMKM",
    image: "umkm",
    colspan: 3,
    path: "umkm",
  },
  {
    title: "ANALISIS UMKM",
    image: "analisis",
    colspan: 2,
    path: "umkm",
  },
  {
    title: "SARAN KOMODITAS",
    image: "komoditas",
    colspan: 2,
    path: "komoditas",
  },
  {
    title: "INFORMASI TERKINI",
    image: "informasi",
    colspan: 2,
    path: "berita",
  },
];

export const FEATURES: FeatureCardProps[] = [
  {
    image: "analisis",
    title: "Analisis",
    description:
      "Bisa melihat prospek harga komoditas kedepan/ history kebelakang hari (30 hari yg lalu).",
  },
  {
    image: "prediksi",
    title: "Prediksi",
    description:
      "Bisa melihat prospek harga komoditas kedepan/ history kebelakang hari (30 hari yg lalu).",
  },
  {
    image: "saran",
    title: "Saran",
    description:
      "Bisa melihat prospek harga komoditas kedepan/ history kebelakang hari (30 hari yg lalu).",
  },
  {
    image: "informasi",
    title: "Informasi",
    description:
      "Bisa melihat prospek harga komoditas kedepan/ history kebelakang hari (30 hari yg lalu).",
  },
];

type HeaderItem = {
  icon: React.ReactNode;
  text: string;
  pathName?: string;
};

export const HEADER_ITEMS: HeaderItem[] = [
  {
    icon: <ShoppingCartIcon className="w-6 h-6 flex-shrink-0" />,
    text: "Keranjang Belanja",
    pathName: "keranjang",
  },
  {
    icon: <QuestionMarkCircleIcon className="w-6 h-6 flex-shrink-0" />,
    text: "Bantuan",
    pathName: "bantuan",
  },
];

type TransactionPhase = {
  name: string;
  unfinishedImage: string;
  finishedImage: string;
};

export const TRANSACTION_PHASES: TransactionPhase[] = [
  {
    name: "Pembayaran",
    unfinishedImage: "payment-unfinished",
    finishedImage: "payment-finished",
  },
  {
    name: "Pesanan sedang Dikemas",
    unfinishedImage: "packaging-unfinished",
    finishedImage: "packaging-finished",
  },
  {
    name: "Pesanan Siap Dikirim",
    unfinishedImage: "unready-to-delivery",
    finishedImage: "ready-to-delivery",
  },
  {
    name: "Pesanan dalam Pengiriman",
    unfinishedImage: "delivery-unfinished",
    finishedImage: "delivery-finished",
  },
  {
    name: "Pesanan sudah Terkirim",
    unfinishedImage: "arrived-unfinished",
    finishedImage: "arrived-finished",
  },
];

export const ROUTES_WITHOUT_NAVBAR: string[] = [
  "",
  "login",
  "daftar",
  "berita",
  "umkm",
  "komoditas",
];
