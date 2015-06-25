var term = null;
var termWidth;
var termHeight;

var showSettings = false;
function toggleSettings(forceStatus) {
    if (forceStatus == undefined) {
        showSettings = !showSettings;
    } else {
        showSettings = forceStatus;
    }
    if (showSettings) {
        $("#terminal_actions_list").fadeIn(200);
    } else {
        $("#terminal_actions_list").fadeOut(200);
    }
}

function renderTerminal() {
    $("#terminal_actions_icon").unbind("mouseup");
    $("#terminal_actions_icon").bind("mouseup", function (ev) {
        toggleSettings();
        ev.stopPropagation();
    });

    $(document).unbind("mouseup");
    $(document).bind("mouseup", function (ev) {
        toggleSettings(false);
    });

    $("#terminal_actions_icon").fadeIn(200);

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
    bindFileDrop(term);
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