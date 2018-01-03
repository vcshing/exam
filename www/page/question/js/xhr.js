function ajaxGetQuestionDetail(array,callback) {

  callback({
            "topic":"topic A",
            "question":"question A",
            "choice":[
                {
                    "content":"choice A",
                    "result":"choice A result"
                },
                {
                    "content":"choice B",
                    "result":"choice B result"
                }
            ]
})
  return;
    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/fishshrimpcrab/showrecord.php",
        data: {},
        dataType: "json",
        success: function(response) {
            callback(response)
        },
        error: function(response) {
            myApp.alert("Fail")
        }
    });
}
