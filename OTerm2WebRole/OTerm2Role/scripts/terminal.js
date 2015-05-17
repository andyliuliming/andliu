var term;
function renderTerminal() {
    $("#setting_dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }, modal: true,
        buttons: {
            Ok: function () {
                var width = $("#setting_width").val();
                var height = $("#setting_height").val();
                otermApplet.SetAction("SetSize", width + ":" + height);
                term.resize(parseInt(width), parseInt(height));
                $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        }
    });

    term = new Terminal({
        cols: 120,
        rows: 24,
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
    }, 10);

    // bind the actions
    $("#terminal_action_file").click(function (e) {
        otermApplet.SetAction("CopyFile", "");
    });

    $("#terminal_action_actions").click(function (e) {
        otermApplet.SetAction("CertPair", "");
    });

    $("#terminal_action_settings").click(function (e) {
        $("#setting_dialog").dialog("open");
    })
}

function terminalResize() {
    // implements the resize
}