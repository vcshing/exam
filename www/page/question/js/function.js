function renderQuestion(array) {
    html = '\
  <li>\
    <label class="item-radio item-content">\
      <input type="radio" name="demo-media-radio" value="' + array.index + '"/>\
      <i class="icon icon-radio"></i>\
      <div class="item-inner answer">\
        ' + array.answer + '\
      </div>\
      <div class="result" style="display:none">' + array.result + '</div>\
    </label>\
  </li>\
  '
    return html
}

function genStatistics(page){
  var chartArr = [];
  chartArr["result"] = [];

  google.charts.load('current', {'packages':['corechart']});

  ajaxGetStatisticsDetail({
      "id": page.detail.route.query.id
  }, function(response) {
  //debugger;
      chartArr["result"][0] = ["Task", "Result"]
      $(response.result).each(function(index, result) {
        chartArr["result"].push([result.answer, result.choiceCount])
      })
      //debugger;
      if(chartArr["result"][1][0] == null){
        chartArr["result"][1] = ["No Result", 1];
      }
      chartArr["title"] = response.result[0].title
      chartArr["question"] = response.result[0].question
      google.charts.setOnLoadCallback(function() { drawChart(chartArr); });
  })

}

function drawChart(chartArr) {

    var result2 = chartArr.result

    var data = google.visualization.arrayToDataTable(chartArr.result);

    var options = {

        legend: {
            //position: "bottom"
        },
        chartArea: {

        },
        pieStartAngle: 200
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

function addFacebookFrame(page){
  $(".fbcomment").attr("width",$(window).width() )
  $(".fbcomment").attr("src",
  'http://gogogo.synology.me/facebook/?'+
  'id=' + page.detail.route.query.id +
  'width='+  (parseInt($(window).width())-100))
}
