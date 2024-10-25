const data = [700, 950, 790, 400, 1000, 590, 850, 300, 820, 680, 950, 600];

const ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: data,
        backgroundColor: "#8576FF", // Bar color
        barThickness: 15, // Adjust the bar width
      },
    ],
  },
  options: {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false, // Allows the chart to adapt to custom container sizes
    lineWidth: 10,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 200, // Set the interval to 200
          callback: function (value) {
            // Ensure each tick is displayed
            return value; // Return each tick value as-is
          },
        },
      },
      x: {
        ticks: {
          autoSkip: false, // Prevent skipping x-axis labels
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
        display: false, // Hide the legend (label box)
      },
    },
  },
});
