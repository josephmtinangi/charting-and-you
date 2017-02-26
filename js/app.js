var min = 0;
var max = 100;

function getRandom()
{
	var data = [];
	for(var i = 0; i < 7;i++){
		data[i] = (Math.floor((1 + Math.random() * max) + min))
	}

	return data;
}

var realData1 = getRandom();
var realData2 = getRandom();
var realData3 = getRandom();

var data = {
		labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

		datasets: [
			{
				label: 'Action',
				backgroundColor: "rgba(53, 53, 255, .8)",
				data: realData1
			},
			{
				label: 'First person shooter',
				backgroundColor: "rgba(53, 53, 255, .7)",
				data: realData2
			},	
			{
				label: 'Racing',
				backgroundColor: "rgba(53, 53, 255, .6)",
				data: realData3
			}					
		]
	};

var lineChartCtx = document.getElementById("lineChart").getContext("2d");
var barChartCtx = document.getElementById('barChart').getContext('2d');
var radarChartCtx = document.getElementById('radarChart').getContext('2d');
var polarChartCtx = document.getElementById('polarChart').getContext('2d');
var pieChartCtx = document.getElementById('pieChart').getContext('2d');
var doughnutChartCtx = document.getElementById('doughnutChart').getContext('2d');


var lineChart = new Chart(lineChartCtx, {
	type: 'line',
	data: data
});

var barChart = new Chart(barChartCtx, {
	type: 'bar',
	data: data
});

var radarChart = new Chart(radarChartCtx, {
	type: 'radar',
	data: data
});

var polarChart = new Chart(polarChartCtx, {
	type: 'polarArea',
	data: data
});

var pieChart = new Chart(pieChartCtx, {
	type: 'pie',
	data: data
});

var doughnutChart = new Chart(doughnutChartCtx, {
	type: 'doughnut',
	data: data
});

