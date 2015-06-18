function endsWith(str, match) {
    var d = str.length - match.length;
    return d >= 0 && str.lastIndexOf(match) === d;
}
function getOS() {
    if (!OSNameGot) {
        if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
        if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
        if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
        if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
        OSNameGot = true;
    }
    return OSName;
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