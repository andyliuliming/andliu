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
    $(".auth_button").click(function (butt) {
        $(".auth_button").removeClass("auth_button_selected");
        $(butt.target).addClass("auth_button_selected");
    })

    $("#password_option_button").click(function (e) {

    });

    $("#privatekey_option_button").click(function (e) {

    });


    $("#loginbutton").click(function () {
        loginIn();
    })

    $("#password").keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            loginIn();
        }
    });

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


    if (otermApplet != null) {
        otermApplet.SetAction("SetUserName", username.val());
        otermApplet.SetAction("SetPassword", password.val());
        otermApplet.SetAction("SetHostName", hostname.val());
        otermApplet.SetAction("Login", "");
    }

    //wait for the success, then swith the panel
    $("#login_main_panel").css("display", "none");
    $("#terminal_main_panel").css("display", "block");

    renderTerminal();
}