var term;
var termWidth;
var termHeight;
var showSettings = false;
var appletGetOutputInterval;
function renderTerminal() {
    $("#terminal_actions_panel").click(function (e) {
        if (!showSettings) {
            $("#terminal_actions_list").css("display", "block");
        } else {
            $("#terminal_actions_list").css("display", "none");
        }
        showSettings = !showSettings;
    });
    $("#terminal_main_panel").html("");
    term = new Terminal({
        cols: termWidth,
        rows: termHeight,
        useStyle: true,
        screenKeys: true,
        cursorBlink: false
    });

    term.open($("#terminal_main_panel")[0]);
    term.on('data', function (data) {
        otermApplet.SetAction("Input", data);
    });

    appletGetOutputInterval = setInterval(function () {
        var output = otermApplet.GetOutput();
        if (output != null && output != "") {
            term.write(output);
        }
    }, 10);

    // bind the actions
    $("#terminal_action_file").unbind("click");
    $("#terminal_action_file").bind("click", function (e) {
        otermApplet.SetAction("CopyFile", "");
    });

    $("#terminal_action_generate_key").unbind("click");
    $("#terminal_action_generate_key").bind("click", function (e) {
        otermApplet.SetAction("CertPair", "");
    });
    $("#terminal_action_signout").unbind("click");
    $("#terminal_action_signout").bind("click", function (e) {
        otermApplet.SetAction("SignOut", "");
    });
}

function terminalResize() {
    var width = $("body").width();
    var height = $("body").height();

    var test = document.getElementById("TestFontSize");
    var charHeight = (test.clientHeight);
    var charWidth = (test.clientWidth);
    termWidth = Math.floor(width / charWidth) - 1;
    termHeight = Math.floor(height / charHeight) - 1;
    if (otermApplet != null) {
        otermApplet.SetAction("SetSize", termWidth + ":" + termHeight);
    }
}