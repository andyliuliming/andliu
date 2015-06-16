var currentLocalFolder = "";
var currentRemoteFolder = "/";
var remoteFolderSeperator = "/";
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
        if (!$(ev.target).hasClass("directory")) {
            return;
        }
        var clicked_item = getInnerText(ev.target);
        if (clicked_item != goUpItem) {
            // console.dir("you dbl clicked local list" + ev.target.innerText);
            var lastSlashIndex = currentLocalFolder.lastIndexOf(getLocalPathSeperator());
            if (lastSlashIndex >= 0 && lastSlashIndex == (currentLocalFolder.length - 1)) {
                currentLocalFolder = currentLocalFolder + clicked_item;
            } else {
                currentLocalFolder = currentLocalFolder + getLocalPathSeperator() + clicked_item;
            }
            // console.dir("now we jump to " + currentLocalFolder);
            JumpToLocalFolder(currentLocalFolder);
        }
        else {
            if (currentLocalFolder.length <= 3) {

            } else {
                var lastIndexOfSeperator = currentLocalFolder.lastIndexOf(getLocalPathSeperator());
                var firstIndexOfSeperator = currentLocalFolder.indexOf(getLocalPathSeperator());
                if (firstIndexOfSeperator == lastIndexOfSeperator) {
                    currentLocalFolder = currentLocalFolder.substr(0, lastIndexOfSeperator + 1);
                } else {
                    currentLocalFolder = currentLocalFolder.substr(0, lastIndexOfSeperator);
                }
                // console.dir("now we jumpt to " + currentLocalFolder);
                JumpToLocalFolder(currentLocalFolder);
            }
        }
        // update the current local folder     of the selections combobox.
    });

    $("#copy_file_dialog_remote_list_view ul li").unbind("dblclick");
    $("#copy_file_dialog_remote_list_view ul li").bind("dblclick", function (ev) {
        if (!$(ev.target).hasClass("directory")) {
            return;
        }
        var clicked_item = getInnerText(ev.target);
        if (clicked_item != goUpItem) {
            //console.dir("you dbl clicked remote list" + ev.target.innerText);

            var lastSlashIndex = currentRemoteFolder.lastIndexOf("/");
            if (lastSlashIndex >= 0 && lastSlashIndex == (currentRemoteFolder.length - 1)) {
                currentRemoteFolder = currentRemoteFolder + clicked_item;
            } else {
                currentRemoteFolder = currentRemoteFolder + "/" + clicked_item;
            }
            //console.dir("now we jumpt to " + currentRemoteFolder);
            JumpToRemoteFolder(currentRemoteFolder);
        }
        else {
            if (currentRemoteFolder == "" || currentRemoteFolder == "/") {

            } else {
                var lastIndexOfSlash = currentRemoteFolder.lastIndexOf('/');
                if (lastIndexOfSlash == 0) {
                    JumpToRemoteFolder("/");
                } else {
                    currentRemoteFolder = currentRemoteFolder.substr(0, lastIndexOfSlash);
                    // console.dir("now we jump to up " + currentRemoteFolder)
                    JumpToRemoteFolder(currentRemoteFolder);
                }
            }
        }
        // update the current remote folder    of the selections  combobox.
    });
}

var copy_buttons_disabled = false;
function ToggleDisableCopyFileDialog() {
    copy_buttons_disabled = !copy_buttons_disabled;
    if (copy_buttons_disabled) {
        $("#copy_file_disable_cover").css("display", "block");
    } else {
        $("#copy_file_disable_cover").css("display", "none");
    }
}

