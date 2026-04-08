(function () {
  const accent = "#156b5c";
  const black = "#0d0d0d";

  function run() {
    if (typeof Chart === "undefined") return;

    const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const viewsData = [7200, 8100, 9500, 10200, 11800, 12400];
    const uniqueData = [2100, 2400, 2800, 3100, 3500, 3720];

    const lineDefaults = {
      type: "line",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { color: "rgba(0,0,0,0.06)" },
            ticks: { font: { size: 11 } },
          },
          y: {
            grid: { color: "rgba(0,0,0,0.06)" },
            ticks: { font: { size: 11 } },
          },
        },
      },
    };

    const elViews = document.getElementById("chart-yt-views");
    if (elViews) {
      new Chart(elViews, {
        ...lineDefaults,
        data: {
          labels: months,
          datasets: [
            {
              label: "Views",
              data: viewsData,
              borderColor: black,
              backgroundColor: "rgba(10,10,10,0.06)",
              fill: true,
              tension: 0.25,
              borderWidth: 2,
            },
          ],
        },
      });
    }

    const elUnique = document.getElementById("chart-yt-unique");
    if (elUnique) {
      new Chart(elUnique, {
        ...lineDefaults,
        data: {
          labels: months,
          datasets: [
            {
              label: "Unique viewers",
              data: uniqueData,
              borderColor: accent,
              backgroundColor: "rgba(21, 107, 92, 0.2)",
              fill: true,
              tension: 0.25,
              borderWidth: 2,
            },
          ],
        },
      });
    }

    const donutOptions = {
      type: "doughnut",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { boxWidth: 12, font: { size: 11 } },
          },
        },
      },
    };

    const elIgFollow = document.getElementById("chart-ig-follow");
    if (elIgFollow) {
      new Chart(elIgFollow, {
        ...donutOptions,
        data: {
          labels: ["Followers", "Non-followers"],
          datasets: [
            {
              data: [27.2, 72.8],
              backgroundColor: [black, accent],
              borderWidth: 2,
              borderColor: "#fff",
            },
          ],
        },
      });
    }

    const elIgGender = document.getElementById("chart-ig-gender");
    if (elIgGender) {
      new Chart(elIgGender, {
        ...donutOptions,
        data: {
          labels: ["Men", "Women"],
          datasets: [
            {
              data: [57.5, 42.5],
              backgroundColor: [black, accent],
              borderWidth: 2,
              borderColor: "#fff",
            },
          ],
        },
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
