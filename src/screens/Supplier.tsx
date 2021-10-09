import React from "react";
import Underline from "../components/Underline";
import TextField from "../components/TextField";
import Features from "../components/Features";
import SupplierCard from "../components/card/SupplierCard";
import { SearchIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { getSupplierList } from "../store/actions/supplierActions";
import { RootState } from "../store";

const Supplier = () => {
  const dispatch = useDispatch();
  const { suppliers } = useSelector((state: RootState) => state.supplierList);
  const [keyword, setKeyword] = React.useState<string>("");

  React.useEffect(() => {
    dispatch(getSupplierList());
  }, [dispatch]);

  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.username.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <div className="min-h-screen relative">
        <div
          className="w-full min-h-screen relative z-10 pt-10 text-white flex items-center bg-cover"
          style={{
            backgroundImage:
              "linear-gradient(86.97deg, rgba(0, 0, 0, 0.95) -0.91%, rgba(7, 11, 18, 0) 131.36%), url(assets/backgrounds/komoditas.jpg)",
          }}
        >
          <div className="max-w-screen-xl mx-auto w-full px-8">
            <div className="font-semibold">
              <h1 className="text-5xl my-1 leading-snug">
                Cari dan Temukan <br />
                Pemasok Terbaik Kami
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="mb-8">
            <h2 className="text-center text-4xl font-semibold mb-4">
              Kumpulan Pemasok
            </h2>
            <Underline backgroundColor="#110828" center />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 mb-8">
            <TextField
              className="w-56"
              type="text"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              placeholder="Cari Pemasok"
              variant="secondary"
              icon={<SearchIcon className="w-6 h-6" />}
            />
          </div>
          <div className="max-w-screen-lg mx-auto mb-12">
            {filteredSuppliers.length > 0 ? (
              filteredSuppliers.map((supplier) => (
                <SupplierCard
                  key={supplier.id}
                  image={supplier.thumbnail}
                  id={supplier.id}
                  name={supplier.username.name}
                  description={supplier.description}
                  location={supplier.address}
                  store={supplier.name}
                  phone={supplier.phone}
                />
              ))
            ) : (
              <h2 className="text-lg text-center py-20">Pemasok tidak ditemukan</h2>
            )}
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Supplier;
