function userReadExamPageInit(page) {

    ajaxGetQuestionDetail({
        "id": page.detail.route.query.id
    }, function(response) {
      //debugger;
        $(".questionTopic").html(response.topic);
        //alert(JSON.stringify(response))
    })
}
