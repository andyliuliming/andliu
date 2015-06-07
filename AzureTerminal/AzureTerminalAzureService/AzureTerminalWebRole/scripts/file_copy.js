var currentLocalFolder = "";
var currentRemoteFolder = "/";
var remoteFolderSeperator = "/";
var localFolderSeperator = "\\";
var goUpItem = "..";

function BindFileCopyDoubleClick() {
    $("#copy_file_dialog_local_list_view ul li").unbind("click");
    $("#copy_file_dialog_local_list_view ul li").bind("click", function (ev) {
        $("#copy_file_dialog_local_list_view ul li").removeClass("selected");
        $(ev.target).addClass("selected");
    });


    $("#copy_file_dialog_remote_list_view ul li").unbind("click");
    $("#copy_file_dialog_remote_list_view ul li").bind("click", function (ev) {
        $("#copy_file_dialog_remote_list_view ul li").removeClass("selected");
        $(ev.target).addClass("selected");
    });

    $("#copy_file_dialog_local_list_view ul li").unbind("dblclick");
    $("#copy_file_dialog_local_list_view ul li").bind("dblclick", function (ev) {
        var clicked_item = ev.target.innerText;
        if (clicked_item != goUpItem) {
            console.dir("you dbl clicked local list" + ev.target.innerText);
            var lastSlashIndex = currentLocalFolder.lastIndexOf("\\");
            if (lastSlashIndex >= 0 && lastSlashIndex == (currentLocalFolder.length - 1)) {
                currentLocalFolder = currentLocalFolder + clicked_item;
            } else {
                currentLocalFolder = currentLocalFolder + "\\" + clicked_item;
            }
            console.dir("now we jump to " + currentLocalFolder);
            JumpToLocalFolder(currentLocalFolder);
        }
        else {
            if (currentLocalFolder.length <= 3) {

            } else {
                currentLocalFolder = currentLocalFolder.substr(0, currentLocalFolder.lastIndexOf('\\') + 1);
                //currentLocalFolder=
                console.dir("now we jumpt to " + currentLocalFolder);
                JumpToLocalFolder(currentLocalFolder);
            }
        }
        // update the current local folder     of the selections combobox.
    });

    $("#copy_file_dialog_remote_list_view ul li").unbind("dblclick");
    $("#copy_file_dialog_remote_list_view ul li").bind("dblclick", function (ev) {
        var clicked_item = ev.target.innerText;
        if (clicked_item != goUpItem) {
            console.dir("you dbl clicked remote list" + ev.target.innerText);

            var lastSlashIndex = currentRemoteFolder.lastIndexOf("/");
            if (lastSlashIndex >= 0 && lastSlashIndex == (currentRemoteFolder.length - 1)) {
                currentRemoteFolder = currentRemoteFolder + clicked_item;
            } else {
                currentRemoteFolder = currentRemoteFolder + "/" + clicked_item;
            }
            console.dir("now we jumpt to " + currentRemoteFolder);
            JumpToRemoteFolder(currentRemoteFolder);
        }
        else {
            if (currentRemoteFolder == "" || currentRemoteFolder == "/") {

            } else {
                currentRemoteFolder = currentRemoteFolder.substr(0, currentRemoteFolder.lastIndexOf('/') + 1);
                //currentLocalFolder=
                console.dir("now we jump to up " + currentRemoteFolder)
                JumpToRemoteFolder(currentRemoteFolder);
            }
        }
        // update the current remote folder    of the selections  combobox.
    });
}

var copy_buttons_disabled = false;
function ToggleCopyButton() {
    if (!copy_buttons_disabled) {
        copy_buttons_disabled = true;
        $("#copy_file_to_local_button").css("background-position", "-233px 0px");
        $("#copy_file_to_remote_button").css("background-position", "-169px 0px");
    } else {
        copy_buttons_disabled = false;
        $("#copy_file_to_local_button").removeAttr("style");
        $("#copy_file_to_remote_button").removeAttr("style");
    }
}

function JumpToLocalFolder(localFolder) {
    if (otermApplet != null) {
        if (localFolder != "") {
            otermApplet.SetAction(ListCurrentLocalFolder, [localFolder]);
            currentLocalFolder = localFolder;
        } else {
            otermApplet.SetAction(ListLocalRootFolder, [""]);
        }
    }
}

function JumpToRemoteFolder(remoteFolder) {
    if (otermApplet != null) {
        if (remoteFolder != "/") {
            otermApplet.SetAction(ListCurrentRemoteFolder, [remoteFolder]);
            currentRemoteFolder = remoteFolder;
        } else {
            otermApplet.SetAction(ListRemoteRootFolder, [""]);
        }
    }
}

