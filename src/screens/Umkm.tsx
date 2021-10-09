import React from "react";
import Underline from "../components/Underline";
import TextField from "../components/TextField";
import UmkmCard from "../components/card/UmkmCard";
import Features from "../components/Features";
import { useDispatch, useSelector } from "react-redux";
import { fetchUmkmList } from "../store/actions/umkmActions";
import { RootState } from "../store";

const Umkm = () => {
  const dispatch = useDispatch();
  const { umkmList } = useSelector((state: RootState) => state.umkmList);
  const [keyword, setKeyword] = React.useState<string>("");

  React.useEffect(() => {
    dispatch(fetchUmkmList());
  }, [dispatch]);

  const filteredStores = umkmList.filter((umkm) =>
    umkm.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <div className="min-h-screen relative ">
        <div
          className="w-full min-h-screen relative z-10  pt-10 text-white flex items-center bg-cover "
          style={{
            backgroundImage:
              "linear-gradient(86.97deg, rgba(0, 0, 0, 0.95) -0.91%, rgba(7, 11, 18, 0) 131.36%), url(/assets/backgrounds/berita.jpg)",
          }}
        >
          <div className="max-w-screen-xl mx-auto w-full px-8">
            <div className="font-semibold">
              <h1 className="text-4xl md:text-5xl my-1 leading-snug">
                Cari dan Temukan <br />
                Berbagai Macam UMKM yang Tersedia.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-screen-2xl px-8 mx-auto">
          <div className="mb-8">
            <h2 className="text-center text-4xl font-semibold mb-4">
              Kumpulan UMKM
            </h2>
            <Underline backgroundColor="#110828" center />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center  md:space-x-4 mb-4">
            <TextField
              type="text"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              variant="secondary"
              placeholder="Cari UMKM"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-xl mx-auto gap-x-6 gap-y-11 mb-12">
            {filteredStores.length === 0 ? (
              <h2 className="text-lg text-center py-20 col-span-12">
                UMKM tidak ditemukan
              </h2>
            ) : (
              filteredStores.map((umkm) => (
                <UmkmCard
                  key={umkm.id}
                  thumbnail={umkm.thumbnail}
                  title={umkm.name}
                  description={umkm.description}
                  location={umkm.address}
                  telephone={umkm.phone}
                  weekdayOpenHours={
                    umkm.time_opened.slice(0, 5) +
                    " - " +
                    umkm.time_closed.slice(0, 5)
                  }
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Umkm;
