function init(){

  ajaxGetExamType(function(response) {

    var html = "<option value=\""+""+"\">"+"全部"+"<\/option>";
    $(response.result).each(function(index,result){
        html += "<option value=\""+result.type_id+"\">"+result.type+"<\/option>";
    })

    $(".picker-type").find("select").html(html)
  //  $("item-after")
    $(".picker-type").find(".item-after").html("全部")
/*    var pickerDevice = myApp.picker({
      input: '#picker-device',
      cols: [{
        textAlign: 'center',
        values: response.result
      }]
    });
    */
  })
  var topicListArr ={
    "page": 1,
    "type": $(".type").val(),
    "id": ""
  }
  ajaxGetTopicList(topicListArr,function(response){
    var html= ""
  //  debugger;
    $(response.result).each(function(index,result){
      html += renderTopicList(result)
    })
    $(".topicList").append(html);
    if(response.hasNextPage == 0){
      app.infiniteScroll.destroy('.infinite-scroll-content');
      $$('.infinite-scroll-preloader').remove();
    }
  })


}
