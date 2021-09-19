import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import SuccessModal from "../../components/modal/SuccessModal";
import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField";
import { RootState } from "../../store";
import { updateStoreInfo } from "../../store/actions/userActions";
import { UPDATE_STORE_INFO_RESET } from "../../store/constants/userConstants";

const Umkm = () => {
  const [successModalShown, showSuccessModal] = React.useState<boolean>(false);
  const [bannerShown, showBanner] = React.useState<boolean>(false);
  const { userInfo, successUpdateStore, loading } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const [storeName, setStoreName] = React.useState<string>("");
  const [storeAddress, setStoreAddress] = React.useState<string>("");
  const [storePhone, setStorePhone] = React.useState<string>("");
  const [storeDescription, setStoreDescription] = React.useState<string>("");
  const [storeImage, setStoreImage] = React.useState<File>();
  const [openTime, setOpenTime] = React.useState<string>("");
  const [closeTime, setCloseTime] = React.useState<string>("");

  const handleSubmitStoreProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let body = {
      name: storeName,
      address: storeAddress,
      phone: storePhone,
      description: storeDescription,
      time_opened: openTime,
      time_closed: closeTime,
    };

    dispatch(updateStoreInfo(body, storeImage));
  };

  React.useEffect(() => {
    showBanner(!userInfo.is_store);

    if (userInfo.store_info) {
      setStoreName(userInfo.store_info.name);
      setStoreAddress(userInfo.store_info.address);
      setStoreDescription(userInfo.store_info.description);
      setStorePhone(userInfo.store_info.phone);
      setOpenTime(userInfo.store_info.time_opened);
      setCloseTime(userInfo.store_info.time_closed);
    }

    if (successUpdateStore) {
      showSuccessModal(true);
    }
  }, [userInfo, successUpdateStore, dispatch]);

  return (
    <div className="flex flex-auto flex-col">
      <SuccessModal
        title="Selamat!"
        message="Informasi UMKM anda berhasil diposting pada Halaman Gudity."
        shown={successModalShown}
        onClose={() => {
          showSuccessModal(false);
          dispatch({ type: UPDATE_STORE_INFO_RESET });
        }}
      />
      <h2 className="text-2xl font-semibold mb-5">UMKM Anda</h2>
      {bannerShown ? (
        <div className="flex-auto flex flex-col">
          <div className="flex justify-center items-center flex-auto">
            <div className="flex flex-col items-center space-y-4 flex-auto">
              <img
                src="/assets/icons/umkm.png"
                className="w-96"
                alt="Daftar Komoditas"
              />
              <div className="text-center">
                <h3 className="text-blue-marker font-semibold">
                  Ingin mempromosikan UMKM anda pada aplikasi Gudity?
                </h3>
              </div>
              <Button
                text="Mulai"
                variant="primary"
                className="w-32"
                onClick={() => showBanner(false)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <form
            className="space-y-2  mx-auto"
            onSubmit={handleSubmitStoreProfile}
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-blue-primary font-medium">
                Nama UMKM
              </label>
              <TextField
                variant="tertiary"
                placeholder="Masukkan nama UMKM"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-blue-primary font-medium">
                Deskripsi UMKM
              </label>
              <TextArea
                variant="tertiary"
                placeholder="Masukkan deskripsi UMKM"
                value={storeDescription}
                onChange={(e) => setStoreDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-blue-primary font-medium">
                Alamat
              </label>
              <TextField
                variant="tertiary"
                placeholder="Masukkan nama alamat"
                value={storeAddress}
                onChange={(e) => setStoreAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-blue-primary font-medium">
                No Telepon
              </label>
              <TextField
                onChange={(e) => setStorePhone(e.target.value)}
                variant="tertiary"
                placeholder="Masukkan nomor telepon"
                value={storePhone}
              />
            </div>
            <div className="flex flex-row justify-between gap-x-4">
              <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="" className="text-blue-primary font-medium">
                  Jam Buka
                </label>
                <TextField
                  variant="tertiary"
                  type="time"
                  value={openTime}
                  onChange={(e) => setOpenTime(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="" className="text-blue-primary font-medium">
                  Jam Tutup
                </label>
                <TextField
                  variant="tertiary"
                  type="time"
                  value={closeTime}
                  onChange={(e) => setCloseTime(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-blue-primary font-medium">
                Foto
              </label>
              <TextField
                variant="tertiary"
                placeholder="Masukkan gambar produk"
                type="file"
                required
                accept="image/*"
                onChange={(e) => setStoreImage(e.target.files![0])}
              />
            </div>
            <div className="flex justify-end pt-2">
              <Button
                text="Simpan"
                variant="primary"
                size="md"
                type="submit"
                className="w-28"
                disabled={loading}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Umkm;
