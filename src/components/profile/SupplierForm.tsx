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
  const { userInfo, loading, successUpdateSupplier, } = useSelector(
    (state: RootState) => state.auth
  );
  const [name, setName] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [image, setImage] = React.useState<File>();
  const dispatch = useDispatch();

  const [successModalShown, showSuccessModal] = React.useState<boolean>(false);

  const handleSubmitSupplierProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      updateSupplierInfo({
        name,
        address,
        phone,
        description,
      })
    );
  };

  React.useEffect(() => {
    if (userInfo.supplier_info) {
      setName(userInfo.supplier_info.name);
      setAddress(userInfo.supplier_info.address);
      setPhone(userInfo.supplier_info.phone);
      setDescription(userInfo.supplier_info.description);
    }

    if (successUpdateSupplier) {
      showSuccessModal(true);
    }
  }, [successUpdateSupplier, userInfo]);

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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>{" "}
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              No Telepon <span className="text-red-600">*</span>
            </label>
            <span>:</span>
            <TextField
              variant="dashboard"
              className="flex-auto"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="col-span-1 space-y-4">
          <div className="flex flex-row items-center space-x-10">
            <label htmlFor="" className="font-medium w-40 flex-shrink-0">
              Deskripsi <span className="text-red-600">*</span>
            </label>
            <span>:</span>
            <TextField
              variant="dashboard"
              className="flex-auto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              onChange={(e) => setImage(e.target.files![0])}
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
