function getTerminalFiles(steppingNode, token, parentPath, successFunc, errorFunc) {
    var url = getHttpSchems() + steppingNode.Address + "/odata/TerminalFiles?$filter=(ParentPath eq '" + parentPath + "')";
    $.ajax({
        url: url,
        type: "GET",
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", "Bearer " + token);
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
