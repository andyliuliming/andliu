
function ReSignIn() {
    $.removeCookie("AccessToken");
    var id_token = getUrlVars()["id_token"];
    if (id_token != null) {
        console.dir(id_token);
        // first get the tenentId, then jump to the real 
    }
    else {
        // Common/oauth2/authorize?resource=https%3A%2F%2Fmanagement.core.windows.net%2F&client_id=1950a258-227b-4e31-a9cf-717495945fc2&response_type=code&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&client-request-id=2b003f82-8030-4313-907a-112dbe030d09&prompt=login&x-client-SKU=.NET&x-client-Ver=2.14.0.0&x-client-CPU=x64&x-client-OS=Microsoft+Windows+NT+6.3.9600.0&site_id=501358&display=popup HTTP/1.1

        //https://login.microsoftonline.com/4a5ab409-59d4-4ee1-acec-edc32d2cdb32/oauth2/token?api-version=1.0
        window.location = "https://login.windows.net/common/oauth2/authorize?response_type=code&client_id=" + clientId + "&resource=https://management.core.windows.net/&redirect_uri=" + replyUri;
    }
}


function getAccessToken(successFunc, failedFunc) {
    var accessToken = $.cookie("AccessToken");
    if (accessToken != null) {
        successFunc(accessToken);
    } else {
        // check whether the Code exists in the uri, if not, jump.
        var code = getUrlVars()["code"];
        if (code == null) {
            ReSignIn();
        } else {
            $.ajax({
                url: accessTokenUrl,
                type: "GET",
                beforeSend: function (request) {
                    request.setRequestHeader("Code", code);
                },
                success: function (d) {
                    if (successFunc != null) {
                        $.cookie("AccessToken", d.value[0].access_token);
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
        successFunc();
        //VerifySubscription(accessToken, successFunc, failedFunc);
    }, function (error) {
        console.dir(error);
    });
}