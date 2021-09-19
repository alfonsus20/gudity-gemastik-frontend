import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import DashboardBanner from "../../components/DashboardBanner";
import DashboardWelcomeModal from "../../components/modal/DashboardWelcomeModal";
import { DASHBOARD_FEATURES } from "../../utils/constants";

interface LocationState {
  from: string;
}

const Home = () => {
  const [welcomeModalShown, showWelcomeModal] = React.useState<boolean>(false);
  const { state } = useLocation<LocationState>();

  useEffect(() => {
    if (state && state.from === "/daftar") {
      showWelcomeModal(true);
    }
  }, []);

  return (
    <div className="space-y-6">
      <DashboardWelcomeModal
        shown={welcomeModalShown}
        onClose={() => showWelcomeModal(false)}
      />
      <h2 className="text-2xl font-semibold mb-5">Halaman Utama</h2>
      <DashboardBanner
        description="“Hal terburuk tentang bisnis adalah keraguan.” - Napoleon. Hilangkan
    keraguanmu dengan analisis dan prediksi sesering mungkin. Have a
    nice day!"
        image="visualization.png"
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_FEATURES.map((feature, i) => (
          <Link
            to={`/dashboard/${feature.pathname}`}
            className={`${feature.backgroundColor} mx-auto px-8 py-6 col-span-1  text-white rounded-md text-center flex items-center font-medium w-full transform hover:bg-opacity-95`}
            key={i}
          >
            {feature.text}
          </Link>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row shadow-lg px-8 py-12 rounded-md items-center mx-auto">
        <p className="text-center font-medium mb-4 sm:mb-0">
          Lakukan Analisis dan Prediksi sebanyak mungkin untuk memberikan hasil
          yang maksimal dalam perencanaan usaha anda kedepan
        </p>
        <div className="flex-shrink-0 w-56 flex justify-center">
          <Button
            variant="secondary"
            text="Mulai Sekarang"
            size="md"
            pathName="dashboard/analisis"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
