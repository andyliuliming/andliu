var authContext = null;

function initializeAuth() {
    // Enter Global Config Values & Instantiate ADAL AuthenticationContext
    window.config = {
        instance: 'https://login.microsoftonline.com/',
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
        var jumpLocation = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
        window.location = jumpLocation;
    }
}