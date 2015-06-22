var term = null;
var termWidth;
var termHeight;

function renderTerminal() {
    $("#terminal_main_panel").html("");
    if (term != null) {
        term.destroy();
    }
    term = new Terminal({
        cols: termWidth,
        rows: termHeight,
        useMouse: true,
        useStyle: true,
        screenKeys: false,
        cursorBlink: false
    });

    term.open($("#terminal_main_panel")[0]);
    term.on('data', function (data) {
        ws.send(data);
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

}