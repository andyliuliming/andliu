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

function bindFileDrop(termToBind) {
    $("#terminal_main_panel")[0].ondragover = function () { return false; };
    $("#terminal_main_panel")[0].ondragend = function () { return false; };
    $("#terminal_main_panel")[0].ondrop = function (e) {
        // get the node.
        e.preventDefault();

        $("#terminal_copy_file").fadeIn(200);

        var data = new FormData();
        data.append('file', e.dataTransfer.files[0]);

        $("#terminal_copy_ok_button").unbind("click");
        $("#terminal_copy_ok_button").bind("click", function (ev) {
            var request = new XMLHttpRequest();
            var targetPath = $("#terminal_copy_target_path").val();
            request.open('POST', getHttpSchems() + currentSteppingNode.Address + "/api/TerminalFileTransfer?targetPath=" + targetPath);
            request.onload = function (e) {
                console.log(request.response);
            };
            request.onreadystatechange = function () {
                // Code inside here is executed each time the progress of the HTTP request advances.
                // The current state can be retrieved via `this.readyState`, which returns a value ranging
                // from 0 to 4 (inclusive).

                if (this.readyState == 4) { // If the HTTP request has completed 
                    if (this.status == 200) { // If the HTTP response code is 200 (e.g. successful)
                        var response = this.responseText; // Retrieve the response text          
                        $("#terminal_copy_file").fadeOut(200);
                    };
                };
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