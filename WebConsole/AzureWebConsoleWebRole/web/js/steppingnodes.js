﻿function getSteppingNodes(token, successFunc, errorFunc) {
    var url = serviceBaseUri + "/odata/SteppingNodes";
    $.ajax({
        url: url,
        type: "GET",
        beforeSend: function (request) {
            request.setRequestHeader("access_token", token);
        },
        dataType: "json",
        contentType: "application/json",
        success: function (d) {
            if (successFunc != null) {
                successFunc(d);
            }
        },
        error: function (e) {
            if (errorFunc != null) {
                errorFunc(e);
            }
        }
    });
}
