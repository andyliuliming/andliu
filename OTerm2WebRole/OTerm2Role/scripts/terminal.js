function renderTerminal() {

    term = new Terminal({
        cols: 120,
        rows: 60,
        useStyle: true,
        screenKeys: true,
        cursorBlink: false
    });
    term.open(document.body);

    //term.on('data', function (data) {
    //    ws.send(data);
    //});
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
