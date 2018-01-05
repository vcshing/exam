function init(){

  ajaxGetExamType(function(response) {

    var html="";
    $(response.result).each(function(index,result){
        html += "<option value=\"Batman\">"+result+"<\/option>";
    })

    $(".picker-type").find("select").html(html)
  //  $("item-after")
    $(".picker-type").find(".item-after").html("ALL")
/*    var pickerDevice = myApp.picker({
      input: '#picker-device',
      cols: [{
        textAlign: 'center',
        values: response.result
      }]
    });
    */
  })

  ajaxGetTopicList(function(response){
    var html= ""
    $(response.result).each(function(index,result){
      html += renderTopicList(result)
    })
    $(".topicList").html(html);
  })
  bindTopicList()


}
