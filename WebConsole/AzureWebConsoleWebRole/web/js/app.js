var authContext = null;

function initializeAuth() {
    // Enter Global Config Values & Instantiate ADAL AuthenticationContext
    window.config = {
        instance: 'https://login.microsoftonline.com/',
        //tenant: 'common',
        tenant: 'azurewebconsole.onmicrosoft.com',
        clientId: 'e5740bbf-07d0-4e4c-b174-94ff7d6adbcd',
        postLogoutRedirectUri: window.location.origin,
       // endpoints:"https://management.core.windows.net/",
        cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
    };
    authContext = new AuthenticationContext(config);

    // Check For & Handle Redirect From AAD After Login
    var isCallback = authContext.isCallback(window.location.hash);
    authContext.handleWindowCallback();
    //$errorMessage.html(authContext.getLoginError());

    if (isCallback && !authContext.getLoginError()) {
        window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
    }

    // Check Login Status, Update UI
    var user = authContext.getCachedUser();
    if (user) {
        //$userDisplay.html(user.userName);
        //$userDisplay.show();
        //$signInButton.hide();
        //$signOutButton.show();
        //console.dir("user found");
        //console.dir(user);

        //authContext.acquireToken("https://management.core.windows.net/",
        //    function (error) {
        //        console.dir(error);
        //    });
    } else {
        console.dir("user not found");

        authContext.login();
    }
}



