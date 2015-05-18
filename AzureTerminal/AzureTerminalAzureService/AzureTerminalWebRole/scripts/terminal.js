var term;
var termWidth;
var termHeight;
function renderTerminal() {

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

    setInterval(function () {
        var output = otermApplet.GetOutput();
        if (output != null && output != "") {
            term.write(output);
        }
        if (term.isMSIE) {
            $(".terminal").focus();
        }
    }, 10);

    // bind the actions
    //$("#terminal_action_file").click(function (e) {
    //    otermApplet.SetAction("CopyFile", "");
    //});

    //$("#terminal_action_actions").click(function (e) {
    //    otermApplet.SetAction("CertPair", "");
    //});

    //$("#terminal_action_settings").click(function (e) {
    //    $("#setting_dialog").css("display", "block");
    //})
}

function terminalResize() {
    var width = $("body").width();
    var height = $("body").height();

    var test = document.getElementById("TestFontSize");
    var charHeight = (test.clientHeight);
    var charWidth = (test.clientWidth);
    termWidth = Math.floor(width / charWidth)-1;
    termHeight = Math.floor(height / charHeight)-1;
    if (otermApplet != null) {
        otermApplet.SetAction("SetSize", termWidth + ":" + termHeight);
    }
}