import Chart from "react-apexcharts";

export default function Basic( { monthlyData = {}, text, subtitle } ) {
  const options = {
    chart: {
      id: "basic-bar",

    },
    tooltip: {
      y: {
        formatter: function ( val ) {
          return "$" + val.toFixed( 2 ); // Adding the dollar sign and fixing the decimal to 2 places.
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    title: {
      text,
      align: "left",
      // margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        //   fontFamily:  undefined,
        color: "#263238",
      },
    },
    subtitle: {
      text: subtitle,
      align: "left",
      //   margin: 10,
      offsetX: 0,
      offsetY: 30,
      floating: false,
      style: {
        fontSize: "12px",
        fontWeight: "normal",
        fontFamily: undefined,
        color: "#888",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      showForSingleSeries: true,
      showForNullSeries: true,
      showForZeroSeries: true,
      floating: false,
      fontSize: "14px",

      fontWeight: 400,
      markers: {
        width: 14,
        height: 14,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: ["rgb(35, 199, 112)", "rgb(138, 162, 178)"],
        radius: 0,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
    },
    fill: {
      colors: ["rgb(35, 199, 112)", "rgb(138, 162, 178)"],
    },
    dataLabels: {
      enabled: false,
    },
  };

  //   const series = [
  //     { name: "Inflow", data: [12, 20, 30, 299, 232, 101, 22] },
  //     { name: "Outflow", data: [30, 40, 50, 22, 449, 222, 212, 299] },
  //   ];

  const months = Array.from( { length: 12 }, ( _, i ) => i + 1 ); // Create an array from 1 to 12
  const series = [
    {
      name: "Inflow",
      data: months.map(
        ( month ) =>
          monthlyData[new Date().getFullYear()]?.[month]?.profit || 0
      ),
    },
    {
      name: "Outflow",
      data: months.map(
        ( month ) => monthlyData[new Date().getFullYear()]?.[month]?.expense || 0
      ),
    },
  ];

  return <Chart options={options} series={series} type="bar" width={600} />;
}
