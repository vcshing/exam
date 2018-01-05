app.onPageInit('question', function(page) {

  ajaxGetQuestionDetail([{"id":page.query.id}],function(response){
    $(".questionTopic").html(response.topic);
    //alert(JSON.stringify(response))
  })
})
