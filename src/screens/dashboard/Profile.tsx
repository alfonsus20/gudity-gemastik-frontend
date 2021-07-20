import React from "react";
import Button from "../../components/Button";
import CommodityWelcomeModal from "../../components/modal/CommodityWelcomeModal";
import Tab from "../../components/Tab";
import TextField from "../../components/TextField";

const Profile = () => {
  const [welcomeModal, showWelcomeModal] = React.useState<boolean>(false);

  return (
    <div>
      <CommodityWelcomeModal
        shown={welcomeModal}
        onClose={() => showWelcomeModal(false)}
      />
      <h2 className="text-2xl font-semibold mb-5">Profile</h2>
      <div className="flex flex-row items-center">
        <div className="mr-8">
          <img
            src="/assets/pictures/user-random.jpg"
            className="w-36 h-36 rounded-md"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-2xl mb-3">Bocah Mozaaaaaaaaaaaik</h3>
          <div className="flex">
            <div className="px-4 py-2 bg-gray-300 text-white text-center rounded-full w-auto text-sm">
              Komoditas
            </div>
          </div>
        </div>
      </div>
      <div>
        <Tab
          tabs={[
            {
              title: "Profile",
              content: (
                <div className="mt-8">
                  <div className="grid grid-cols-2 gap-x-10 mb-8">
                    <div className="col-span-1 space-y-4">
                      <div className="flex flex-row items-center space-x-10">
                        <label
                          htmlFor=""
                          className="font-medium w-40 flex-shrink-0"
                        >
                          Nama Lengkap
                        </label>
                        <span>:</span>
                        <TextField variant="dashboard" className="flex-auto" />
                      </div>
                      <div className="flex flex-row items-center space-x-10">
                        <label
                          htmlFor=""
                          className="font-medium w-40 flex-shrink-0"
                        >
                          Password
                        </label>
                        <span>:</span>
                        <TextField
                          variant="dashboard"
                          type="password"
                          className="flex-auto"
                        />
                      </div>
                      <div className="flex flex-row items-center space-x-10">
                        <label
                          htmlFor=""
                          className="font-medium w-40 flex-shrink-0"
                        >
                          Email
                        </label>
                        <span>:</span>
                        <TextField
                          variant="dashboard"
                          type="email"
                          className="flex-auto"
                        />
                      </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                      <div className="flex flex-row items-center space-x-10">
                        <label
                          htmlFor=""
                          className="font-medium w-40 flex-shrink-0"
                        >
                          Alamat
                        </label>
                        <span>:</span>
                        <TextField variant="dashboard" className="flex-auto" />
                      </div>
                      <div className="flex flex-row items-center space-x-10">
                        <label
                          htmlFor=""
                          className="font-medium w-40 flex-shrink-0"
                        >
                          Tanggal Lahir
                        </label>
                        <span>:</span>
                        <TextField
                          variant="dashboard"
                          type="date"
                          className="flex-auto"
                        />
                      </div>
                      <div className="flex flex-row items-center space-x-10">
                        <label
                          htmlFor=""
                          className="font-medium w-40 flex-shrink-0"
                        >
                          No Telepon
                        </label>
                        <span>:</span>
                        <TextField
                          variant="dashboard"
                          type="tel"
                          className="flex-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button text="Edit" variant="primary" className="w-32" />
                  </div>
                </div>
              ),
            },
            {
              title: "Komoditas",
              content: (
                <div className="mt-8">
                  <div className="grid grid-cols-2 gap-x-10 mb-8">
                    <div className="col-span-1 space-y-4">
                      <div className="flex flex-row items-center space-x-10">
                        <label htmlFor="" className="font-medium w-40 flex-shrink-0">
                          Nama Pemilik <span className='text-red-600'>*</span>
                        </label>
                        <span>:</span>
                        <TextField variant="dashboard" className="flex-auto" />
                      </div>
                      <div className="flex flex-row items-center space-x-10">
                        <label htmlFor="" className="font-medium w-40 flex-shrink-0">
                          Nama Usaha <span className='text-red-600'>*</span>
                        </label>
                        <span>:</span>
                        <TextField
                          variant="dashboard"
                          className="flex-auto"
                        />
                      </div>
                      <div className="flex flex-row items-center space-x-10">
                        <label htmlFor="" className="font-medium w-40 flex-shrink-0">
                          Alamat <span className='text-red-600'>*</span>
                        </label>
                        <span>:</span>
                        <TextField
                          variant="dashboard"
                          className="flex-auto"
                        />
                      </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                      <div className="flex flex-row items-center space-x-10">
                        <label htmlFor="" className="font-medium w-40 flex-shrink-0">
                          No Telepon <span className='text-red-600'>*</span>
                        </label>
                        <span>:</span>
                        <TextField variant="dashboard" className="flex-auto" />
                      </div>
                      <div className="flex flex-row items-center space-x-10">
                        <label htmlFor="" className="font-medium w-40 flex-shrink-0">
                          Deskripsi <span className='text-red-600'>*</span>
                        </label>
                        <span>:</span>
                        <TextField
                          variant="dashboard"
                          className="flex-auto"
                        />
                      </div>
                      <div className="flex flex-row items-center space-x-10">
                        <label htmlFor="" className="font-medium w-40 flex-shrink-0">
                          Foto Profil <span className='text-red-600'>*</span>
                        </label>
                        <span>:</span>
                        <TextField
                          variant="dashboard"
                          type="file"
                          className="flex-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button text="Simpan" variant="primary" className="w-32" />
                  </div>
                  {/* <div className="flex flex-col items-center space-y-4">
                    <img
                      src="/assets/icons/daftar-komoditas.png"
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
                    <Button
                      text="Daftar"
                      variant="primary"
                      className="w-32"
                      onClick={() => showWelcomeModal(true)}
                    />
                  </div> */}
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Profile;
