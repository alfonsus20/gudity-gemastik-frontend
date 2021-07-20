import React from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { Line } from "react-chartjs-2";
import mlApi from "../../api/mlApi";

const Analysis = () => {
  const [commodity, setCommodity] = React.useState<string>("");
  const [day, setDay] = React.useState<string>("");
  const [data, setData] = React.useState({});

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

  const fetchData = async () => {
    const { data } = await mlApi.get(
      `/commodity/predict?commodity_name=${commodity}&day=${day}`
    );
    setData({
      labels: data.data.map((x: any) => x.time),
      datasets: [
        {
          type: "line",
          label: "Hasil Analisis",
          data: data.data.map(
            (x: any) => Math.round(x.value * 14000 * 100) / 100
          ),
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
          yAxisID: "y",
        },
      ],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetchData();
  };

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
          <Button text="Analisis" variant="primary" size="full" type="submit" />
        </div>
      </form>
      <div className="px-12 py-6 shadow mb-8">
        <h3 className="font-semibold text-xl">Analisis Kesuksesan</h3>
        <div className="w-full h-60 overflow-hidden">
          <Line type="line" data={data} options={options} />
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
