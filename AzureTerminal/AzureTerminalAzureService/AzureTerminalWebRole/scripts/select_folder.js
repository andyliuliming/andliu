var currentSelectFolderLocation = "";
function open_select_folder_dialog() {
    $("#select_folder_dialog").css("display", "block");

    $("#select_folder_dialog_local_actions_ok").unbind("click");
    $("#select_folder_dialog_local_actions_ok").bind("click", function (ev) {
        var selectedItem = $("#select_folder_dialog_list_view>ul>li.selected");
        if (selectedItem != undefined && selectedItem != null) {
            var selectedItem = getInnerText(selectedItem[0]);
            if (selectedItem != undefined && selectedItem != "") {
                $("#private_key_location").val(currentSelectFolderLocation + getLocalPathSeperator() + selectedItem);
            }
            close_select_folder_dialog();
        }
    });
    $("#select_folder_dialog_local_actions_cancel").unbind("click");
    $("#select_folder_dialog_local_actions_cancel").bind("click", function (ev) {
        close_select_folder_dialog();
    });

    if (otermApplet != null) {
        otermApplet.SetAction(GetHomeFolder, [""]);
    }
}

function close_select_folder_dialog() {
    $("#select_folder_dialog").css("display", "none");
}

function JumpToSelectFolder(specifiedFolder) {
    if (otermApplet != null) {
        currentSelectFolderLocation = specifiedFolder;
        otermApplet.SetAction(SelectCurrentLocalFolder, [specifiedFolder]);
        $("#select_folder_dialog_current_folder_text").val(currentSelectFolderLocation);
    }
}

function RefreshLocalSelectFolderDropBox(fileItems) {
    // append the ..
    $("#select_folder_dialog_list_view>ul").empty();
    var opt = $("<li class='directory'></li>").html(goUpItem);
    $("#select_folder_dialog_list_view >ul").append(opt);

    for (var i = 0; i < fileItems.length; i++) {
        var item = BuildListItem(fileItems[i]);
        $("#select_folder_dialog_list_view>ul").append(item);
    }
    $("#select_folder_dialog_list_view>ul>li").unbind("click");
    $("#select_folder_dialog_list_view>ul>li").bind("click", function (ev) {
        $("#select_folder_dialog_list_view ul li").removeClass("selected");
        $(ev.target).addClass("selected");
    });

    $("#select_folder_dialog_list_view>ul>li").unbind("dblclick");
    $("#select_folder_dialog_list_view>ul>li").bind("dblclick", function (ev) {
        if (!$(ev.target).hasClass("directory")) {
            return;
        }
        var clicked_item = getInnerText(ev.target);
        if (clicked_item != goUpItem) {
            // console.dir("you dbl clicked local list" + ev.target.innerText);
            var lastSlashIndex = currentSelectFolderLocation.lastIndexOf(getLocalPathSeperator());
            if (lastSlashIndex >= 0 && lastSlashIndex == (currentSelectFolderLocation.length - 1)) {
                currentSelectFolderLocation = currentSelectFolderLocation + clicked_item;
            } else {
                currentSelectFolderLocation = currentSelectFolderLocation + getLocalPathSeperator() + clicked_item;
            }
            // console.dir("now we jump to " + currentLocalFolder);
            JumpToSelectFolder(currentSelectFolderLocation);
        }
        else {
            if (currentSelectFolderLocation.length <= 3) {

            } else {
                var lastIndexOfSeperator = currentSelectFolderLocation.lastIndexOf(getLocalPathSeperator());
                var firstIndexOfSeperator = currentSelectFolderLocation.indexOf(getLocalPathSeperator());
                if (firstIndexOfSeperator == lastIndexOfSeperator) {
                    currentSelectFolderLocation = currentSelectFolderLocation.substr(0, lastIndexOfSeperator + 1);
                } else {
                    currentSelectFolderLocation = currentSelectFolderLocation.substr(0, lastIndexOfSeperator);
                }
                //currentSelectFolderLocation = currentSelectFolderLocation.substr(0, currentSelectFolderLocation.lastIndexOf(getLocalPathSeperator()));
                JumpToSelectFolder(currentSelectFolderLocation);
            }
        }
    });
}