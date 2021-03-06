import React, { useEffect } from "react";
import Button from "../components/Button";
import FeatureCard from "../components/card/FeatureCard";
import Features from "../components/Features";
import NewsCard from "../components/card/NewsCard";
import NewsModal from "../components/modal/NewsModal";
import { FEATURES } from "../utils/constants";
import ComplementaryCard from "../components/card/ComplementaryCard";
import CommodityCarousel from "../components/carousel/CommodityCarousel";
import ReviewCarousel from "../components/carousel/ReviewCarousel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getAllNews } from "../store/actions/newsActions";
import { Slide, Fade, Rotate } from "react-reveal";

const Home = () => {
  const { newsList } = useSelector((state: RootState) => state.newsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  return (
    <div className="relative">
      <NewsModal />
      <div className="min-h-screen relative">
        <div
          className="w-full px-8 min-h-screen relative z-10 pt-10 text-white flex items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(86.97deg, rgba(0, 0, 0, 0.95) -0.91%, rgba(7, 11, 18, 0) 131.36%), url(/assets/backgrounds/homepage.jpg)",
          }}
        >
          <Slide left cascade>
            <div className="max-w-screen-xl mx-auto w-full px-2">
              <div className="font-semibold">
                <h2 className="text-3xl md:text-4xl">Kami hadir</h2>
                <h1 className="text-4xl md:text-5xl my-1 leading-snug md:leading-snug">
                  Sebagai Solusi UMKM Anda <br /> dalam Proses
                  <span className="highlight ml-3">Analisis</span> dan
                  <span className="highlight ml-3">Prediksi</span>
                  <br /> pada <span className="highlight"> masa depan.</span>
                </h1>
              </div>
              <div className="mt-6">
                <Button variant="primary" text="Lebih Lanjut" size="md" />
              </div>
            </div>
          </Slide>
        </div>
      </div>
      <div className="bg-black">
        <div
          className="py-20 md:py-28 bg-white"
          style={{ borderBottomLeftRadius: "12rem" }}
        >
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:space-x-10 px-8">
            <div className="text-black w-full md:w-1/2 mb-4 md:mb-8">
              <h2 className="font-semibold text-4xl mb-6">
                Kumpulan Berita Terkini
              </h2>
              <p className="text-lg font-light mb-4">
                Baca cerita terbaru dari sekeliling kita.
              </p>
              <Button
                className="hidden md:block"
                text="Lihat Lebih Banyak"
                size="md"
                pathName='berita'
                variant="tertiary"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 w-full md:w-1/2">
              {newsList.length === 0 ? (
                <h2 className="col-span-2 text-center">Belum ada berita</h2>
              ) : (
                newsList.slice(0, 4).map((news, index) => (
                  <Fade bottom duration={(index + 1) * 500} key={news.id}>
                    <NewsCard
                      title={news.title}
                      content={news.body}
                      colspan={1}
                    />
                  </Fade>
                ))
              )}
            </div>
            <Button
              onClick={() => console.log("object")}
              variant="tertiary"
              text="Lihat Lebih Banyak"
              size="md"
              className="md:hidden mt-8"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-7 mb-12">
            {FEATURES.map((feature, i) => (
              <Fade duration={(i + 1) * 500} bottom key={i}>
                <FeatureCard {...feature} />
              </Fade>
            ))}
          </div>
          <div className="flex">
            <Button
              variant="quaternary"
              size="md"
              className="mx-auto"
              text="Lebih Lanjut"
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-8 py-20 md:py-28 flex flex-col-reverse md:flex-row md:space-x-12 lg:space-x-36 overflow-x-hidden">
        <Slide left>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-medium mb-4">
              Ingin Lebih Dalam Mengenal Aplikasi GUDITY?
            </h2>
            <p className="mb-6">
              Membantu usaha UMKM makanan dan minuman Anda dalam proses
              pemerataan bahan baku serta mengantisipasi fluktuasi harga
              komoditas yang ditunjang dengan penggunaan teknologi terkini.
            </p>
            <div className="flex flex-row space-x-6 mb-10">
              <div className="">
                <img src="/assets/pictures/book.svg" alt="book" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2">
                  Percepat Bisnis Anda
                </h3>
                <p>
                  Rencanakan dan persiapkan usaha UMKM Anda mulai dari sekarang
                  bersama dengan Gudity.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="secondary" text="Pelajari Lebih Lanjut" />
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="flex-shrink-0 flex justify-center">
            <img
              src="/assets/pictures/gudity-book.png"
              className="w-100"
              alt="gudity-book"
            />
          </div>
        </Slide>
      </div>
      <div style={{ backgroundColor: "#E9EEFF" }} className="px-8 py-20">
        <Fade bottom>
          <CommodityCarousel />
        </Fade>
      </div>
      <div className="max-w-screen-xl mx-auto px-8 py-20 md:py-28 flex flex-col md:flex-row items-center md:space-x-6 lg:space-x-12">
        <h2 className="text-4xl font-medium mb-8 md:w-5/12">
          Nikmati fitur pelengkap kami untuk memperlancar usaha Anda
        </h2>
        <div className=" md:w-7/12 gap-y-6 md:gap-6 flex flex-col md:flex-row">
          <Rotate bottom left>
            <div className="flex justify-start items-start">
              <ComplementaryCard
                title="Belanja dari Produk Komoditas"
                description="Lihat berbagai macam kumpulan UMKM yang tersedia dari berbagai macam jenis produk olahan pilihan yang tersebar di berbagaimacam wilayah."
                buttonName="Belanja sekarang"
                buttonPathname="suppliers"
                image="buy-commodity.png"
              />
            </div>
          </Rotate>
          <Rotate bottom left>
            <div className="flex justify-end items-start">
              <ComplementaryCard
                title="Kumpulan UMKM"
                description="Telusuri pemasok komoditas kami dan pilih komoditas yang ada dengan harga terbaik,  kualitas unggul serta proses transaksi yang mudah dan aman."
                buttonName="Lihat Sekarang"
                buttonPathname="umkm"
                image="umkm-collection.png"
              />
            </div>
          </Rotate>
        </div>
      </div>
      <Features />
      <div style={{ backgroundColor: "#E9EEFF" }} className="px-8 py-20">
        <Fade bottom>
          <ReviewCarousel />
        </Fade>
      </div>
    </div>
  );
};

export default Home;
