function bindansConfirm(){
  $(".ansConfirm").bind("click",function(e){
  //  debugger;
    var ans= $(".questionAns input:radio:checked").parent().find(".result").html();
    ans = ans.trim()
    app.dialog.alert(ans,"分析");
  })
}
