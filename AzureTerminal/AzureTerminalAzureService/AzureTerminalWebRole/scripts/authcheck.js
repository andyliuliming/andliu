function endsWith(str, match) {
    var d = str.length - match.length;
    return d >= 0 && str.lastIndexOf(match) === d;
}

function checkAuth() {
    var idToken = getUrlVars()["id_token"];
    if (idToken != null) {
        var decodedString = atob(idToken.split('.')[1]);
        var id = JSON.parse(decodedString);
        if (id.unique_name != null) {
            if (endsWith(id.unique_name, "@microsoft.com")) {
                return true;
            }
            else {
                return false;
            }
        }

        if (id.email != null) {
            if (endsWith(id.email, "@microsoft.com")) {
                return true;
            }
            else {
                return false;
            }
        }
    } else {
        window.location = "https://login.windows.net/common/oauth2/authorize?response_type=id_token&client_id=0c46e28c-e8cb-490d-bd4f-21626b6601f6&scope=openid&nonce=7362CAEA-9CA5-4B43-9BA3-34D7C303EBA7&response_mode=query";
        return true;
    }
}