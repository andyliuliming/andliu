function ReSignIn(successFunc) {
    $.removeCookie("AccessToken");
    SignIn(successFunc);
}

function SignIn(successFunc) {
    var accessToken = getUrlVars()["access_token"];
    if (accessToken != null) {
        // TODO save the token in cookie, then jump to get rid off it.
        // or judge the token in the uri is the same with the token in cookie.
        // verify the token, get the subscriptions from 
        if (successFunc != null) {
            successFunc(accessToken);
        }
    }
    else {
        window.location = "https://login.windows.net/common/oauth2/authorize?client_id=e5740bbf-07d0-4e4c-b174-94ff7d6adbcd&response_type=token&redirect_uri=https://localhost:63808/index.html&resource=https://management.core.windows.net/";
    }
}



function SignInToSubscription(subscriptionAADTenantId, successFunc) {
    window.location = "https://login.windows.net/" + subscriptionAADTenantId + "/oauth2/authorize?client_id=e5740bbf-07d0-4e4c-b174-94ff7d6adbcd&response_type=token&redirect_uri=https://localhost:63808/index.html&resource=https://management.core.windows.net/";
}