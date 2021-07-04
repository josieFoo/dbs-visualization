d3.csv('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2814973/atp_wta.csv')
  .then(makeChart);

function makeChart(apple){
  //schema schauen
  var chart1 = new Chart('chart2', {
    type: 'bar',
    options: {
      title: {
        display: true,
        text: 'Trade volume of Apple'
      }
    },
    data: {
      labels: [
      '02.01.17',
      '03.01.17', 
      '04.01.17', 
      '05.01.17',
      '06.01.17',
      '09.01.17',
      '10.01.17',
      '11.01.17',
      '12.01.17',
      '13.01.17',
      '16.01.17',
      '17.01.17',
      '18.01.17',
      '19.01.17',
      '20.01.17',
      '23.01.17',
      '24.01.17',
      '25.01.17',
      '26.01.17',
      '27.01.17',
      '30.01.17',
      '31.01.17'],
      datasets: [
        {label:'Handelsvolumen', backgroundColor: 'rgb(100,100,100)',
          data: [
            2330417,
            882614,
            449615,
            746100,
            700163,
            1297576,
            1691504,
            1521071,
            1073743,
            1149538,
            861942,
            848050,
            528968,
            778900,
            610841,
            366744,
            734456,
            1221101,
            1302214,
            739897,
            1268146,
            988174]},
        
      ]
    }
  })
};


