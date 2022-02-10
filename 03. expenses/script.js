var barChartData = {
    labels: [
        "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
    ], 
    datasets: [
        {
            label: "Income",
            backgroundColor: "slateblue",
            barThickness: 7,
            data: [3700, 2100, 1500, 3200, 2000, 1300, 400]
        }, 
        {
            label: "Expenses",
            backgroundColor: "hotpink",
            barThickness: 4,
            data: [1700, 800, 200, 1900, 1300, 800, 200] 
        }
    ]
};

window.onload = function() {
    var ctx = document.getElementById("chart");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: {
            layout: {
                padding: 10
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }   
                }], 
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 4000, 
                        stepSize: 1000, 
                        callback: function(label, index, labels) {
                            switch (label) {
                                case 0: 
                                    return "0";
                                case 1000: 
                                    return "1k";
                                case 2000:
                                    return "2k";
                                case 3000:
                                    return "3k";
                                case 4000:
                                    return "4k"
                            }
                        }
                    }
                }]
            },
            legend: {
                position: "bottom", 
                labels: {
                    usePointStyle: true,
                    boxWidth: 6
                }
            }
        } 
    });
};