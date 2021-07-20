import React from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { Line } from "react-chartjs-2";

const Analysis = () => {
  const data = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni"],
    datasets: [
      {
        type: "line",
        label: "Hasil Analisis",
        data: [5, 3, 4, 10, 8, 9, 2],
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
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
        suggestedMin: Math.min(
          ...[2, 4, 1, 3, 7, 3, 6],
          ...[5, 3, 4, 10, 8, 9, 2]
        ),
        suggestedMax: Math.max(
          ...[2, 4, 1, 3, 7, 3, 6],
          ...[5, 3, 4, 10, 8, 9, 2]
        ),
      },
      y1: {
        type: "linear",
        display: false,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        suggestedMin: Math.min(
          ...[2, 4, 1, 3, 7, 3, 6],
          ...[5, 3, 4, 10, 8, 9, 2]
        ),
        suggestedMax: Math.max(
          ...[2, 4, 1, 3, 7, 3, 6],
          ...[5, 3, 4, 10, 8, 9, 2]
        ),
      },
    },
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Analisis</h2>
      <div className="grid grid-cols-6 md:grid-cols-12 gap-6 mb-8">
        <div className="col-span-3 md:col-span-5 flex items-center">
          <TextField
            variant="dashboard"
            className="w-full"
            placeholder="Komoditas"
          />
        </div>
        <div className="col-span-3 md:col-span-5 flex items-center">
          <TextField
            variant="dashboard"
            className="w-full"
            placeholder="Jangka Waktu (hari)"
          />
        </div>
        <div className="col-span-2 flex items-center">
          <Button text="Analisis" variant="primary" size="full" />
        </div>
      </div>
      <div className="px-12 py-6 shadow mb-8">
        <h3 className="font-semibold text-xl">Analisis Kesuksesan</h3>
        <div className="w-full h-60 overflow-hidden">
          <Line type="line" data={data} options={options} />
        </div>
      </div>
      <div className="px-12 py-6 shadow">
        <h3 className='font-semibold'>Hasil</h3>
        <div>
          <p>Harga 60 hari kebelakang : 45.000</p>
          <p>Harga Hari ini : 48.250</p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
