import React, { useEffect } from "react";
import Underline from "../components/Underline";
import NewsCard from "../components/NewsCard";
import Button from "../components/Button";
import TextField from "../components/TextField";
import NewsModal from "../components/modal/NewsModal";
import Features from "../components/Features";
import { SearchIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../store/actions/newsActions";
import { RootState } from "../store";

const News = () => {
  const { newsList } = useSelector((state: RootState) => state.newsList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newsList.length === 0) {
      dispatch(getAllNews());
    }
  }, []);

  return (
    <div>
      <NewsModal />
      <div className="min-h-screen ">
        <div
          className="w-full min-h-screen z-10 pt-10 text-white flex items-center"
          style={{
            background:
              "linear-gradient(86.97deg, rgba(0, 0, 0, 0.95) -0.91%, rgba(7, 11, 18, 0) 131.36%), url(/assets/backgrounds/berita.jpg)",
          }}
        >
          <div className="max-w-screen-xl mx-auto w-full px-8">
            <div className="font-semibold">
              <h1 className="text-5xl my-1 leading-snug">
                Cari dan Temukan <br />
                Informasi yang Anda Butuhkan.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="mb-8">
            <h2 className="text-center text-4xl font-semibold mb-4">
              Kumpulan Berita
            </h2>
            <Underline backgroundColor="#110828" center />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center md:space-x-4 mb-4">
            <TextField type="date" value="" variant="secondary" rounded />
            <TextField
              type="text"
              value=""
              placeholder="Cari Berita"
              variant="secondary"
              rounded
              icon={<SearchIcon className="w-6 h-6" />}
            />
          </div>
          {newsList.length === 0 ? (
            <h2 className="text-center py-6">Belum ada berita</h2>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-lg mx-auto gap-x-4 gap-y-11 mb-12">
                {newsList.map((news) => (
                  <NewsCard
                    key={news.id}
                    title={news.title}
                    content={news.body}
                    colspan={1}
                  />
                ))}
              </div>
              <div className="flex justify-center">
                <Button
                  variant="tertiary"
                  text="Lihat Lebih Banyak"
                  size="lg"
                />
              </div>
            </>
          )}
        </div>
      </div>
      <Features />
    </div>
  );
};

export default News;
