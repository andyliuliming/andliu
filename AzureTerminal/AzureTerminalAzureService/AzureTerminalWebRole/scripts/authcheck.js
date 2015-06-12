function endsWith(str, match) {
    var d = str.length - match.length;
    return d >= 0 && str.lastIndexOf(match) === d;
}

//var accessTokenUrl = "https://azureterminal.cloudapp.net/odata/Tokens";
//var subscriptionUrl = "https://azureterminal.cloudapp.net/odata/Subscriptions";
var accessTokenUrl = "http://localhost:63807/odata/Tokens";
var subscriptionUrl = "http://localhost:63807/odata/Subscriptions";
function VerifySubscription( token, successFunc, failedFunc) {
    $.ajax({
        url: subscriptionUrl,
        type: "GET",
        beforeSend: function (request) {
            request.setRequestHeader("access_token", token);
        },
        //dataType: "json",
        success: function (d) {
            if (successFunc != null) {
                successFunc(d);
            }
        },
        error: function (e) {
            if (failedFunc != null) {
                failedFunc(e);
            }
        }
    });
}

function getAccessToken(successFunc, failedFunc) {
    var accessToken = $.cookie("AccessToken");
    if (accessToken != null) {
        successFunc(accessToken);
    } else {
        // check whether the Code exists in the uri, if not, jump.
        var code = getUrlVars()["code"];
        if (code == null) {
            window.location = "https://login.windows.net/000ff064-9dc3-480a-9517-2b7b8519df17/oauth2/authorize?response_type=code&client_id=0c46e28c-e8cb-490d-bd4f-21626b6601f6&resource=https://management.core.windows.net/&redirect_uri=https://azureterminal.cloudapp.net/index.html&api-version=1.0"
        } else {
            $.ajax({
                url: accessTokenUrl,
                type: "GET",
                beforeSend: function (request) {
                    request.setRequestHeader("Code", code);
                },
                success: function (d) {
                    if (successFunc != null) {
                        successFunc(d.value[0].access_token);
                    }
                },
                error: function (e) {
                    if (failedFunc != null) {
                        failedFunc(e);
                    }
                }
            });
        }
    }
}

function checkAuth(successFunc, failedFunc) {
    // check the 
    // if the Code exists in the url 
    getAccessToken(function (accessToken) {
        VerifySubscription(accessToken, successFunc, failedFunc);
    }, function (error) {
        console.dir(error);
    });
}