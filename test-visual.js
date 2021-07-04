// d3.csv('https://github.com/josieFoo/dbs-visualization/blob/main/apple.csv')
//     .then(makeChart);
// var chart = new Chart('chart', {
//     type: 'bar',
//     data: {
//         labels: ['Tief', 'Hoch', 'Tagesendwert'],
//         datasets: [{
//             data: [10, 20, 30]
//         }]
//     }
// });

d3.csv("/apple.csv")
    .row(function(d) { return { key: d.key, value: +d.value }; })
    .get(function(error, rows) { console.log(rows); });