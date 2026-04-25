(function () {
  const accent = "#156b5c";
  const black = "#0d0d0d";

  function run() {
    if (typeof Chart === "undefined") return;

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
