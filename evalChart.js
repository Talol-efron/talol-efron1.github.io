// bookEvaluationChart.js

function BookEvaluationChart(ctx, data) {
    return new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["総合評価", "モチベーション", "おもろしろさ", "なるほ度", "読みやすさ"],
            datasets: [
                {
                    label: "総合評価",
                    backgroundColor: "rgba(128,128,128,0.5)",
                    borderColor: "rgba(105,105,105,1)",
                    pointBackgroundColor: "rgba(0,0,0,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(128,128,128,1)",
                    hitRadius: 5,
                    data: data,
                }
            ]
        },
        options: {
            responsive: true,
            scale: {
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 5,
                    stepSize: 1,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });
}

// 外部からこの関数を利用できるようにする
window.BookEvaluationChart = BookEvaluationChart;
