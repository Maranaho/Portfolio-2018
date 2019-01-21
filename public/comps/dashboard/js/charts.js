



//Trend
var ctx = document.getElementById("trend").getContext('2d');

//Gradient
function gradient(rgb) {
    var gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, 'rgba('+ rgb +',.7)');
    gradient.addColorStop(1, 'rgba('+ rgb +',0)');
    ctx.fillRect(0, 0, 350, 350);
    ctx.fillStyle = gradient;
    return gradient;
}
function twoColorGradient(c1,c2) {
    var gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, c1);
    gradient.addColorStop(1, c2);
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillStyle = gradient;
    return gradient;
}

var purple = gradient('128,137,212');
var pink = gradient('224,104,176');
var orange = gradient('133,238,165');
var pieGradient = twoColorGradient('rgba(224,104,176,1)','rgba(128,137,212,1)');

var trendOptions = {
    legend:{
       display:false
    },
    scales: {
       xAxes: [{ display:false }],
       yAxes: [{
           display:false,
           ticks: {beginAtZero: true
       }
   }]
   }
}
var trendData = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [
        {
            label: "HTML",
            fill: true,
            lineTension: 0.4,
            backgroundColor: pink,
            borderColor: "rgba(224,104,176,1)",
            borderWidth: 2,
            borderCapStyle: 'round',
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(224,104,176,0)",
            pointBackgroundColor: "rgba(224,104,176,0)",
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(224,104,176,1)",
            pointHoverBorderColor: "rgba(224,104,176,1)",
            pointHoverBorderWidth: 5,
            pointRadius: 5,
            pointHitRadius: 15,
            data: [40, 38, 42, 37, 42, 57, 54, 58, 80, 81],
            spanGaps: false
        }, {
            label: "CSS",
            fill: true,
            lineTension: 0.4,
            backgroundColor: purple,
            borderColor: "rgba(128,137,212,1)",
            borderWidth: 2,
            borderCapStyle: 'round',
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(128,137,212,0)",
            pointBackgroundColor: "rgba(128,137,212,0)",
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(128,137,212,1)",
            pointHoverBorderColor: "rgba(128,137,212,1)",
            pointHoverBorderWidth: 5,
            pointRadius: 5,
            pointHitRadius: 15,
            data: [61, 63, 51, 54, 48, 65, 51, 45, 51, 48],
            spanGaps: false
        },
    ]
};





var myLineChart = new Chart(ctx, {
    type: 'line',
    data: trendData,
    options : trendOptions
});





//Radar

ctx = document.getElementById("radar").getContext('2d');
var radarData = {
    labels: ["Mastering", "Speed", "Proficiency", "Beauty", "Efficiency"],
    datasets: [
        {
            label: "HTML",
            lineTension: 0.15,
            backgroundColor: pink,
            borderColor: "rgba(224,104,176,1)",
            borderWidth: 2,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            borderCapStyle: 'round',
            borderJoinStyle: 'miter',
            pointBackgroundColor: "rgba(224,104,176,1)",
            pointBorderColor: "rgba(224,104,176,1)",
            pointHoverBackgroundColor: "rgba(224,104,176,1)",
            pointHoverBorderColor: "rgba(224,104,176,1)",
            data: [80, 70, 30, 50, 20]
        }, {
            label: "CSS",
            lineTension: 0.15,
            backgroundColor: purple,
            borderColor: "rgba(128,137,212,1)",
            borderWidth: 2,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            borderCapStyle: 'round',
            borderJoinStyle: 'miter',
            pointBackgroundColor: "rgba(128,137,212,1)",
            pointBorderColor: "rgba(128,137,212,1)",
            pointHoverBackgroundColor: "rgba(128,137,212,1)",
            pointHoverBorderColor: "rgba(128,137,212,1)",
            data: [28, 22, 45, 80, 94]
        },{
            label: "JS",
            lineTension: 0.15,
            backgroundColor: orange,
            borderColor: "rgba(133,238,165,1)",
            borderWidth: 2,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            borderCapStyle: 'round',
            borderJoinStyle: 'miter',
            pointBackgroundColor: "rgba(133,238,165,1)",
            pointBorderColor: "rgba(133,238,165,1)",
            pointHoverBackgroundColor: "rgba(133,238,165,1)",
            pointHoverBorderColor: "rgba(133,238,165,1)",
            data: [20, 62, 74, 54, 15]
        }
    ]
};


