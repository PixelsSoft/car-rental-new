import Chart from "react-apexcharts";

export default function PieChart({ categoryBreakdown = [] }) {
  // Sample categoryBreakdown data (replace this with the actual API response)

  // Extract the labels and series from the categoryBreakdown data
  const labels = categoryBreakdown.map((item) => item.category);
  const series = categoryBreakdown.map((item) => parseFloat(item.percentage));

  const options = {
    labels: labels,
    dataLabels: {
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex] + "%";
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center", // Center the legend horizontally
    },
    chart: {
      events: {
        // Move the labels up to avoid overlapping with the legend
        updated: function (chartContext, config) {
          const legendHeight = chartContext.legendContainer?.clientHeight;
          chartContext.w.globals.dom.elWrap.style.marginBottom =
            legendHeight + "px";
        },
      },
    },
  };

  return (
    <div>
      <h3 style={{ width: "100%", textAlign: "center", marginBottom: 10 }}>
        Expense Breakdown
      </h3>
      <Chart options={options} series={series} type="donut" width="450" />
    </div>
  );
}
