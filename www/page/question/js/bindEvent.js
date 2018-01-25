function bindQuestionInit(page){

}

function bindansConfirm(page){
  $(".ansConfirm").bind("click",function(e){
    if($(this).hasClass("popup-open")){
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
    }else{
      showToast("你沒有選擇答案哦!");
    }
  })

  $('input[type=radio][name="ansOptionBox"]').change(function() {
      $(".ansConfirm").addClass("popup-open")
  })
}

function bindStatistics(page){
  $(".statistics").bind("click",function(e){
    genStatistics(page)
  })
}
