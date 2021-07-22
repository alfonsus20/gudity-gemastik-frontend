import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Button from "../Button";
import TextField from "../TextField";

const UserForm = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [enabled, enableForm] = React.useState<boolean>(false);

  // User data
  const [userName, setUserName] = React.useState<string>(userInfo.name!);
  const [userEmail, setUserEmail] = React.useState<string>(userInfo.email!);
  const [userAddress, setUserAddress] = React.useState<string>(
    userInfo.address!
  );
  const [userBirthday, setUserBirthday] = React.useState<string>(
    userInfo.birthday!
  );
  const [userPhone, setUserPhone] = React.useState<string>(userInfo.phone!);

  const handleSubmitUserProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    setUserName(userInfo.name!);
    setUserEmail(userInfo.email!);
    setUserAddress(userInfo.address!);
    setUserBirthday(userInfo.birthday!);
    setUserPhone(userInfo.phone!);
  }, [userInfo]);

  return (
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
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          text={enabled ? "Simpan" : "Edit"}
          variant="primary"
          className="w-32"
          type="button"
          onClick={() => {
            enableForm(true);
          }}
        />
      </div>
    </form>
  );
};

export default UserForm;
