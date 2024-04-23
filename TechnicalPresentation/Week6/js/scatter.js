document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myScatterChart').getContext('2d');
    const scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [{
                    x: -8,
                    y: 2.5
                },{
                    x: -7,
                    y: 1
                },{
                    x: -3,
                    y: -4
                },{
                    x: -9,
                    y: -1.5
                },{
                    x: -10,
                    y: 0
                }, {
                    x: 0,
                    y: 10
                }, {
                    x: 10,
                    y: 5
                }, {
                    x: 0.5,
                    y: 5.5
                }, {
                    x: 0.3,
                    y: 5.1
                }, {
                    x: 0.1,
                    y: 0.5
                }, {
                    x: 2.5,
                    y: 4.5
                }] // Add more data points as needed
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });
});
