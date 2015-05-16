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

function initializeLogin() {
    var hostName = getUrlVars()["host"];
    if (hostName != null) {
        $("#hostname").val(hostName);
    }
}

function loginIn() {
    var hostname = $("#hostname");
    var username = $("#username");
    var password = $("#password");
    var port = $("#port");

    $.cookie("HostName", hostname.val());
    $.cookie("Port", port.val());
    $.cookie("UserName", username.val());
    $.cookie("Password", password.val());


    if (otermApplet != null)
    {
       // otermApplet.SetUserName(username);
        //otermApplet.SetPassword(password);
        otermApplet.SetAction("SetUserName", username);
        otermApplet.SetAction("SetPassword", password);
        otermApplet.SetAction("Login", "");
    }

    //wait for the success, then swith the panel
    $("#login_main_panel").css("display", "none");
    $("#terminal_main_panel").css("display", "block");

    renderTerminal();
}