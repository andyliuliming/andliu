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
        $("#virtual_machines_tree").css("display", "block");
    } else {
        $("#virtual_machines_tree").css("display", "none");
    }
}
var term = null;
function renderTerminal() {
    //console.dir("renderTerminal");
  

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
        //otermApplet.SetAction("Input", [data]);
    });

    //// bind the actions
    //$("#terminal_action_file").unbind("click");
    //$("#terminal_action_file").bind("click", function (e) {
    //    open_copy_file_dialog();
    //    //otermApplet.SetAction("CopyFile", [""]);
    //});

    //$("#terminal_action_generate_key").unbind("click");
    //$("#terminal_action_generate_key").bind("click", function (e) {
    //    open_gen_privatekey_dialog();
    //    //otermApplet.SetAction("CertPair", [""]);
    //});
    //$("#terminal_action_signout").unbind("click");
    //$("#terminal_action_signout").bind("click", function (e) {
    //    otermApplet.SetAction(SignOut, [""]);
    //});
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