import Chart from "react-apexcharts";

export default function PieChart() {
  const options = {
    labels: ["A", "B", "C", "D", "E"],
  };
  const series = [44, 55, 41, 17, 15];

  return (
    <div>
      <h3 style={{ width: "100%", textAlign: "center", marginBottom: 10 }}>
        Expense Breakdown
      </h3>
      <Chart options={options} series={series} type="donut" width="400" />
    </div>
  );
}