function InitializeFileCopy() {
    BindFileCopyDoubleClick();
    $("#copy_file_to_remote_button").unbind("click");
    $("#copy_file_to_remote_button").bind("click", function (ev) {
        var selectedFileName = $("#copy_file_dialog_local_list_view ul li.selected")[0].innerText;
        var selectLocalFileItem = currentLocalFolder + "\\" + selectedFileName;
        if (otermApplet != null) {
            otermApplet.SetAction(CopyToRemote, [selectLocalFileItem, currentRemoteFolder]);
            ToggleCopyButton();
        }
    });

    $("#copy_file_to_local_button").unbind("click");
    $("#copy_file_to_local_button").bind("click", function (ev) {
        $("#copy_file_dialog_local_list_view ul li.selected")
        var selectedFileName = $("#copy_file_dialog_remote_list_view ul li.selected")[0].innerText;
        var selectRemoteFileItem = currentRemoteFolder + "/" + selectedFileName;
        if (otermApplet != null) {
            otermApplet.SetAction(CopyToLocal, [selectRemoteFileItem, currentLocalFolder + "\\" + selectedFileName]);
            ToggleCopyButton();
        }
    });

    $("#copy_file_dialog_local_actions_refresh").unbind("click");
    $("#copy_file_dialog_local_actions_refresh").bind("click", function (ev) {
        var local_selection = $("#copy_file_dialog_local_selections").val();
        JumpToLocalFolder(local_selection);
    });

    $("#copy_file_dialog_remote_actions_refresh").unbind("click");
    $("#copy_file_dialog_remote_actions_refresh").bind("click", function (ev) {
        var remote_selection = $("#copy_file_dialog_remote_selections").val();
        JumpToRemoteFolder(remote_selection);
    });

    $("#copy_file_dialog_close").unbind("click");
    $("#copy_file_dialog_close").bind("click", function (ev) {
        $("#copy_file_dialog").css("display", "none");
    });

    $("#copy_file_dialog_local_selections").unbind("change");
    $("#copy_file_dialog_local_selections").bind("change", function () {
        console.dir("local selection changed");
        var local_location = $("#copy_file_dialog_local_selections").val();
        JumpToLocalFolder(local_location);
    });

    $("#copy_file_dialog_remote_selections").unbind("change");
    $("#copy_file_dialog_remote_selections").bind("change", function () {
        console.dir("remote selection changed");
        var remote_location = $("#copy_file_dialog_remote_selections").val();
        JumpToRemoteFolder(remote_location);
    });
}

function open_copy_file_dialog() {
    $("#copy_file_dialog").css("display", "block");
    JumpToLocalFolder("");
    JumpToRemoteFolder("/");
}

function append_local_drop_box_item(item) {
    var opt = $("<option></option>").attr("value", item);
    opt.html(item);
    $("#copy_file_dialog_local_selections").append(opt);
}

// the data in the items is the full path
function RefreshLocalDropBox(items) {
    $("#copy_file_dialog_local_selections").empty();
    var containsCurrentLocalFolder = false;
    if(currentLocalFolder!=""){
        append_local_drop_box_item(currentLocalFolder);
    }
    for (var i = 0; i < items.length; i++) {
        if (items[i] == currentLocalFolder) {
            containsCurrentLocalFolder = true;
        }
        append_local_drop_box_item(items[i]);
    }
    if (currentLocalFolder != "" && !containsCurrentLocalFolder) {
        append_local_drop_box_item(currentLocalFolder);
    }
}

// the fileItems is the file name, not the the full path.
// we should also append the current item
function RefreshLocalList(fileItems) {
    $("#copy_file_dialog_local_list_view >ul").empty();
    var opt = $("<li></li>").html(goUpItem);
    $("#copy_file_dialog_local_list_view >ul").append(opt);

    for (var i = 0; i < fileItems.length; i++) {
        var opt = $("<li></li>").html(fileItems[i]);
        $("#copy_file_dialog_local_list_view>ul").append(opt);
    }
    BindFileCopyDoubleClick();
}

function append_remote_drop_box_item(item) {
    var opt = $("<option></option>").attr("value", item);
    opt.html(item);
    $("#copy_file_dialog_remote_selections").append(opt);
}

// the data in the items is the full path
function RefreshRemoteDropBox(items) {
    $("#copy_file_dialog_remote_selections").empty();
    var containsCurrentRemoteFolder = false;
    append_remote_drop_box_item(currentRemoteFolder);
    for (var i = 0; i < items.length; i++) {
        if (items[i] == currentRemoteFolder) {
            containsCurrentRemoteFolder = true;
        }
        append_remote_drop_box_item(items[i]);
    }

    if (currentRemoteFolder != "/" && !containsCurrentRemoteFolder) {
        append_remote_drop_box_item(currentRemoteFolder);
    }
}

// the fileItems is the file name, not the the full path.
// we should also append the current item
function RefreshRemoteList(fileItems) {
    $("#copy_file_dialog_remote_list_view >ul").empty();
    var opt = $("<li></li>").html(goUpItem);
    $("#copy_file_dialog_remote_list_view >ul").append(opt);
    for (var i = 0; i < fileItems.length; i++) {
        var opt = $("<li></li>").html(fileItems[i]);
        $("#copy_file_dialog_remote_list_view>ul").append(opt);
    }
    BindFileCopyDoubleClick();
}