function userReadExamPageInit(page) {

    ajaxGetQuestionDetail({
        "id": page.detail.route.query.id
    }, function(response) {

        var html=""

        $(JSON.parse(response.result[0].answer)).each(function(index,result){
          html += renderQuestion({
            "answer" : result,
            "result" : JSON.parse(response.result[0].result)[index],
            "index" : index
          })
        })

        $(".questionAns").html(html);
        $(".question").html(response.result[0].question);
        $(".questionTitle").html(response.result[0].title);
        bindansConfirm(page)
        bindStatistics(page)
    })
}
