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
        $("#password").css("display", "block");
        $("#auth_type_label").html("Password:");
    });

    $("#privatekey_option_button").click(function (e) {
        useIdentityFile = true;
        $("#password").css("display", "none");
        $("#identity_file").css("display", "block");
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
        if (identityFile != null) {
            var r = new FileReader();
            r.onload = function (e) {
                var contents = e.target.result;
                //alert("Got the file.n"
                //      + "name: " + f.name + "n"
                //      + "type: " + f.type + "n"
                //      + "size: " + f.size + " bytesn"
                //      + "starts with: " + contents.substr(1, contents.indexOf("n"))
                //);
                if (otermApplet != null) {
                    otermApplet.SetAction("SetUserName", username.val());
                    otermApplet.SetAction("SetPassword", password.val());
                    otermApplet.SetAction("SetHostName", hostname.val());
                    otermApplet.SetAction("SetPrivateKey", contents);
                    otermApplet.SetAction("Login", "");
                }
            }
            r.readAsText(identityFile);
        }
    } else {

        $.cookie("Password", password.val());


        if (otermApplet != null) {
            otermApplet.SetAction("SetUserName", username.val());
            otermApplet.SetAction("SetPassword", password.val());
            otermApplet.SetAction("SetHostName", hostname.val());
            otermApplet.SetAction("Login", "");
        }
    }
    //wait for the success, then swith the panel
    $("#login_main_panel").css("display", "none");
    $("#terminal_main_panel").css("display", "block");

    renderTerminal();
}