import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { RootState } from "../../store";
import { updateUserProfile } from "../../store/actions/userActions";
import Button from "../Button";
import TextField from "../TextField";

const UserForm = () => {
  const { userInfo, loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const [enabled, enableForm] = React.useState<boolean>(false);

  const [userName, setUserName] = React.useState<string>("");
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [userAddress, setUserAddress] = React.useState<string>("");
  const [userBirthday, setUserBirthday] = React.useState<string>("");
  const [userPhone, setUserPhone] = React.useState<string>("");
  const [image, setImage] = React.useState<File>();

  const handleSubmitUserProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("asdasdasdasd");
    dispatch(
      updateUserProfile({
        name: userName,
        address: userAddress,
        phone: userPhone,
        birthday: userBirthday,
        thumbnail: image,
      })
    );
  };

  React.useEffect(() => {
    setUserName(userInfo.name);
    setUserEmail(userInfo.email);
    setUserAddress(userInfo.address);
    setUserBirthday(userInfo.birthday);
    setUserPhone(userInfo.phone);
  }, [userInfo]);

  return (
    <div>
      <form className="mt-8" onSubmit={handleSubmitUserProfile}>
        <div className="grid md:grid-cols-2 gap-x-10 mb-8">
          <div className="col-span-1 space-y-4">
            <div className="flex flex-row items-center space-x-10">
              <label htmlFor="" className="font-medium w-40 flex-shrink-0">
                Nama Lengkap
              </label>
              <span>:</span>
              <TextField
                variant="dashboard"
                className="flex-auto"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                disabled={!enabled}
              />
            </div>
            <div className="flex flex-row items-center space-x-10">
              <label htmlFor="" className="font-medium w-40 flex-shrink-0">
                Email
              </label>
              <span>:</span>
              <TextField
                variant="dashboard"
                type="email"
                className="flex-auto"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                disabled={!enabled}
              />
            </div>
            <div className="flex flex-row items-center space-x-10">
              <label htmlFor="" className="font-medium w-40 flex-shrink-0">
                Alamat
              </label>
              <span>:</span>
              <TextField
                variant="dashboard"
                className="flex-auto"
                value={userAddress}
                disabled={!enabled}
                onChange={(e) => setUserAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-1 space-y-4">
            <div className="flex flex-row items-center space-x-10">
              <label htmlFor="" className="font-medium w-40 flex-shrink-0">
                Tanggal Lahir
              </label>
              <span>:</span>
              <TextField
                variant="dashboard"
                type="date"
                value={userBirthday}
                onChange={(e) => setUserBirthday(e.target.value)}
                className="flex-auto"
                disabled={!enabled}
              />
            </div>
            <div className="flex flex-row items-center space-x-10">
              <label htmlFor="" className="font-medium w-40 flex-shrink-0">
                No Telepon
              </label>
              <span>:</span>
              <TextField
                variant="dashboard"
                type="tel"
                className="flex-auto"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                disabled={!enabled}
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
        {enabled && (
          <div className="flex justify-end">
            <Button
              text="Simpan"
              variant="primary"
              className="w-32"
              type="submit"
            />
          </div>
        )}
        <ToastContainer autoClose={2000} position="bottom-right" />
      </form>
      <div className="flex justify-end">
        {!enabled && (
          <Button
            text="Edit"
            variant="primary"
            className="w-32"
            type="button"
            disabled={loading}
            onClick={() => {
              enableForm(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default UserForm;
