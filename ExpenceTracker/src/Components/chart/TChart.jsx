import React from "react";
import Chart from "react-apexcharts";
const options = {
  lables: ["Income", "Expence"],
  colors: ["#213ebf", "#fd5e53"],
  chart: {
    wiidth: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legned: {
    show: false,
  },
  datalables: {
    enabled: false,
  },
  hover: {
    mode: null,
  },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        lables: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#213ebf", "#fd5e53"],
  },

  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};
function TChart({ expence = 100, income = 500 }) {
  return (
    <Chart
      options={options}
      series={[income, expence]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
}

export default TChart;
