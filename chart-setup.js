// Created by Charlie Yalf. 
// Follow on Medium https://charlieyalf.medium.com/
// Follow on twitter at https://x.com/CharlieYalf


// Data Setup
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const pageViews = [1200, 1500, 1000, 1600, 1800, 2000, 1700];
const userSessions = [300, 350, 280, 370, 400, 450, 420];
const bounceRates = [20, 18, 22, 15, 17, 14, 16];

// Line Chart for Page Views
const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
	type: 'line',
	data: {
		labels: daysOfWeek,
		datasets: [{
			label: 'Page Views',
			data: pageViews,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});

// Bar Chart for User Sessions
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
	type: 'bar',
	data: {
		labels: daysOfWeek,
		datasets: [{
			label: 'User Sessions',
			data: userSessions,
			backgroundColor: [
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(201, 203, 207, 0.2)'
			],
			borderColor: [
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(201, 203, 207, 1)'
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});

// Pie Chart for Bounce Rates
const ctxPie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctxPie, {
	type: 'pie',
	data: {
		labels: daysOfWeek,
		datasets: [{
			label: 'Bounce Rate (%)',
			data: bounceRates,
			backgroundColor: [
				'rgba(255, 99, 132, 0.6)',
				'rgba(54, 162, 235, 0.6)',
				'rgba(255, 206, 86, 0.6)',
				'rgba(75, 192, 192, 0.6)',
				'rgba(153, 102, 255, 0.6)',
				'rgba(255, 159, 64, 0.6)',
				'rgba(201, 203, 207, 0.6)'
			]
		}]
	}
});