var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: radarData,
    options : {
        legend:{
           display:false,
        },
        scale: {
            gridLines: {color: 'rgba(255,255,255,.05)'},
            angleLines:{
                color: 'rgba(255,255,255,.05)'
            },
            ticks:{
                display: false
            },
            pointLabels:{
                fontColor: 'rgba(255,255,255,.3)'
            }
       }
    }
});



//Evolution
var ctx = document.getElementById("evolution").getContext('2d');

var evolData = {
    labels: ["", "", "", "", ""],
    datasets: [
        {
            label: "HTML",
            fill: true,
            lineTension: 0.15,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: "rgba(224,104,176,1)",
            borderWidth: 2,
            borderCapStyle: 'round',
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(224,104,176,0)",
            pointBackgroundColor: "rgba(224,104,176,1)",
            pointBorderWidth: 0,
            pointHoverRadius: 2,
            pointHoverBackgroundColor: "rgba(224,104,176,1)",
            pointHoverBorderColor: "rgba(224,104,176,1)",
            pointHoverBorderWidth: 5,
            pointRadius: 2,
            pointHitRadius: 15,
            data: [4, 12, 9, 16, 13],
            spanGaps: false
        }, {
            label: "CSS",
            fill: true,
            lineTension: 0.15,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: "rgba(128,137,212,1)",
            borderWidth: 2,
            borderCapStyle: 'round',
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(128,137,212,0)",
            pointBackgroundColor: "rgba(128,137,212,1)",
            pointBorderWidth: 0,
            pointHoverRadius: 2,
            pointHoverBackgroundColor: "rgba(128,137,212,1)",
            pointHoverBorderColor: "rgba(128,137,212,1)",
            pointHoverBorderWidth: 5,
            pointRadius: 2,
            pointHitRadius: 15,
            data: [8, 4, 13, 12, 13],
            spanGaps: false
        }
    ]
};
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: evolData,
    options : {
        responsive: false,
        legend:{
           display:false
        },
        scales: {
           xAxes: [{ display:false }],
           yAxes: [{
               display:false,
               ticks: {beginAtZero: true
           }
       }]
       }
    }
});




//today
var ctx = document.getElementById("today").getContext('2d');

data = {
    labels: ["", "", "", "", "","", "", "", "", "","", "", "", "", "","", "", "", "", ""],
    datasets: [
        {
            label: "HTML",
            fill: true,
            backgroundColor: "rgba(128,137,212,.5)",
            borderWidth: 0,
            hoverBackgroundColor: "rgba(128,137,212,.8)",
            data: [4, 12, 9, 16, 13,4, 12, 9, 16, 13, 12, 9, 4, 8, 6, 3, 9, 7, 3]
        }
    ]
};
var myLineChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options : {
        responsive: false,
        legend:{
           display:false
        },
        scales: {
           xAxes: [{ display:false }],
           yAxes: [{
               display:false,
               ticks: {beginAtZero: true
           }
       }]
       }
    }
});

//Pie
var ctx = document.getElementById("pie").getContext('2d');

options = {
    cutoutPercentage: 95,
    responsive: false,
    legend:{ display:false}
}
var data = {
    labels: ["",""],
    datasets: [
        {
            data: [100, 50],
            backgroundColor: [
                pieGradient,
                "rgba(255,255,255,.05)"
            ],
            hoverBackgroundColor: [
                pieGradient,
                "rgba(255,255,255,.05)"
            ],
            borderWidth: [
                0, 0
            ]
        }]
};
var myLineChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options : options
});
