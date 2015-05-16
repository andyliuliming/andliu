function renderTerminal() {

    var term = new Terminal({
        cols: 120,
        rows: 60,
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
    }, 50);
}
