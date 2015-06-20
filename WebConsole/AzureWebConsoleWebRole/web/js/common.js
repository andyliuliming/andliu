var isFirefox = false;
var isMSIE = false;
var isChrome = false;


function getServiceBaseUri() {
    if (window.location.href.startsWith("http://localhost")
        || window.location.href.startsWith("https://localhost")) {
        return "http://localhost:63808";
    }
    else {
        return "https://azurewebconsole.cloudapp.net";
    }
}


var accessTokenUrl = getServiceBaseUri() + "/odata/Tokens";
var subscriptionUrl = getServiceBaseUri() + "/odata/Subscriptions";
var OSName = "Unknown OS";
var OSNameGot = false;
var clientId = "bdc9875c-7994-4812-803e-ea2b216efe60";

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