function JumpToLocalFolder(localFolder) {
    if (otermApplet != null) {

        //if (currentLocalFolder != "") {
        //    var opt = BuildSelectionOption(currentLocalFolder, false);
        //    $("#copy_file_dialog_local_selections").append(opt);
        //}
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
        var selectedFileName = getInnerText($("#copy_file_dialog_local_list_view ul li.selected")[0]);
        var selectLocalFileItem = currentLocalFolder + getLocalPathSeperator() + selectedFileName;
        if (otermApplet != null) {
            otermApplet.SetAction(CopyToRemote, [selectLocalFileItem, currentRemoteFolder, selectedFileName]);
            ToggleDisableCopyFileDialog();
        }
    });

    $("#copy_file_to_local_button").unbind("click");
    $("#copy_file_to_local_button").bind("click", function (ev) {
        $("#copy_file_dialog_local_list_view ul li.selected")
        var selectedFileName = getInnerText($("#copy_file_dialog_remote_list_view ul li.selected")[0]);
        var selectRemoteFileItem = currentRemoteFolder + "/" + selectedFileName;
        if (otermApplet != null) {
            otermApplet.SetAction(CopyToLocal, [selectRemoteFileItem, currentLocalFolder + getLocalPathSeperator() + selectedFileName, selectedFileName]);
            ToggleDisableCopyFileDialog();
        }
    });

    $("#copy_file_dialog_local_actions_refresh").unbind("click");
    $("#copy_file_dialog_local_actions_refresh").bind("click", function (ev) {
        JumpToLocalFolder(currentLocalFolder);
    });

    $("#copy_file_dialog_remote_actions_refresh").unbind("click");
    $("#copy_file_dialog_remote_actions_refresh").bind("click", function (ev) {
        JumpToRemoteFolder(currentRemoteFolder);
    });

    $("#copy_file_dialog_close").unbind("click");
    $("#copy_file_dialog_close").bind("click", function (ev) {
        close_file_copy_dialog();
    });

    $("#copy_file_dialog_local_selections").unbind("change");
    $("#copy_file_dialog_local_selections").bind("change", function () {
        //console.dir("local selection changed");
        var local_location = $("#copy_file_dialog_local_selections").val();
        JumpToLocalFolder(local_location);
    });

    $("#copy_file_dialog_remote_selections").unbind("change");
    $("#copy_file_dialog_remote_selections").bind("change", function () {
        //console.dir("remote selection changed");
        var remote_location = $("#copy_file_dialog_remote_selections").val();
        JumpToRemoteFolder(remote_location);
    });
}

function open_copy_file_dialog() {
    $("#copy_file_dialog").fadeIn(200);
    //$("#copy_file_dialog").css("display", "block");

    JumpToLocalFolder("");
    JumpToRemoteFolder("/");
}

function append_local_drop_box_item(item) {
    var opt = BuildSelectionOption(item, false);
    $("#copy_file_dialog_local_selections").append(opt);
}

function append_remote_drop_box_item(item) {
    var opt = BuildSelectionOption(item, false);
    $("#copy_file_dialog_remote_selections").append(opt);
}

function BuildSelectionOption(item, iscurrent) {
    var opt;
    if (item.indexOf('D') === 0) {
        if (iscurrent) {
            opt = $("<option class='directory current'></option>").attr("value", item.substr(1));
        } else {
            opt = $("<option class='directory notcurrent'></option>").attr("value", item.substr(1));
        }
        opt.html(item.substr(1));
    } else {
        opt = $("<option class='file'></option>").attr("value", item.substr(1));
        opt.html(item.substr(1));
    }
    return opt;
}

// the data in the items is the full path
function RefreshLocalDropBox(items) {
    $("#copy_file_dialog_local_selections option.notcurrent").remove();
    for (var i = 0; i < items.length; i++) {
        append_local_drop_box_item(items[i]);
    }
    JumpToLocalFolder($("#copy_file_dialog_local_selections").val());
}


// the data in the items is the full path
// the items is like this Ddirection1 Ffile1
// the D/F indicates the directory or file.
// items 
function RefreshRemoteDropBox(items) {
    $("#copy_file_dialog_remote_selections option.notcurrent").remove();
    for (var i = 0; i < items.length; i++) {
        append_remote_drop_box_item(items[i]);
    }
    JumpToRemoteFolder($("#copy_file_dialog_remote_selections").val());
}



