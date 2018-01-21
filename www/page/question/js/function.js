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


function drawChart(chartArr) {

    var result2 = chartArr.result

    var data = google.visualization.arrayToDataTable(chartArr.result);

    var options = {

        legend: {
            position: "bottom"
        },
        chartArea: {
          left:"-50"
        },
        pieStartAngle: 100
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
