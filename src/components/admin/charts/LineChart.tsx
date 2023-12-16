import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const options = {
    chart: {
      height: 350,
      zoom: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      name: "All Tasks",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "My Tasks",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "My Tasks",
      data: [10, 32, 25, 42, 14, 32, 15],
    },
  ];

  return (
    <ReactApexChart
      type="line"
      options={options}
      series={series}
      height={350}
    />
  );
};

export default LineChart;
