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

$(document).ready(function () {
    $(".auth_button1").addClass("auth_button_selected");
    $("#loginbutton").css("color", "white");
    $("#loginbutton").css("background", "rgb(0, 188, 242)");
    $(".auth_button").click(function (butt) {
        $(".auth_button").removeClass("auth_button_selected");
        $(butt.target).addClass("auth_button_selected");
    })

    $("#loginbutton").click(function () {
        var hostname = $("#hostname");
        var username = $("#username");
        var password = $("#password");
        var port = $("#port");

        $.cookie("HostName", hostname.val());
        $.cookie("Port", port.val());
        $.cookie("UserName", username.val());
        $.cookie("Password", password.val());

        window.location.href = "./terminal.html";

    })
    var hostName = getUrlVars()["host"];
    if (hostName != null) {
        $("#hostname").val(hostName);
    }
    
});