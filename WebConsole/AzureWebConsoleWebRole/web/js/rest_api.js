function getAzureVirtualMachines(token, successFunc, errorFunc) {
    var url = getServiceBaseUri() + "/odata/AzureVirtualMachines";//?$filter=(" + "SubscriptionId eq '" + subscriptionId + "')";
    $.ajax({
        url: url,
        type: "GET",
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", "Bearer "+token);
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

function getSteppingNodes(token, successFunc, errorFunc) {
    if (isDebugMode()) {
        //public long Id { get; set; }
        //public string Address { get; set; }
        var steppingNodes = { value: [{ "Id": 1, "Address": "localhost:48019" }] };
        successFunc(steppingNodes);
    } else {
        var url = getServiceBaseUri() + "/odata/SteppingNodes";
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
}


function getAzureSubscriptions(token, successFunc, errorFunc) {
    var url = getServiceBaseUri() + "/odata/AzureSubscriptions";
    $.ajax({
        url: url,
        type: "GET",
        beforeSend: function (request) {
            request.setRequestHeader("common_access_token", token);
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


function add_azurewebconsole_user(user,  successFunc) {
    var url = getServiceBaseUri() + "/odata/AzureWebConsoleUsers";
    $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify(user),
        beforeSend: function (request) {
            //request.setRequestHeader("AuthorizationType", "Token");
            //request.setRequestHeader("Authorization", token.Token);
            //request.setRequestHeader("Principal", token.UserId);
        },
        dataType: "json",
        contentType: "application/json",
        success: function (d) {
            if (successFunc != null) {
                successFunc(d);
            }
        },
        error: function (e) {
            console.dir(e);
        }
    });
}