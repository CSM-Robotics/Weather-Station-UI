
//jquery ajax code to get recordings when website is loaded//
$(document).ready(function(){
  $.ajaxSetup({ cache: false, crossDomain : true, xhrFields: {withCredentials: true}});

  $.get("https://api.csmrobotics.club/api/wss/getAll", function(data){ 
     var myobj = data[0];

     var temp = myobj.temp;
     var hum = myobj.hum;
     var pressPa = myobj.pressPa;
     var tvoc = myobj.tvocpp;
     var eco2 = myobj.co2ppm;
     var rad = myobj.count;


    document.getElementById("temperature").innerHTML =  temp + "°F";
    document.getElementById("humidity").innerHTML = hum + " % RH";
    document.getElementById("pressure").innerHTML = pressPa + " Pa";
    document.getElementById("tVOC").innerHTML = tvoc + " ppm";
    document.getElementById("eCO2").innerHTML = eco2 + " ppm";
    document.getElementById("radiation").innerHTML = rad + " count";

    //temperature chart//
    google.charts.load('current', {'packages':['gauge']});
          google.charts.setOnLoadCallback(drawTemperature);

          function drawTemperature() {

            var data = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['(°F)', temp]
            ]);

            var options = {
              width: 400, height: 120,
              min: 0, max: 130,
              redFrom: 90, redTo: 130,
              yellowFrom:70, yellowTo: 90,
              minorTicks: 5
            };

            var chart = new google.visualization.Gauge(document.getElementById('chart_temp'));

            chart.draw(data, options);
        };//end of temperature chart generating//
    //humidity chart//
          google.charts.setOnLoadCallback(drawHumidity);

          function drawHumidity() {

            var data = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['(% RH)', hum]
            ]);

            var options = {
              width: 400, height: 120,
              min: 0, max: 130,
              redFrom: 90, redTo: 130,
              yellowFrom:70, yellowTo: 90,
              minorTicks: 5
            };

            var chart = new google.visualization.Gauge(document.getElementById('chart_hum'));

            chart.draw(data, options);
        };//end of humidity chart generating//
        //pressure chart//
          google.charts.setOnLoadCallback(drawPressure);

          function drawPressure() {

            var data = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['(Pa)', pressPa]
            ]);

            var options = {
              width: 400, height: 120,
              min: 0, max: 130,
              redFrom: 90, redTo: 130,
              yellowFrom:70, yellowTo: 90,
              minorTicks: 5
            };

            var chart = new google.visualization.Gauge(document.getElementById('chart_pres'));

            chart.draw(data, options);
        };//end of pressure chart generating//
        //tVOC chart//
          google.charts.setOnLoadCallback(drawTVOC);

          function drawTVOC() {
            var data = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['(ppm)', tvoc]
            ]);

            var options = {
              width: 400, height: 120,
              min: 0, max: 130,
              redFrom: 90, redTo: 130,
              yellowFrom:70, yellowTo: 90,
              minorTicks: 5
            };

            var chart = new google.visualization.Gauge(document.getElementById('chart_tvoc'));

            chart.draw(data, options);
        };//end of tvoc chart generating//
        //ECo2 chart//
          google.charts.setOnLoadCallback(drawECO2);

          function drawECO2() {
            var data = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['(ppm)', eco2]
            ]);

            var options = {
              width: 400, height: 120,
              min: 0, max: 130,
              redFrom: 90, redTo: 130,
              yellowFrom:70, yellowTo: 90,
              minorTicks: 5
            };

            var chart = new google.visualization.Gauge(document.getElementById('chart_eco2'));

            chart.draw(data, options);
        };//end of eCO2 chart generating//
        //Radiation chart//
          google.charts.setOnLoadCallback(drawRad);

          function drawRad() {
            var data = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['(count)', rad]
            ]);

            var options = {
              width: 400, height: 120,
              min: 0, max: 130,
              redFrom: 90, redTo: 130,
              yellowFrom:70, yellowTo: 90,
              minorTicks: 5
            };

            var chart = new google.visualization.Gauge(document.getElementById('chart_rad'));

            chart.draw(data, options);
        };//end of eCO2 chart generating//
      });//end of json data processing//

}); //end of main function execution//



      







