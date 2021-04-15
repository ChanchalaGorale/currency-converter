import React from "react";
import { Line } from "react-chartjs-2";

function Chart({ data, lable }) {
  const mydata = {
    labels: lable,
    datasets: [
      {
        label: "Last 60 days trend",
        data: data,
        fill: true,
        backgroundColor: "rgb(30,144,255, 0.2)",
        borderColor: "rgba(30,144,255)",
      },
    ],
  };

  const options = {
    scales: {},
  };

  return (
    <div>
      <Line data={mydata} options={options} />
    </div>
  );
}

export default Chart;
