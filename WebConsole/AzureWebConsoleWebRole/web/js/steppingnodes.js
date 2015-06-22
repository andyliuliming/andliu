function getSteppingNodes(token, successFunc, errorFunc) {

    if (isDebugMode()) {
        //public long Id { get; set; }
        //public string Address { get; set; }
        var steppingNodes = { value: [{ "Id": 1, "Address": "ws://localhost:48019/" }] };
        successFunc(steppingNodes);
    } else {
        var url = getServiceBaseUri() + "/odata/SteppingNodes";
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
}

