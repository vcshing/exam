function bindansConfirm(page){
  $(".ansConfirm").bind("click",function(e){
  //  debugger;
    var ans= $(".questionAns input:radio:checked").parent().find(".result").html();
    ans = ans.trim()
    app.dialog.alert(ans,"分析");

    ajaxSubmitResult({
      "questionid": page.detail.route.query.id,
      "answerIndex": $(".questionAns input:radio:checked").val()
    },
    function(){

    })
  })
}

function bindStatistics(page){

  $(".statistics").bind("click",function(){

        app.view.current.router.navigate("/statistics/?id="+ page.detail.route.query.id)
  })
}
