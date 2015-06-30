var goUpItem = "[..]";

var currentFolder = null;

function updateDownloadFileList(filesGot) {
    console.dir(filesGot);
    var upItem = { "Path": goUpItem, "IsDirectory": true };
    var itemBuilt = BuildDownloadFileListItem(upItem);

    $("#download_file_list").append(itemBuilt);
    currentFolder = filesGot.CurrentDirectory;
    for (var i = 0; i < filesGot.TerminalFiles.length; i++) {
        var file = filesGot.TerminalFiles[i];
        var itemBuilt = BuildDownloadFileListItem(file);

        $("#download_file_list").append(itemBuilt);
    }

    $("#download_file_list li").unbind("click");
    $("#download_file_list li").bind("click", function (ev) {
        $("#download_file_list li").removeClass("selected");
        $(ev.target).addClass("selected");
    });


    $("#download_file_list li").unbind("dblclick");
    $("#download_file_list li").bind("dblclick", function (ev) {
        if (!$(ev.target).hasClass("directory")) {
            return;
        }
        var clicked_item = getInnerText(ev.target);
        if (clicked_item != goUpItem) {
            // jump to up

           
            //var cachedToken = authContext.getCachedToken("e5740bbf-07d0-4e4c-b174-94ff7d6adbcd");

            ////get the current folder first, then 
            //getTerminalFiles(currentSteppingNode, cachedToken, ".", updateDownloadFileList, getTerminalFileFailed);
        }
        else {
            console.dir("you double clicked upItem");

            if (currentFolder == "" || currentFolder == "/") {

            } else {
                var lastIndexOfSlash = currentFolder.lastIndexOf('/');
                if (lastIndexOfSlash == 0) {
                    JumpToRemoteFolder(".");
                } else {
                    currentFolder = currentFolder.substr(0, lastIndexOfSlash);
                    // console.dir("now we jump to up " + currentRemoteFolder)
                    JumpToRemoteFolder(currentFolder);
                }
            }

        }
        // update the current local folder     of the selections combobox.
    });

    $("#download_file_list li a").unbind("click");
    $("#download_file_list li a").bind("click", function (ev) {
        //console.dir($(ev.target));
        alert("you clicked " + getInnerText(ev.target));
    });
}

function getTerminalFileFailed(error) {

}

function JumpToRemoteFolder(folder) {
    var cachedToken = authContext.getCachedToken("e5740bbf-07d0-4e4c-b174-94ff7d6adbcd");


    //get the current folder first, then 
    getTerminalFiles(currentSteppingNode, cachedToken, folder, updateDownloadFileList, getTerminalFileFailed);
}
function openFileCopyDialog() {
    $("#download_file_dialog").fadeIn(200);
    JumpToRemoteFolder(".");
}


function BuildDownloadFileListItem(fileItem) {
    var opt;
    if (fileItem.IsDirectory == true) {
        opt = $("<li class='directory'></li>").html(fileItem.Path);
    } else {
        opt = $("<li class='file'><a href='#'>" + fileItem.Path + "</a></li>");
    }
    return opt;
}

function bindFileDrop(termToBind) {
    $("#terminal_main_panel")[0].ondragover = function () { return false; };
    $("#terminal_main_panel")[0].ondragend = function () { return false; };
    $("#terminal_main_panel")[0].ondrop = function (e) {
        // get the node.
        e.preventDefault();

        $("#terminal_copy_file").fadeIn(200);

        var data = new FormData();
        var fileToUpload = e.dataTransfer.files[0];
        data.append('file', e.dataTransfer.files[0]);

        $('#terminal_copy_file_progress_indicator_wrapper').fadeIn(200);
        $('#terminal_copy_file_progress_indicator').empty();
        $('#terminal_copy_file_progress_indicator').circleDiagram({
            "percent": "0%",
            "size": "280",
            "borderWidth": "4",
            "bgFill": "#e2e2e2",
            "frFill": "#06c",
            "textSize": "56",
            "textColor": "#FFFFFF"
        });

        var request = new XMLHttpRequest();

        request.upload.onprogress = function (evt) {
            if (evt.lengthComputable) {
                var percentComplete = (evt.loaded / evt.total) * 100;

                $('#terminal_copy_file_progress_indicator').empty();
                $('#terminal_copy_file_progress_indicator').circleDiagram({
                    "percent": percentComplete.toFixed(2) + "%",
                    "size": "280",
                    "borderWidth": "4",
                    "bgFill": "#e2e2e2",
                    "frFill": "#06c",
                    "textSize": "56",
                    "textColor": "#FFFFFF"
                });
            }
        }
        request.open('POST', getHttpSchems() + currentSteppingNode.Address + "/api/TerminalFileTransfer?targetPath=" + fileToUpload.name);

        request.onload = function (e) {
            //console.log(request.response);
        };
        request.onreadystatechange = function () {
            // Code inside here is executed each time the progress of the HTTP request advances.
            // The current state can be retrieved via `this.readyState`, which returns a value ranging
            // from 0 to 4 (inclusive).

            if (this.readyState == 4) { // If the HTTP request has completed 
                //if (this.status == 200) { // If the HTTP response code is 200 (e.g. successful)

                $("#terminal_copy_file_progress_indicator_wrapper").fadeOut(200);
            };
        };
        var cachedToken = authContext.getCachedToken("e5740bbf-07d0-4e4c-b174-94ff7d6adbcd");
        //var currentAccessToken = getCurrentSubscriptionAccessToken();
        request.setRequestHeader("Authorization", "Bearer " + cachedToken);
        request.send(data);
    }
}