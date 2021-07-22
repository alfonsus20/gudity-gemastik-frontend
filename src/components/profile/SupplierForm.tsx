import React from "react";
import Button from "../Button";
import TextField from "../TextField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { updateSupplierInfo } from "../../store/actions/userActions";
import SuccessModal from "../modal/SuccessModal";
import { UPDATE_SUPPLIER_INFO_RESET } from "../../store/constants/userConstants";

const SupplierForm = () => {
  // Supplier Data
  const { userInfo, loading, successUpdateSupplier } = useSelector(
    (state: RootState) => state.auth
  );
  const [supplierOwnerName, setSupplierOwnerName] = React.useState<string>("");
  const [supplierName, setSupplierName] = React.useState<string>("");
  const [supplierAddress, setSupplierAddress] = React.useState<string>("");
  const [supplierPhone, setSupplierPhone] = React.useState<string>("");
  const [supplierDescription, setSupplierDescription] =
    React.useState<string>("");
  const [supplierImage, setSupplierImage] = React.useState<File>();
  const dispatch = useDispatch();

  const [successModalShown, showSuccessModal] = React.useState<boolean>(false);

  const handleSubmitSupplierProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      updateSupplierInfo({
        supplier_owner_name: supplierOwnerName,
        supplier_name: supplierName,
        supplier_address: supplierAddress,
        supplier_phone: supplierPhone,
        supplier_description: supplierDescription,
        supplier_profile_image: supplierImage!,
      })
    );
  };

  React.useEffect(() => {
    setSupplierOwnerName(userInfo.supplier_owner_name!);
    setSupplierName(userInfo.supplier_name!);
    setSupplierAddress(userInfo.supplier_address!);
    setSupplierPhone(userInfo.supplier_phone!);
    setSupplierDescription(userInfo.supplier_description!);

    if (successUpdateSupplier) {
      showSuccessModal(true);
    }
  }, [userInfo, successUpdateSupplier, dispatch]);

  return (
    <form onSubmit={handleSubmitSupplierProfile}>
      <SuccessModal
        onClose={() => {
          showSuccessModal(false);
          dispatch({ type: UPDATE_SUPPLIER_INFO_RESET });
        }}
        shown={successModalShown}
        title="Terima Kasih!"
        message="Selamat anda berhasil mendaftarkan komoditas anda pada Aplikasi
            Gudity"
      />
      <div className="grid md:grid-cols-2 gap-x-10 mb-8">
        <div className="col-span-1 space-y-4">
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Nama Pemilik <span className="text-red-600">*</span>
            </label>
            <span>:</span>
            <TextField
              variant="dashboard"
              className="flex-auto"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Nama Usaha <span className="text-red-600">*</span>
            </label>
            <span>:</span>
            <TextField
              variant="dashboard"
              className="flex-auto"
              value={supplierOwnerName}
              onChange={(e) => setSupplierOwnerName(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Alamat <span className="text-red-600">*</span>
            </label>
            <span>:</span>
            <TextField
              variant="dashboard"
              className="flex-auto"
              value={supplierAddress}
              onChange={(e) => setSupplierAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="col-span-1 space-y-4">
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              No Telepon <span className="text-red-600">*</span>
            </label>
            <span>:</span>
            <TextField
              variant="dashboard"
              className="flex-auto"
              value={supplierPhone}
              onChange={(e) => setSupplierPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Deskripsi <span className="text-red-600">*</span>
            </label>
            <span>:</span>
            <TextField
              variant="dashboard"
              className="flex-auto"
              value={supplierDescription}
              onChange={(e) => setSupplierDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Foto Profil <span className="text-red-600">*</span>
            </label>
            <span>:</span>
            <TextField
              variant="dashboard"
              type="file"
              className="flex-auto"
              onChange={(e) => setSupplierImage(e.target.files![0])}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          text={loading ? "Loading..." : "Simpan"}
          variant="primary"
          type="submit"
          className="w-32"
          disabled={loading}
        />
      </div>
    </form>
  );
};

export default SupplierForm;
