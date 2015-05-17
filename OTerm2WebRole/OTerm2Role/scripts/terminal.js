var term;
function renderTerminal() {
    $("#setting_dialog_ok").click(function () {
        var width = $("#setting_width").val();
        var height = $("#setting_height").val();
        otermApplet.SetAction("SetSize", width + ":" + height);
        term.resize(parseInt(width), parseInt(height));
        $("#setting_dialog").css("display", "none");
    });
    $("#setting_dialog_cancel").click(function () {
        $("#setting_dialog").css("display", "none");
    });
    term = new Terminal({
        cols: 120,
        rows: 30,
        useStyle: true,
        screenKeys: true,
        cursorBlink: false
    });

    term.open($("#terminal_terminal")[0]);

    term.on('data', function (data) {
        otermApplet.SetAction("Input", data);
    });

    setInterval(function () {
        var output = otermApplet.GetOutput();
        if (output != null && output != "") {
            term.write(output);
        }
        $(".terminal").focus();
        //term.getCopyTextarea().focus();
    }, 10);

    // bind the actions
    $("#terminal_action_file").click(function (e) {
        otermApplet.SetAction("CopyFile", "");
    });

    $("#terminal_action_actions").click(function (e) {
        otermApplet.SetAction("CertPair", "");
    });

    $("#terminal_action_settings").click(function (e) {
        //$("#setting_dialog").dialog("open");
        $("#setting_dialog").css("display", "block");
    })
}

function terminalResize() {
    // implements the resize
}