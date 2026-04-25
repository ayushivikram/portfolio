(function () {
  const accent = "#156b5c";
  const black = "#0d0d0d";

  function run() {
    if (typeof Chart === "undefined") return;

    const igDonutBase = {
      type: "doughnut",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "58%",
        layout: {
          padding: { top: 8, right: 10, bottom: 6, left: 10 },
        },
        plugins: {
          legend: {
            position: "bottom",
            align: "center",
            labels: {
              boxWidth: 12,
              padding: 10,
              font: { size: 11 },
            },
          },
        },
      },
    };

    const elIgFollow = document.getElementById("chart-ig-follow");
    if (elIgFollow) {
      new Chart(elIgFollow, {
        ...igDonutBase,
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
        ...igDonutBase,
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
