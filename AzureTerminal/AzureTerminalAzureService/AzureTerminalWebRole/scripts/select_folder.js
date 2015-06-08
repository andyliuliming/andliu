var currentSelectFolderLocation = "";
function open_select_folder_dialog() {
    $("#select_folder_dialog").css("display", "block");

    $("#select_folder_dialog_local_actions_ok").unbink("click");
    $("#select_folder_dialog_local_actions_ok").bind("click", function (ev) {

    });

    if (otermApplet != null) {
        otermApplet.SetAction(SelectCurrentLocalFolder, [""]);
    }
}

function RefreshLocalSelectFolderDropBox(fileItems) {
    // append the ..
    for (var i = 0; i < fileItems.length; i++) {
        var item = BuildListItem(fileItems[i]);
        $("#select_folder_dialog_list_view>ul").append(item);
    }
}