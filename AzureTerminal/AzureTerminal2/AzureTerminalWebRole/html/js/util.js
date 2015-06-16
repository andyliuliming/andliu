var isFirefox = false;
var isMSIE = false;
var isChrome = false;

var productServiceBaseUri = "https://azureterminal.cloudapp.net";//"http://localhost:63807";
//https://azureterminal.cloudapp.net
var accessTokenUrl = productServiceBaseUri+"/odata/Token2s";
var subscriptionUrl = productServiceBaseUri + "/odata/Subscriptions";

function endsWith(str, match) {
    var d = str.length - match.length;
    return d >= 0 && str.lastIndexOf(match) === d;
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function getAccessToken(successFunc, failedFunc) {
    var accessToken = $.cookie("AccessToken");
    if (accessToken != null) {
        successFunc(accessToken);
    } else {
        // check whether the Code exists in the uri, if not, jump.
        var code = getUrlVars()["code"];
        if (code == null) {
            window.location = "https://login.windows.net/common/oauth2/authorize?response_type=code&client_id=2d0642ea-80ea-4713-9910-5b7eee904dc1&resource=https://management.core.windows.net/&redirect_uri=https://azureterminal.cloudapp.net/html/index.html"
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

function getInnerText(element) {
    if (!(isChrome || isMSIE || isFirefox)) {
        isMSIE = !!~window.navigator.userAgent.indexOf('MSIE');
        isMSIE = this.isMSIE || !!~window.navigator.userAgent.indexOf('Trident');
        isFirefox = !!~window.navigator.userAgent.indexOf('Firefox');
        isChrome = !!~window.navigator.userAgent.indexOf('Chrome');
    }

    if (isFirefox) {
        return element.textContent;
    }
    return element.innerText;
}