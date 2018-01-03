function bindTopicList(){
  $(".topicList1").bind("click",function(e){
    mainView.router.loadPage("page/question/question.html")
  })
}
