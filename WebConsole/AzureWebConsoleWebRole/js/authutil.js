﻿function ReSignIn(successFunc) {
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
       window.location = "https://login.windows.net/4a5ab409-59d4-4ee1-acec-edc32d2cdb32/oauth2/authorize?client_id=e5740bbf-07d0-4e4c-b174-94ff7d6adbcd&response_type=token&redirect_uri=http://localhost:63808/index.html&resource=https://management.core.windows.net/"
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