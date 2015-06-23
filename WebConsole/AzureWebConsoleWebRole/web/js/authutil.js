function JumptoCommonLogin() {
    window.location =
        "https://login.windows.net/common/oauth2/authorize?client_id=" +
        +clientId + "&response_type=token&redirect_uri="
        + replyUri + "&resource=https://management.core.windows.net/";
}

function SignInToSubscription(subscriptionAADTenantId) {
    // call back the subscription specific one.
    window.location =
        "https://login.windows.net/" + subscriptionAADTenantId
        + "/oauth2/authorize?client_id="
        + clientId + "&response_type=token&redirect_uri="
        + replyUri + "&resource=https://management.core.windows.net/";
}

function commonAccessTokenStage() {
    var commonAccessToken = $.cookie("common_access_token");
    getAzureSubscriptions(commonAccessToken, function (subscriptions) {
        initializeSubscriptions(subscriptions);
        var subscriptionToSignIn = subscriptions.value[0].SubscriptionId;
        var currentSubscriptionInCookie = $.cookie("current_subscription");
        if (currentSubscriptionInCookie != null) {
            var accessTokenInUri = getUrlVars()["access_token"];
            $.removeCookie("current_subscription");
            $.cookie(currentSubscriptionInCookie, accessTokenInUri);
            subscriptionAccessTokenStage(subscriptionToSignIn, accessTokenInUri);
        } else {
            var subscriptionAccessTokenInCookie = $.cookie(subscriptionToSignIn);
            if (subscriptionAccessTokenInCookie == null) {
                $.cookie("current_subscription", subscriptionToSignIn);
                SignInToSubscription(subscriptions.value[0].AADTenant);
            } else {
                subscriptionAccessTokenStage(subscriptionToSignIn, subscriptionAccessTokenInCookie);
            }
        }

    }, function (error) {
        // if the error is not authourized, then jump to the login.
        // jump to the login 
        $.removeCookie("common_access_token");
        JumptoCommonLogin();
    });
}

function subscriptionAccessTokenStage(currentSubscription, accessToken) {
    getAzureVirtualMachines(accessToken, currentSubscription, function (virtualMachines) {
        setVirtualMachines(virtualMachines);
    }, function (error) {
        // Clear Up.
        SignInToSubscription(currentSubscription);
    });
}

function SignIn() {
    // if we can get the subscriptions of with the saved machine, then just use it
    var commonAccessToken = $.cookie("common_access_token");
    if (commonAccessToken != null) {
        commonAccessTokenStage();
    } else {
        var accessTokenInUri = getUrlVars()["access_token"];

        if (accessTokenInUri != null) {
            $.cookie("common_access_token", accessTokenInUri);
            commonAccessTokenStage();
        } else {
            JumptoCommonLogin();
        }
    }
}