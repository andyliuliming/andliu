var currentSelectFolderLocation = "";
function open_select_folder_dialog() {
    $("#select_folder_dialog").css("display", "block");

    $("#select_folder_dialog_local_actions_ok").unbind("click");
    $("#select_folder_dialog_local_actions_ok").bind("click", function (ev) {
        var selectedItem = $("#select_folder_dialog_list_view>ul>li.selected")[0].innerText;
        if (selectedItem != undefined && selectedItem != "") {
            $("#private_key_location").val(currentSelectFolderLocation + "\\" + selectedItem);
        }
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
    }
}
//http://azureterminal.cloudapp.net/index.html?id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiIwYzQ2ZTI4Yy1lOGNiLTQ5MGQtYmQ0Zi0yMTYyNmI2NjAxZjYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDMzNzc1OTQ3LCJuYmYiOjE0MzM3NzU5NDcsImV4cCI6MTQzMzc3OTg0NywidmVyIjoiMS4wIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3Iiwib2lkIjoiYjZiZWQ0ZjAtMDQ0Zi00ZTNhLWFlZWQtZjU0NGIyYjk1YWUyIiwidXBuIjoiYW5kbGl1QG1pY3Jvc29mdC5jb20iLCJzdWIiOiJvT3Voc2hBVzJ2aF9qR3NnR0FYR1QzNXRxYkMySmp4c0JRaWxiNkRaWUFFIiwiZ2l2ZW5fbmFtZSI6IkFuZHkiLCJmYW1pbHlfbmFtZSI6IkxpdSIsIm5hbWUiOiJBbmR5IExpdSIsImFtciI6WyJwd2QiLCJtZmEiXSwidW5pcXVlX25hbWUiOiJhbmRsaXVAbWljcm9zb2Z0LmNvbSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yMTQ2NzczMDg1LTkwMzM2MzI4NS03MTkzNDQ3MDctMTI2NDQ0MCIsIm5vbmNlIjoiNzM2MkNBRUEtOUNBNS00QjQzLTlCQTMtMzREN0MzMDNFQkE3IiwicHdkX2V4cCI6IjI5MzYxMTUwIn0.tMNiANund-65sU9iSWKgJjnQ1FRiK32MWvxjkHBEfzH8db6w_drQlUwZbpgFQYz5OCOqkXHzySamIFFYUNET1VsHRPq66XO_yPCYlvipV3tjiZlTO3BNmE1ER9eHthpUXO9agtUlMEqoXjp_dJ7X5DRiq5pfLcx6T1x8JbuEdWvs9WBLAPw-3vFl7HEq9CIbowKRYKuwUswypSbhfWdRQa1VnrlvtgdAcOldXQEv1pQfbuA8SOAyHacTzC69y7X_SIrniErcPmMJOzUZUexaRK1zIhK2eK3orVZP_kwaP1XbLmc7kkVzJhyiCba_bpAnX0_EHW6vnZZD0uOsvM3Wjg&session_state=48864822-aeb5-4855-89b0-6331bba47bf3
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
        var clicked_item = ev.target.innerText;
        if (clicked_item != goUpItem) {
            // console.dir("you dbl clicked local list" + ev.target.innerText);
            var lastSlashIndex = currentSelectFolderLocation.lastIndexOf("\\");
            if (lastSlashIndex >= 0 && lastSlashIndex == (currentSelectFolderLocation.length - 1)) {
                currentSelectFolderLocation = currentSelectFolderLocation + clicked_item;
            } else {
                currentSelectFolderLocation = currentSelectFolderLocation + "\\" + clicked_item;
            }
            // console.dir("now we jump to " + currentLocalFolder);
            JumpToSelectFolder(currentSelectFolderLocation);
        }
        else {
            if (currentSelectFolderLocation.length <= 3) {

            } else {
                currentSelectFolderLocation = currentSelectFolderLocation.substr(0, currentSelectFolderLocation.lastIndexOf('\\'));
                JumpToSelectFolder(currentSelectFolderLocation);
            }
        }
    });
}