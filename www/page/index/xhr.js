function ajaxGetExamType(callback) {
    if (typeof(callback) != "function") {
        callback = function() {};
    }
    callback({
      "result":['ALL','iPhone 4', 'iPhone 4S']
    })
    return
    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/fishshrimpcrab/addrecord.php",
        data: {
            "deviceid": getDeviceID(),
            "name": getDeviceID(),
            "mark": mark,
            "lang": lang
        },
        dataType: "json",
        success: function(response) {
          callback();
        },
        error: function(response) {
          callback();
        }
    });
}


function ajaxGetTopicList(callback) {
    if (typeof(callback) != "function") {
        callback = function() {};
    }
    callback({
      "result":[{"id":1,"topic":"你的情人是誰?"},{"id":2,"topic": "你是富翁嗎?"}]
    })
    return
    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/fishshrimpcrab/addrecord.php",
        data: {
            "deviceid": getDeviceID(),
            "name": getDeviceID(),
            "mark": mark,
            "lang": lang
        },
        dataType: "json",
        success: function(response) {
          callback();
        },
        error: function(response) {
          callback();
        }
    });
}
