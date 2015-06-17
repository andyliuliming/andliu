var OSName = "Unknown OS";
var OSNameGot = false;
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

function getLocalPathSeperator() {
    getOS();
    switch (OSName) {
        case "Windows":
            return "\\";
        default:
            return "/";
    }
}
function useHttps() {
    if (window.location.protocol != "https:")
        window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}

function switchToTerminalMainPage() {
    $("#login_main_panel").css("display", "none");
    $("#terminal_main_panel").css("display", "block");
    $("#terminal_actions_icon").css("display", "block");
    document.title = $("#hostname_input").val();
}