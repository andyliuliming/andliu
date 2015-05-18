function checkAuth() {
    var idToken = getUrlVars()["id_token"];
    if (idToken != null) {
        var decodedString = atob(idToken.split('.')[1]);
        var id = JSON.parse(decodedString);
        if (id.unique_name != null) {
            if (id.unique_name.endsWith("@microsoft.com")) {
                return true;
            }
            else {
                return false;
            }
        }

        if (id.email != null) {
            if (id.email.endsWith("@microsoft.com")) {
                return true;
            }
            else {
                return false;
            }
        }
    } else {
        window.location = "https://login.windows.net/common/oauth2/authorize?response_type=id_token&client_id=b3a1287b-34cc-45b1-861e-da08d7ea0cfc&scope=openid&nonce=7362CAEA-9CA5-4B43-9BA3-34D7C303EBA7&response_mode=query";
    }
}