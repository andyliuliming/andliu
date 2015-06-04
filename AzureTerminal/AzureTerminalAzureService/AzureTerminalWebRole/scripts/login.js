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

var useIdentityFile = false;
function initializeLogin() {
    $("#password_option_button").unbind("click");
    $("#password_option_button").bind("click", function (e) {
        useIdentityFile = false;

        $(".auth_button").removeClass("auth_button_selected");
        $(e.target).addClass("auth_button_selected");

        $("#identity_file").css("display", "none");
        $("#password").css("display", "block");
        $("#auth_type_label").html("Password:");
    });

    $("#privatekey_option_button").unbind("click");
    $("#privatekey_option_button").bind("click", function (e) {
        useIdentityFile = true;
        $(".auth_button").removeClass("auth_button_selected");
        $(e.target).addClass("auth_button_selected");

        $("#password").css("display", "none");
        $("#identity_file").css("display", "block");
        $("#identity_pub_file").css("display", "block");
        $("#auth_type_label").html("Private Key:");
    });

    $("#loginbutton").unbind("click");
    $("#loginbutton").bind("click", function () {
        loginIn();
    })
    $("#password").unbind("keypress");
    $("#password").keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            loginIn();
        }
    });

    var hostName = getUrlVars()["host"];
    if (hostName != null && hostName != "") {
        $("#hostname_input").val(hostName);
    }

    $("#hostname_input").val($.cookie("HostName"));
    if ($.cookie("Port") != null && ($.cookie("Port") != "")) {
        $("#port").val($.cookie("Port"));
    }
    $("#username_input").val($.cookie("UserName"));
}

function loginIn() {
    var hostname = $("#hostname_input");
    var username = $("#username_input");
    var port = $("#port");
    var password = $("#password");
    $.cookie("HostName", hostname.val());
    $.cookie("Port", port.val());
    $.cookie("UserName", username.val());

    if (useIdentityFile) {
        var identityFile = $("#identity_file")[0].files[0];
        var identityReader = new FileReader();
        identityReader.onload = function (e) {
            var contents = e.target.result;
            if (otermApplet != null) {
                otermApplet.SetAction("SetUserName", [username.val().trim()]);
                otermApplet.SetAction("SetPassword", [password.val()]);
                otermApplet.SetAction("SetHostName", [hostname.val().trim()]);
                otermApplet.SetAction("SetPort", [port.val()]);
                otermApplet.SetAction("SetPrivateKey", [contents]);
                terminalResize();
                otermApplet.SetAction("Login", [""]);

                $("#password").val("");
                $('#loginbutton').attr("disabled", "disabled")
            }
        }
        identityReader.readAsText(identityFile);
    } else {

        if (otermApplet != null) {
            otermApplet.SetAction("SetUserName", [username.val().trim()]);
            otermApplet.SetAction("SetPassword", [password.val()]);
            otermApplet.SetAction("SetHostName", [hostname.val().trim()]);
            otermApplet.SetAction("SetPort", [port.val().trim()]);
            terminalResize();
            otermApplet.SetAction("Login", [""]);

            $("#password").val("");
            $('#loginbutton').attr("disabled", "disabled")
        }
    }

    StartPollingFrontCommand();
}