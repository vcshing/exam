function bindansConfirm(page){
  $(".ansConfirm").bind("click",function(e){
  //  debugger;
    var result= $(".questionAns input:radio:checked").parent().find(".result").html();
    var ans= $(".questionAns input:radio:checked").parent().find(".answer").html();
    result = result.trim()
  //  app.dialog.alert(ans,"分析");
    $(".selectAnswer").html(htmlDecode(result))
    $(".selectAnswerTitle").html(htmlDecode(ans))

    ajaxSubmitResult({
      "questionid": page.detail.route.query.id,
      "answerIndex": $(".questionAns input:radio:checked").val()
    },
    function(){

    })
  })
}

function bindStatistics(page){
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
