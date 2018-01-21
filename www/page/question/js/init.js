function userReadExamPageInit(page) {
    addFacebookFrame(page);

    ajaxGetQuestionDetail({
        "id": page.detail.route.query.id
    }, function(response) {

        var html=""
      //  debugger;
      //  console.log(response.result[0].answer);
        $(JSON.parse(response.result[0].answer)).each(function(index,result){
//debugger;
          html += renderQuestion({
            "answer" : result,
            "result" : JSON.parse(response.result[0].result)[index],
            "index" : index
          })
        })

        $(".questionAns").html(html);

        $(".question").html(response.result[0].question);
        $(".questionTitle").html(response.result[0].title);

        $(".question").find("img").attr("width","100%")
        bindansConfirm(page)
        //bindStatistics(page)
    })


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
