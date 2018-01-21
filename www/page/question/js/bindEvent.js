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

    //    app.view.current.router.navigate("/statistics/?id="+ page.detail.route.query.id,{reloadCurrent: false})

}
