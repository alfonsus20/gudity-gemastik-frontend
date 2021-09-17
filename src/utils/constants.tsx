import { FeatureCardProps } from "../components/FeatureCard";
import {
  ViewGridIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  QuestionMarkCircleIcon,
  DocumentSearchIcon,
  PresentationChartLineIcon,
  ChartBarIcon,
  MapIcon,
  OfficeBuildingIcon,
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
    title: "SARAN SUPPLIER",
    image: "komoditas",
    colspan: 2,
    path: "suppliers",
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
      "Ketahui harga komoditas lampau yang ada untuk proses penentuan prediksi dan strategi di masa depan.",
  },
  {
    image: "prediksi",
    title: "Prediksi",
    description:
      "Ketahui prospek harga produk komoditas di masa depan, serta prediksi kesuksesan bisnis kamu saat ini.",
  },
  {
    image: "cari-komoditas",
    title: "Cari Komoditas",
    description:
      "Cari komoditas yang sesuai untuk mengoptimalkan usaha UMKM anda.",
  },
  {
    image: "peta",
    title: "Peta Komoditas",
    description:
      " Informasi peta sebaran komoditas, serta profil komoditas terkait dan didukung dengan kemudahan proses transaksi jual beli",
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
  id: number;
};

export const TRANSACTION_PHASES: TransactionPhase[] = [
  {
    name: "Pesanan sedang Dikemas",
    unfinishedImage: "packaging-unfinished",
    finishedImage: "packaging-finished",
    id: 1,
  },
  {
    name: "Pesanan dalam Pengiriman",
    unfinishedImage: "delivery-unfinished",
    finishedImage: "delivery-finished",
    id: 2,
  },
  {
    name: "Pesanan sudah Terkirim",
    unfinishedImage: "arrived-unfinished",
    finishedImage: "arrived-finished",
    id: 3,
  },
];

export const ROUTES_WITHOUT_NAVBAR: string[] = [
  "",
  "login",
  "daftar",
  "berita",
  "umkm",
  "suppliers",
];

type SideBarItem = {
  icon: React.ReactNode;
  text: string;
  pathName: string;
};

export const SIDEBAR_ITEMS: SideBarItem[] = [
  {
    icon: <ViewGridIcon className="w-7 h-7" />,
    text: "Halaman Utama",
    pathName: "/dashboard",
  },
  {
    icon: <ShoppingBagIcon className="w-7 h-7" />,
    text: "Komoditas Anda",
    pathName: "/dashboard/produk",
  },

  {
    icon: <OfficeBuildingIcon className="w-7 h-7" />,
    text: "UMKM Anda",
    pathName: "/dashboard/umkm",
  },
  {
    icon: <DocumentSearchIcon className="w-7 h-7" />,
    text: "Cari Komoditasmu",
    pathName: "/dashboard/cari-komoditas",
  },
  {
    icon: <PresentationChartLineIcon className="w-7 h-7" />,
    text: "Analisis",
    pathName: "/dashboard/analisis",
  },
  {
    icon: <ChartBarIcon className="w-7 h-7" />,
    text: "Prediksi",
    pathName: "/dashboard/prediksi",
  },
  {
    icon: <MapIcon className="w-7 h-7" />,
    text: "Peta Komoditas",
    pathName: "/dashboard/peta-komoditas",
  },
];

type DashboardFeature = {
  text: string;
  backgroundColor: string;
  pathname: string;
};

export const DASHBOARD_FEATURES: DashboardFeature[] = [
  {
    text: "Cari Jenis Komoditas dengan Gambar",
    backgroundColor: "bg-red-500",
    pathname: "cari-komoditas",
  },
  {
    text: "Analisis Harga Komoditas di Masa Lampau",
    backgroundColor: "bg-indigo-500",
    pathname: "analisis",
  },
  {
    text: "Prediksi Kesuksesan Usahamu dan Harga dimasa Depan",
    backgroundColor: "bg-yellow-500",
    pathname: "prediksi/prediksi-kesuksesan",
  },
  {
    text: "Cari Sebaran Komoditas dengan Peta",
    backgroundColor: "bg-purple-400",
    pathname: "peta-komoditas",
  },
];

export const IMAGE_BASE_URL =
  "https://tmqbylesuwxzdqaxmdlm.supabase.in/storage/v1/object/public/images/";
