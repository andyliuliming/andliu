var isFirefox = false;
var isMSIE = false;
var isChrome = false;

function isDebugMode() {
    return (window.location.href.startsWith("http://localhost")
|| window.location.href.startsWith("https://localhost"));
}


function getServiceBaseUri() {
    if (window.location.href.startsWith("http://localhost")
        || window.location.href.startsWith("https://localhost")) {
        return "http://localhost:63808";
    }
    else {
        return "https://azurewebconsole.cloudapp.net";
    }
}

function getWebSocketSchema() {
    if (window.location.href.startsWith("http://localhost")
      || window.location.href.startsWith("https://localhost")) {
        return "ws://";
    }
    else {
        return "wss://";
    }
}

function getHttpSchems() {
    if (window.location.href.startsWith("http://localhost")
     || window.location.href.startsWith("https://localhost")) {
        return "http://";
    }
    else {
        return "https://";
    }
}


var accessTokenUrl = getServiceBaseUri() + "/odata/Tokens";
var subscriptionUrl = getServiceBaseUri() + "/odata/Subscriptions";
var OSName = "Unknown OS";
var OSNameGot = false;
var clientId = "e5740bbf-07d0-4e4c-b174-94ff7d6adbcd";

var replyUri = getServiceBaseUri() + "/index.html";

function getWebConsoleSteppingNode(successFunc) {
    // get a web console stepping node address from the service.

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