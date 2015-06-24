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
    bindFileDrop(term);
}

function bindFileDrop(termToBind) {
    $("#terminal_main_panel")[0].ondragover = function () { return false; };
    $("#terminal_main_panel")[0].ondragend = function () { return false; };
    $("#terminal_main_panel")[0].ondrop = function (e) {
        // get the node.
        e.preventDefault();

        $("#terminal_copy_file").fadeIn(200);

        $("#terminal_copy_ok_button").unbind("click");
        $("#terminal_copy_ok_button").bind("click", function (ev) {
            var data = new FormData();
            data.append('file', e.dataTransfer.files[0]);
            var request = new XMLHttpRequest();
            var targetPath = $("#terminal_copy_target_path").val();
            request.open('POST', getHttpSchems() + currentSteppingNode.Address + "/api/TerminalFileTransfer?targetPath=" + targetPath);
            request.onload = function (e) {
                console.log(request.response);
            };
            var currentAccessToken = getCurrentSubscriptionAccessToken();
            request.setRequestHeader("access_token", currentAccessToken);
            request.send(data);
        });

        $("#terminal_copy_cancel_button").unbind("click");
        $("#terminal_copy_cancel_button").bind("click", function (ev) {

        });
    }
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