import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

const CommodityProducts = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold mb-5">Kumpulan Produk Anda</h2>
      <div className="flex flex-row justify-between items-center mb-4">
        <TextField
          icon={<SearchIcon className="w-6 h-6" />}
          variant="secondary"
          placeholder="Cari Produk Anda"
          rounded
        />
        <div>
          <Button text="Tambah Produk" variant="secondary" />
        </div>
      </div>
      {/* <div className="flex-auto flex flex-col">
        <div className="flex justify-center items-center flex-auto">
          <div className="flex flex-col items-center space-y-4 flex-auto">
            <img
              src="/assets/icons/shopping.png"
              className="w-80"
              alt="Daftar Komoditas"
            />
            <div className="text-center">
              <h3 className="text-blue-marker font-semibold">
                Ingin Bergabung menjadi bagian dari Komoditas Kami?
              </h3>
              <p className="text-blue-marker text-sm">
                Dapatkan manfaat dan keuntungan bagi usaha anda
              </p>
            </div>
            <Button text="Daftar" variant="primary" className="w-32" />
          </div>
        </div>
      </div> */}
      <div className="shadow rounded-md px-6 py-4 overflow-x-auto w-full">
        <table
          className="w-full border-collapse table-fixed table whitespace-nowrap lg:whitespace-normal"
        >
          <tbody className="table">
            <tr className="text-left">
              <th className="px-3 py-2 ">Nama Produk</th>
              <th className="px-3 py-2 ">Deskripsi Produk</th>
              <th className="px-3 py-2 ">Harga</th>
              <th className="px-3 py-2 ">Kuantitas</th>
              <th className="px-3 py-2 ">Kualitas</th>
              <th className="px-3 py-2 ">Ketersediaan</th>
              <th className="px-3 py-2 ">Actions</th>
            </tr>
            <tr>
              <td className="p-3">Lorem ipsum dolor sit,</td>
              <td className="p-3">
                Pariatur explicabo quibusdam veritatis temporibus quam ea, aut
                sunt nobis.
              </td>
              <td className="p-3">3.725/ KG</td>
              <td className="p-3">1000/ KG</td>
              <td className="p-3">1000/ KG</td>
              <td className="p-3">Premium</td>
              <td className="p-3 flex flex-col md:flex-row gap-4">
                <Button variant="primary" text="Edit" className="w-20" />
                <Button variant="danger" text="Hapus" className="w-20" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
