import React from "react";
import { Bar } from "react-chartjs-2";
function Chartgender() {
  const data = {
    labels: ["ต่ำกว่า 20 ปี", "21-30", "31-40", "41-60", "มากกว่า 60 ปี"],
    datasets: [
      {
        barPercentage: 0.5,
        barThickness: 20,

        label: "ชาย",
        data: [5, 10, 15, 13, 10],
        backgroundColor: "#3B88FD",
      },
      {
        barPercentage: 0.5,
        barThickness: 20,
        label: "หญิง",
        data: [-5, -10, -15, -13, -10],
        backgroundColor: "#13EECC",
      },
    ],
  };

  const options = {
    legend: {
      position: "top",
      align: "end",
      fullWidth: true,
      display: false,
      labels: {
        boxWidth: 15,
        boxHeight: 15,
        fontColor: "#292766",
        fontFamily: "Sukhumvit Set",
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            min: -25,
            max: 25,

            callback: function (value, index, values) {
              return value + "K";
            },
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}
export default Chartgender;