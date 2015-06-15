

var useIdentityFile = false;
function initializeLogin() {
    $("#password_option_button").unbind("click");
    $("#password_option_button").bind("click", function (e) {
        useIdentityFile = false;

        $(".auth_button").removeClass("auth_button_selected");
        $(e.target).addClass("auth_button_selected");

        $("#login_private_key").css("display", "none");
        $("#password").css("display", "block");
        $("#auth_type_label").html("Password:");
    });

    $("#privatekey_option_button").unbind("click");
    $("#privatekey_option_button").bind("click", function (e) {
        useIdentityFile = true;
        $(".auth_button").removeClass("auth_button_selected");
        $(e.target).addClass("auth_button_selected");

        $("#login_private_key").css("display", "block");
        $("#password").css("display", "none");
        $("#auth_type_label").html("Private Key:");
    });

    $("#identity_file").unbind("change");
    $("#identity_file").bind("change", function (ev) {
        var file = $('#identity_file')[0].files[0];
        if (file != null) {
            $("#login_private_key_file_name_text").val(file.name);
        }
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
                otermApplet.SetAction(SetUserName, [username.val().trim()]);
                otermApplet.SetAction(SetPassword, [password.val()]);
                otermApplet.SetAction(SetHostName, [hostname.val().trim()]);
                otermApplet.SetAction(SetPort, [port.val()]);
                otermApplet.SetAction(SetPrivateKey, [contents]);
                terminalResize();
                otermApplet.SetAction(Login, [""]);

                $("#password").val("");
                $('#loginbutton').attr("disabled", "disabled")
            }
        }
        identityReader.readAsText(identityFile);
    } else {

        if (otermApplet != null) {
            otermApplet.SetAction(SetUserName, [username.val().trim()]);
            otermApplet.SetAction(SetPassword, [password.val()]);
            otermApplet.SetAction(SetHostName, [hostname.val().trim()]);
            otermApplet.SetAction(SetPort, [port.val().trim()]);
            terminalResize();
            otermApplet.SetAction(Login, [""]);

            $("#password").val("");
            $('#loginbutton').attr("disabled", "disabled")
        }
    }

    StartPollingFrontCommand();
}