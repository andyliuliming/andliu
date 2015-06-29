function openFileCopyDialog() {

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
        request.open('POST', getHttpSchems() + currentSteppingNode.Address + "/api/TerminalFileTransfer?targetPath=" + "~/" + fileToUpload.name);

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
        var currentAccessToken = getCurrentSubscriptionAccessToken();
        request.setRequestHeader("access_token", currentAccessToken);
        request.send(data);
    }
}