function BuildListItem(fileItem) {
    var opt;
    if (fileItem.indexOf('D') === 0) {
        opt = $("<li class='directory'></li>").html(fileItem.substr(1));
    } else {
        opt = $("<li class='file'></li>").html(fileItem.substr(1));
    }
    return opt;
}

// the fileItems is the file name, not the the full path.
// we should also append the current item
function RefreshLocalList(fileItems) {
    console.dir("now we need to append the local folder in the drop down box." + currentLocalFolder);
    //$("#copy_file_dialog_local_selections option.notcurrent")

    // if the drop box have the current with the .current
    var rootItems = $("#copy_file_dialog_local_selections option.notcurrent");
    var containedInRoot = false;
    for (var i = 0; i < rootItems.length; i++) {
        if (rootItems[i].value == currentLocalFolder) {
            containedInRoot = true;
        }
    }

    if (containedInRoot) {
        $("#copy_file_dialog_local_selections option.current").remove();
    }

    if (!containedInRoot) {
        var currentItem = $("#copy_file_dialog_local_selections option.current");
        if (currentItem.length != 0) {
            currentItem.val(currentLocalFolder);
            currentItem.html(currentLocalFolder);
        } else {
            currentItem = BuildSelectionOption("D" + currentLocalFolder, true);
            $("#copy_file_dialog_local_selections:first-child").prepend(currentItem);
            $("#copy_file_dialog_local_selections").val(currentLocalFolder);
        }
    }
    // find the item, if exists, leave it be, if no  just append it

    //append_local_drop_box_item(currentLocalFolder);
    $("#copy_file_dialog_local_list_view >ul").empty();
    var opt = $("<li class='directory'></li>").html(goUpItem);
    $("#copy_file_dialog_local_list_view >ul").append(opt);

    for (var i = 0; i < fileItems.length; i++) {
        var opt = BuildListItem(fileItems[i]);
        $("#copy_file_dialog_local_list_view>ul").append(opt);
    }
    BindFileCopyDoubleClick();
}

// the fileItems is the file name, not the the full path.
// we should also append the current item
function RefreshRemoteList(fileItems) {
    console.dir("now we need to append the remote folder: " + currentRemoteFolder);

    var rootItems = $("#copy_file_dialog_remote_selections option.notcurrent");
    var containedInRoot = false;
    for (var i = 0; i < rootItems.length; i++) {
        if (rootItems[i].value == currentRemoteFolder) {
            containedInRoot = true;
        }
    }

    if (containedInRoot) {
        $("#copy_file_dialog_remote_selections option.current").remove();
    }

    if (!containedInRoot) {
        var currentItem = $("#copy_file_dialog_remote_selections option.current");
        if (currentItem.length != 0) {
            currentItem.val(currentRemoteFolder);
            currentItem.html(currentRemoteFolder);
        } else {
            currentItem = BuildSelectionOption("D" + currentRemoteFolder, true);
            $("#copy_file_dialog_remote_selections:first-child").prepend(currentItem);
            $("#copy_file_dialog_remote_selections").val(currentRemoteFolder);
        }
    }

    //append_remote_drop_box_item(currentRemoteFolder);
    $("#copy_file_dialog_remote_list_view >ul").empty();
    var opt = $("<li class='directory'></li>").html(goUpItem);
    $("#copy_file_dialog_remote_list_view >ul").append(opt);
    for (var i = 0; i < fileItems.length; i++) {
        var opt = BuildListItem(fileItems[i]);
        $("#copy_file_dialog_remote_list_view>ul").append(opt);
    }
    BindFileCopyDoubleClick();
}


function close_file_copy_dialog() {
    $("#copy_file_dialog").fadeOut(200);
    //$("#copy_file_dialog").css("display", "none");
}