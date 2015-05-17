var term;
function renderTerminal() {

    
    term = new Terminal({
        cols: 120,
        rows: 40,
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
        term.write(output);
    }, 10);

    // bind the actions
    $("#terminal_action_file").click(function (e) {
        otermApplet.SetAction("CopyFile", "");
    });

    $("#terminal_action_actions").click(function (e) {
        otermApplet.SetAction("CertPair", "");
    });
}

function terminalResize() {
    // implements the resize
}