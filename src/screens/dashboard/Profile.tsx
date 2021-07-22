import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import CommodityWelcomeModal from "../../components/modal/CommodityWelcomeModal";
import Tab from "../../components/Tab";
import { RootState } from "../../store";
import Skeleton from "react-loading-skeleton";
import UserForm from "../../components/profile/UserForm";
import SupplierForm from "../../components/profile/SupplierForm";

const Profile = () => {
  const { userInfo, loading } = useSelector((state: RootState) => state.auth);

  const [welcomeModal, showWelcomeModal] = React.useState<boolean>(false);
  const [tabKey, setTabKey] = React.useState<string>("");
  const [openTabIndex, setOpenTabIndex] = React.useState<number>(0);
  const [commodityTabOpen, openCommodityTab] = React.useState<boolean>(false);

  React.useEffect(() => {
    openCommodityTab(!!userInfo.supplier_name);
  }, [userInfo]);

  return (
    <div>
      <CommodityWelcomeModal
        shown={welcomeModal}
        onClose={() => {
          showWelcomeModal(false);
          openCommodityTab(true);
          setOpenTabIndex(1);
          setTabKey("open commodity tab");
        }}
      />
      <h2 className="text-2xl font-semibold mb-5">Profile</h2>{" "}
      <div className="flex flex-row items-center">
        <div className="mr-8">
          <img
            src={
              !loading && userInfo.profile_image
                ? userInfo.profile_image
                : "/assets/icons/user.png"
            }
            className="w-36 h-36 rounded-md"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-2xl mb-3">
            {loading ? <Skeleton style={{ width: "12rem" }} /> : userInfo.name}
          </h3>
          <div className="flex">
            <div
              className={`px-4 py-2 ${
                userInfo.supplier_name ? "bg-green-500" : "bg-gray-300"
              } text-white text-center rounded-full w-auto text-sm`}
            >
              Supplier
            </div>
          </div>
        </div>
      </div>
      <div>
        <Tab
          key={tabKey}
          openTabIndex={openTabIndex}
          tabs={[
            {
              title: "Profile",
              content: <UserForm />,
            },
            {
              title: "Komoditas",
              content: (
                <div className="mt-8">
                  {commodityTabOpen ? (
                    <SupplierForm />
                  ) : (
                    <div className="flex flex-col items-center space-y-4">
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
                    </div>
                  )}
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
