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
    //ws.onmessage = function (result) {
    //    //alert(result.data);
    //    term.write(result.data);
    //};
    //ws.onopen = function () {
    //    //alert("Connected!");
    //};
    //ws.onerror = function (error) {
    //    alert(error.data);
    //};
    //ws.onclose = function () {
    //    alert("Disconnected!");
    //};
}
