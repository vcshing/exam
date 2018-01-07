function userSubmitExamPageInit(){
  ajaxGetExamType(function(response){

      var html = "<option value=\""+""+"\">"+"請選擇"+"<\/option>";
      $(response.result).each(function(index,result){
          html += "<option value=\""+result.type_id+"\">"+result.type+"<\/option>";
      })

      $(".submit-picker-type").find("select").html(html)
    //  $("item-after")
      $(".submit-picker-type").find(".item-after").html("請選擇")


  })
  userSubmitExamPageAddBindEvent()
}
