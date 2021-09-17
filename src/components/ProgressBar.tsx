import React from "react";
import { TRANSACTION_PHASES } from "../utils/constants";

type ProgressBarState = {
  status: string;
};

const ProgressBar = ({ status }: ProgressBarState) => {
  const convertStatusToNumber = (): number => {
    if (status === "diterima") {
      return 3;
    } else if (status === "diantar") {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <div className="shadow rounded-md max-w-screen-xl mx-auto px-8 py-12 m-8">
      <h3 className="text-center text-2xl font-semibold">
        Status Transaksi dan Pesanan
      </h3>
      <div className="max-w-screen-lg mx-auto py-10 relative">
        <div className="relative">
          <div className="absolute w-full h-1 bg-blue-progress top-1/2 transform -translate-y-1/2 z-10"></div>
          <div className="flex flex-row justify-between relative z-20">
            {TRANSACTION_PHASES.map((phase, i) => (
              <div
                className={`w-16 md:w-20 h-16 md:h-20 flex items-center justify-center rounded-full border-4 border-blue-progress ${
                  phase.id <= convertStatusToNumber()
                    ? "bg-blue-progress"
                    : " bg-white"
                }`}
                key={i}
              >
                <img
                  src={`/assets/icons/progress/${
                    phase.id <= convertStatusToNumber()
                      ? phase.finishedImage
                      : phase.unfinishedImage
                  }.svg`}
                  alt=""
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-2">
          <div className="flex flex-row justify-between relative">
            {TRANSACTION_PHASES.map((phase, i) => (
              <p
                className="w-16 md:w-20 flex items-center justify-center rounded-full text-xs text-center bg-white"
                key={i}
              >
                {phase.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
