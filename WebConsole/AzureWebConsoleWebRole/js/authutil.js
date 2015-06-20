function ReSignIn(successFunc) {
    $.removeCookie("AccessToken");
    SignIn(successFunc);
}

function SignIn(successFunc) {
    var accessToken = getUrlVars()["access_token"];
    if (accessToken != null) {
        // TODO save the token in cookie, then jump to get rid off it.
        // or judge the token in the uri is the same with the token in cookie.
        if (successFunc != null) {
            successFunc(accessToken);
        }
    }
    else {
        window.location = "https://login.windows.net/common/oauth2/authorize?client_id=e5740bbf-07d0-4e4c-b174-94ff7d6adbcd&response_type=code&redirect_uri=https://localhost:63808/index.html&resource=https://management.core.windows.net/&prompt=consent"

        // visual studio

        //https://login.windows.net/common/oauth2/authorize?client_id=8950d1f2-8174-452c-b211-380d714ec13a&response_type=token&redirect_uri=https://localhost:63808/index.html&resource=https://management.core.windows.net/
    }
}
//function getAccessToken(successFunc, failedFunc) {
//    var accessToken = $.cookie("AccessToken");
//    if (accessToken != null) {
//        successFunc(accessToken);
//    } else {
//        // check whether the Code exists in the uri, if not, jump.

//        //var code = getUrlVars()["code"];
//        //if (code == null) {
//        //    ReSignIn();
//        //} else {
//        //    $.ajax({
//        //        url: accessTokenUrl,
//        //        type: "GET",
//        //        beforeSend: function (request) {
//        //            request.setRequestHeader("Code", code);
//        //        },
//        //        success: function (d) {
//        //            if (successFunc != null) {
//        //                $.cookie("AccessToken", d.value[0].access_token);
//        //                successFunc(d.value[0].access_token);
//        //            }
//        //        },
//        //        error: function (e) {
//        //            if (failedFunc != null) {
//        //                failedFunc(e);
//        //            }
//        //        }
//        //    });
//        //}
//    }
//}