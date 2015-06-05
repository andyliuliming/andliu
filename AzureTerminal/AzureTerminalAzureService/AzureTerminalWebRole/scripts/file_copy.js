var currentLocalFolder = "";
var currentRemoteFolder = "";

function InitializeFileCopy() {
    $("#copy_file_dialog_local_list_view ul li").unbind("dblclick");
    $("#copy_file_dialog_local_list_view ul li").bind("dblclick", function (ev) {
        var clicked_item = ev.target.innerText;
        console.dir("you dbl clicked local list" + ev.target.innerText);
    });

    $("#copy_file_dialog_remote_list_view ul li").unbind("dblclick");
    $("#copy_file_dialog_remote_list_view ul li").bind("dblclick", function (ev) {
        var clicked_item = ev.target.innerText;
        console.dir("you dbl clicked remote list" + ev.target.innerText);
    });

    $("#copy_file_dialog_local_actions_refresh").unbind("click");
    $("#copy_file_dialog_local_actions_refresh").bind("click", function (ev) {
        var local_selection = $("#copy_file_dialog_local_selections").val();
        if (otermApplet != null) {
            otermApplet.SetAction(ListCurrentLocalFolder, local_selection);
        }
    });

    $("#copy_file_dialog_remote_actions_refresh").unbind("click");
    $("#copy_file_dialog_remote_actions_refresh").bind("click", function (ev) {
        var remote_selection = $("#copy_file_dialog_remote_selections").val();
        if (otermApplet != null) {
            otermApplet.SetAction(ListCurrentRemoteFolder, remote_selection);
        }
    });


    $("#copy_file_dialog_close").unbind("click");
    $("#copy_file_dialog_close").bind("click", function (ev) {
        $("#copy_file_dialog").css("display", "none");
    });

    $("#copy_file_dialog_local_selections").unbind("change");
    $("#copy_file_dialog_local_selections").bind("change", function () {
        console.dir("local selection changed");
        var local_location = $("#copy_file_dialog_local_selections").val();
        if (otermApplet != null) {
            otermApplet.SetAction(ListCurrentLocalFolder, local_location);
        }
    });

    $("#copy_file_dialog_remote_selections").unbind("change");
    $("#copy_file_dialog_remote_selections").bind("change", function () {
        console.dir("remote selection changed");
        var remote_location = $("#copy_file_dialog_remote_selections").val();
        if (otermApplet != null) {
            otermApplet.SetAction(ListCurrentRemoteFolder, remote_location);
        }
    });
}

function open_copy_file_dialog() {
    $("#copy_file_dialog").css("display", "block");

    if (otermApplet != null) {
        otermApplet.SetAction(ListLocalRootFolder, [""]);
        otermApplet.SetAction(ListRemoteRootFolder, [""]);
    }
}

function RefreshLocalDropBox(items) {
    $("#copy_file_dialog_local_selections").empty();
    for (var i = 0; i < items.length; i++) {
        var opt = $("<option></option>").attr("value", items[i]);
        opt.html(items[i]);
        $("#copy_file_dialog_local_selections").append(opt);
    }
}
function RefreshLocalList(fileItems) {
    $("#copy_file_dialog_local_list_view >ul").empty();

    var opt = $("<li></li>").html("..");
    $("#copy_file_dialog_local_list_view >ul").append(opt);

    for (var i = 0; i < fileItems.length; i++) {
        var opt = $("<li></li>").html(fileItems[i]);
        $("#copy_file_dialog_local_list_view>ul").append(opt);
    }
}


function RefreshRemoteDropBox(items) {
    $("#copy_file_dialog_remote_selections").empty();
    for (var i = 0; i < items.length; i++) {
        var opt = $("<option></option>").attr("value", items[i]);
        opt.html(items[i]);
        $("#copy_file_dialog_remote_selections").append(opt);
    }
}
function RefreshRemoteList(fileItems) {
    $("#copy_file_dialog_remote_list_view >ul").empty();
    var opt = $("<li></li>").html("..");
    $("#copy_file_dialog_remote_list_view >ul").append(opt);
    for (var i = 0; i < fileItems.length; i++) {
        var opt = $("<li></li>").html(fileItems[i]);
        $("#copy_file_dialog_remote_list_view>ul").append(opt);
    }
}


function test_refresh_local_list() {
    var fileItems = ['..', 'Program Files'];
    RefreshLocalList(fileItems);
    RefreshLocalDropBox(fileItems);
}