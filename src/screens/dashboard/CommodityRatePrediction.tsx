import React from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { Line } from "react-chartjs-2";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { getFutureAnalysis } from "../../store/actions/predictionActions";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";

const CommodityRatePrediction = () => {
  const [commodity, setCommodity] = React.useState<string>("");
  const [day, setDay] = React.useState<string>("");

  const { predictions, loading } = useSelector(
    (state: RootState) => state.futurePredictions
  );

  const dispatch = useDispatch();

  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    animation: {
      duration: 0,
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (commodity !== "coffee" && commodity !== "sugar") {
      toast.error("Komoditas yang disupport hanya 'coffee' dan 'sugar'");
      return;
    }
    dispatch(getFutureAnalysis(commodity, day));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Prediksi Harga Komoditas</h2>
      <form className="grid md:grid-cols-12 gap-6 mb-8" onSubmit={handleSubmit}>
        <div className="md:col-span-5 flex items-center">
          <TextField
            variant="tertiary"
            className="w-full"
            placeholder="Komoditas"
            onChange={(e) => setCommodity(e.target.value)}
          />
        </div>
        <div className="md:col-span-5 flex items-center">
          <TextField
            variant="tertiary"
            className="w-full"
            placeholder="Jangka Waktu (hari)"
            type="number"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="md:col-span-2 flex items-center">
          <Button
            text={loading ? "Loading..." : "Prediksi"}
            variant="primary"
            size="full"
            type="submit"
            disabled={loading}
          />
        </div>
      </form>
      <div className="px-4 md:px-12 py-6 shadow mb-8">
        <h3 className="font-semibold text-xl">Prediksi Harga Masa Depan</h3>
        <div className="w-full h-60 overflow-hidden relative">
          {loading ? (
            <PropagateLoader css={override} color="#2E53DA" />
          ) : (
            <Line
              type="line"
              data={{
                labels: predictions.map((x: any) => x.time),
                datasets: [
                  {
                    type: "line",
                    label: "Hasil Analisis",
                    data: predictions.map(
                      (x: any) => Math.round(x.value * 14000 * 100) / 100
                    ),
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgba(255, 99, 132, 0.2)",
                    yAxisID: "y",
                  },
                ],
              }}
              options={options}
            />
          )}
        </div>
      </div>
      <div className="px-6 md:px-12 py-6 shadow">
        <h3 className="font-semibold">Hasil</h3>
        {loading ? (
          <>
            <Skeleton style={{ width: "25%" }} />
            <br />
            <Skeleton style={{ width: "25%" }} />
          </>
        ) : (
          predictions.length > 0 && (
            <>
              <p>
                Harga hari ini : Rp{" "}
                {Math.round(predictions[0].value * 14000 * 100) / 100}
              </p>
              <p>
                Harga {day} hari ke depan : Rp{" "}
                {Math.round(
                  predictions[predictions.length - 1].value * 14000 * 100
                ) / 100}
              </p>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default CommodityRatePrediction;
