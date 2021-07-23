import React from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getPastAnalysis } from "../../store/actions/analysisActions";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";

const Analysis = () => {
  const [commodity, setCommodity] = React.useState<string>("");
  const [day, setDay] = React.useState<string>("");

  const { predictions, loading } = useSelector(
    (state: RootState) => state.pastPredictions
  );
  const dispatch = useDispatch();

  const options = {
    maintainAspectRatio: false,
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

  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(getPastAnalysis(commodity, day));
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => {});
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Analisis</h2>
      <form className="grid md:grid-cols-12 gap-6 mb-8" onSubmit={handleSubmit}>
        <div className="md:col-span-5 flex items-center">
          <TextField
            variant="dashboard"
            className="w-full"
            placeholder="Komoditas"
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
          />
        </div>
        <div className="md:col-span-5 flex items-center">
          <TextField
            variant="dashboard"
            className="w-full"
            placeholder="Jangka Waktu (hari)"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="md:col-span-2 flex items-center">
          <Button
            text={loading ? "Loading..." : "Analisis"}
            variant="primary"
            size="full"
            type="submit"
            disabled={loading}
          />
        </div>
      </form>
      <div className="px-8 md:px-12 py-6 shadow mb-8">
        <h3 className="font-semibold text-xl">Analisis Kesuksesan</h3>
        <div className="w-full h-60 overflow-hidden relative">
          {loading ? (
            <PropagateLoader css={override} color="#2E53DA" />
          ) : (
            <Line
              type="line"
              data={{
                labels: predictions?.map((x: any) => x.time),
                datasets: [
                  {
                    type: "line",
                    label: "Hasil Analisis",
                    data: predictions?.map(
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
      <div className="px-12 py-6 shadow">
        <h3 className="font-semibold">Hasil</h3>
        <div>
          <p>Harga 60 hari kebelakang : 45.000</p>
          <p>Harga Hari ini : 48.250</p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
