function VerifySubscription(token, successFunc, failedFunc) {
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


function checkAuth(successFunc, failedFunc) {
    // check the 
    // if the Code exists in the url 
    successFunc();
    //getAccessToken(function (accessToken) {
    //    successFunc();
    //    //VerifySubscription(accessToken, successFunc, failedFunc);
    //}, function (error) {
    //    console.dir(error);
    //});
}