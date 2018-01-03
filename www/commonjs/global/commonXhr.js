function updateRecord(mark, callback) {
    if (typeof(callback) != "function") {
        callback = function() {};
    }

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


function ajaxSavePaymentRecord(array,callback) {
    if (typeof(callback) != "function") {
        callback = function() {};
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/fishshrimpcrab/addPayHist.php",
        data: {
            "deviceid": getDeviceID(),
            "transactionId": array.transactionId,
            "receipt": array.receipt,
            "signature": array.signature
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
