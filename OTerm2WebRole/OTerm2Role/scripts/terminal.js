function renderTerminal() {

    term = new Terminal({
        cols: 120,
        rows: 60,
        useStyle: true,
        screenKeys: true,
        cursorBlink: true
    });

    term.open($("#terminal_terminal")[0]);
    term.write("shit");
    term.on('data', function (data) {
        //ws.send(data);
        otermApplet.SetAction("Input", data);
    });

    setInterval(function () {
        var output = otermApplet.GetOutput();
        term.write(output);
    }, 50);
}
