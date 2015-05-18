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
    $(".auth_button").click(function (butt) {
        $(".auth_button").removeClass("auth_button_selected");
        $(butt.target).addClass("auth_button_selected");
    })

    $("#password_option_button").click(function (e) {
        useIdentityFile = false;
        $("#identity_file").css("display", "none");
        $("#identity_pub_file").css("display", "none");
        $("#password").css("display", "block");
        $("#auth_type_label").html("Password:");
    });

    $("#privatekey_option_button").click(function (e) {
        useIdentityFile = true;
        $("#password").css("display", "none");
        $("#identity_file").css("display", "block");
        $("#identity_pub_file").css("display", "block");
        $("#auth_type_label").html("Private Key:");
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

var waitForSignedInInterval;
function WaitForSignedIn() {
    if (otermApplet != null) {
        var signedInStatus = otermApplet.getSignedInStatus()
        if (signedInStatus == "success") {
            clearInterval(waitForSignedInInterval);
            $("#login_main_panel").css("display", "none");
            $("#terminal_main_panel").css("display", "block");

            renderTerminal();
        }
        else if (signedInStatus == "failed")
        {
            alert("Please check the hostname, username or password or port.");
            clearInterval(waitForSignedInInterval);
        }
    }
}
function loginIn() {
    var hostname = $("#hostname");
    var username = $("#username");
    var port = $("#port");
    var password = $("#password");

    $.cookie("HostName", hostname.val());
    $.cookie("Port", port.val());
    $.cookie("UserName", username.val());

    if (useIdentityFile) {
        var identityFile = $("#identity_file")[0].files[0];
        var identity_pub_file = $("#identity_pub_file")[0].files[0];
        if (identityFile != null && identity_pub_file != null) {
            var identityReader = new FileReader();
            identityReader.onload = function (e) {
                var contents = e.target.result;
                var publicIdentityReader = new FileReader();

                publicIdentityReader.onload = function (e2) {
                    var publicContents = e2.target.result;
                    if (otermApplet != null) {
                        otermApplet.SetAction("SetUserName", username.val());
                        otermApplet.SetAction("SetPassword", password.val());
                        otermApplet.SetAction("SetHostName", hostname.val());
                        otermApplet.SetAction("SetPrivateKey", contents);
                        otermApplet.SetAction("SetPublicKey", publicContents);
                        terminalResize();
                        otermApplet.SetAction("Login", "");
                    }
                };
                publicIdentityReader.readAsText(identity_pub_file);
            }
            identityReader.readAsText(identityFile);
        }
    } else {

        if (otermApplet != null) {
            otermApplet.SetAction("SetUserName", username.val());
            otermApplet.SetAction("SetPassword", password.val());
            otermApplet.SetAction("SetHostName", hostname.val());
            terminalResize();
            otermApplet.SetAction("Login", "");
        }
    }

    waitForSignedInInterval=setInterval(WaitForSignedIn, 500);
    //wait for the success, then swith the panel

}