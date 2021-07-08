export type QuickAccessFeature = {
  title: string;
  image: string;
  colspan: 1 | 2 | 3;
  path : string;
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
