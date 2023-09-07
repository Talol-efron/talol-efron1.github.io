var ctx = document.getElementById("hennaieChart");

var myRadarChart = new Chart(ctx, {
    //グラフの種類
    type: 'radar',
    //データの設定
    data: {
        //データ項目のラベル
        labels: ["総合評価", "再現性", "おもろしろさ", "なるほ度", "読みやすさ"],
        //データセット
        datasets: [
            {
            label: "総合評価",
            //背景色
            backgroundColor: "rgba(128,128,128,0.5)",
            //枠線の色
            borderColor: "rgba(105,105,105,1)",
            //結合点の背景色
            pointBackgroundColor: "rgba(0,0,0,1)",
            //結合点の枠線の色
            pointBorderColor: "#fff",
            //結合点の背景色（ホバ時）
            pointHoverBackgroundColor: "#fff",
            //結合点の枠線の色（ホバー時）
            pointHoverBorderColor: "rgba(128,128,128,1)",
            //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
            hitRadius: 5,
            //グラフのデータ
            data: [5,1,5,5,5],
            }
        ]
    },
    options: {
        // レスポンシブ指定
        responsive: true,
        scale: {
            ticks: {
            // 最小値の値を0指定
            beginAtZero:true,
            min: 0,
            // 最大値を指定
            max: 5,
            stepSize: 1,
            }
        }
    },
});
