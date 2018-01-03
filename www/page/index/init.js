function init(){

  ajaxGetExamType(function(response) {
    var pickerDevice = myApp.picker({
      input: '#picker-device',
      cols: [{
        textAlign: 'center',
        values: response.result
      }]
    });
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
