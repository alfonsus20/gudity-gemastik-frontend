import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ToastContainer } from "react-toastify";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { RootState } from "../../store";
import {
  deleteUserSupplierProduct,
  getUserSupplierProducts,
} from "../../store/actions/userActions";

const CommodityProducts = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const history = useHistory();

  React.useEffect(() => {
    if (
      userInfo.is_supplier &&
      userInfo.supplier_info &&
      !userInfo.supplier_info.products
    ) {
      dispatch(getUserSupplierProducts(userInfo.supplier_info.id));
    }
  }, [userInfo]);

  return (
    <div className="flex flex-col flex-auto">
      <h2 className="text-2xl font-semibold mb-5">Kumpulan Produk Anda</h2>
      {userInfo && !userInfo.is_supplier && (
        <div className="flex-auto flex flex-col">
          <div className="flex justify-center items-center flex-auto">
            <div className="flex flex-col items-center space-y-4 flex-auto">
              <img
                src="/assets/icons/shopping.png"
                className="w-80"
                alt="Daftar Komoditas"
              />
              <div className="text-center">
                <h3 className="text-blue-marker font-semibold">
                  Ingin Bergabung menjadi bagian dari Pemasok Kami?
                </h3>
                <p className="text-blue-marker text-sm">
                  Dapatkan manfaat dan keuntungan bagi usaha anda
                </p>
              </div>
              <Button
                text="Daftar"
                variant="primary"
                className="w-32"
                pathName="dashboard/profil"
              />
            </div>
          </div>
        </div>
      )}
      {userInfo && userInfo.is_supplier && (
        <>
          <div className="flex flex-row justify-between items-center mb-4">
            <TextField
              icon={<SearchIcon className="w-6 h-6" />}
              variant="secondary"
              placeholder="Cari Produk Anda"
              rounded
            />
            <div>
              <Button
                text="Tambah Produk"
                variant="secondary"
                pathName="dashboard/produk/tambah"
              />
            </div>
          </div>

          {userInfo.supplier_info &&
          userInfo.supplier_info.products &&
          userInfo.supplier_info.products.length > 0 ? (
            <div className="shadow rounded-md px-6 py-4 overflow-x-auto w-full">
              <table className="w-full border-collapse table-fixed table whitespace-nowrap lg:whitespace-normal">
                <tbody className="table w-full">
                  <tr className="text-left">
                    <th className="px-3 py-2 ">Nama Produk</th>
                    <th className="px-3 py-2 ">Deskripsi Produk</th>
                    <th className="px-3 py-2 ">Harga</th>
                    <th className="px-3 py-2 ">Ketersediaan</th>
                    <th className="px-3 py-2 ">Actions</th>
                  </tr>
                  {userInfo.supplier_info.products.map((product) => (
                    <tr key={product.id}>
                      <td className="p-3">{product.name}</td>
                      <td className="p-3">{product.description}</td>
                      <td className="p-3">{product.price}/ kg</td>
                      <td className="p-3">{product.quality}</td>
                      <td className="p-3 flex flex-col md:flex-row gap-4">
                        <Button
                          variant="primary"
                          text="Edit"
                          className="w-20"
                          onClick={() =>
                            history.push(`/dashboard/produk/${product.id}/edit`)
                          }
                        />
                        <Button
                          variant="danger"
                          text="Hapus"
                          className="w-20"
                          onClick={() =>
                            dispatch(
                              deleteUserSupplierProduct(
                                product.id,
                                product.thumbnail
                              )
                            )
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div
              className="flex items-center justify-center"
              style={{ minHeight: 200 }}
            >
              <h2 className="text-center text-2xl">Belum ada produk</h2>
            </div>
          )}
        </>
      )}
      <ToastContainer autoClose={2000} position="bottom-right" />
    </div>
  );
};

export default CommodityProducts;

// const Commodity = () => {
//   return (
//     <div className='flex flex-col flex-auto'>
//       <h2 className="text-2xl font-semibold mb-5">Komoditas Anda</h2>
//       <div className="flex-auto flex flex-col">
//         <div className="flex justify-center items-center flex-auto">
//           <div className="flex flex-col items-center space-y-4 flex-auto">
//             <img
//               src="/assets/icons/shopping.png"
//               className="w-80"
//               alt="Daftar Komoditas"
//             />
//             <div className="text-center">
//               <h3 className="text-blue-marker font-semibold">
//                 Ingin Bergabung menjadi bagian dari Komoditas Kami?
//               </h3>
//               <p className="text-blue-marker text-sm">
//                 Dapatkan manfaat dan keuntungan bagi usaha anda
//               </p>
//             </div>
//             <Button text="Daftar" variant="primary" className="w-32" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Commodity;
