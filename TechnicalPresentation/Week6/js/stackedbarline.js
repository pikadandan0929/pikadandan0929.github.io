document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar', // Base chart type is bar for stacked bars
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                type: 'line', // Specify line type for the line dataset
                label: 'Dataset 1',
                data: [180, 120, 125, 100, 80, 95, 130],
                backgroundColor: 'rgb(54, 162, 235)', // Line color
                borderColor: 'rgb(54, 162, 235)',
                fill: false, // Do not fill under the line
                tension: 0.4,
                yAxisID: 'y', // Use the same Y axis as the bar chart
            }, {
                label: 'Dataset 2',
                data: [60, 20, 45, 75, 20, 30, 45],
                backgroundColor: 'rgba(255, 99, 132, 0.5)', // Bar color
                yAxisID: 'y',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    stacked: true, // Stacks the bars on top of each other
                },
                x: {
                    stacked: true, // Ensures that bars are stacked on the x-axis
                }
            },
            plugins: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    text: 'Chart.js Stacked Line/Bar Chart'
                }
            }
        }
    });
});
