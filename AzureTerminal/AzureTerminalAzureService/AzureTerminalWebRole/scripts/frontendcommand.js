var waitForFrontCommand;
var startToTakeOutput = false;
function WaitForFrontCommand() {
    if (otermApplet != null) {
        var commandForFront = otermApplet.TakeFrontCommand();

        if (commandForFront != null) {
            var action = commandForFront.getAction();
            switch (action) {
                case "Prompt":
                    //alert(commandForFront.trimLeft(result[0]).trimLeft(result[1]));
                    break;
                case "LoginStatusChange":
                    var resultParameters = commandForFront.getParameters();
                    LoginStatusChange(resultParameters[0]);
                    break;
                case "Disconnected":
                    StopPollingFrontCommand();
                    switchToLoginPage();
                    break;
            }
        }

        var commandResultForFront = otermApplet.TakeCommandResult();
        if (commandResultForFront != null) {
            var action = commandResultForFront.getAction();
            switch (action) {
                case GeneratePrivateKey:
                    var resultParameters = commandResultForFront.getParameters();
                    if (resultParameters[0] == "success") {
                        private_key_succeed(resultParameters[1], resultParameters[2]);
                    } else {
                        private_key_failed();
                    }
                    break;
                case SelectCurrentLocalFolder:
                    var resultParameters = commandResultForFront.getParameters();
                    RefreshLocalSelectFolderDropBox(resultParameters);
                    break;
                case GetHomeFolder:
                    var resultParameters = commandResultForFront.getParameters();
                    //currentSelectFolderLocation =;
                    JumpToSelectFolder( resultParameters[0]);
                    // jump to the specified folder
                    break;
                case ListLocalRootFolder:
                    var resultParameters = commandResultForFront.getParameters();
                    RefreshLocalDropBox(resultParameters);
                    break;
                case ListRemoteRootFolder:
                    var resultParameters = commandResultForFront.getParameters();
                    RefreshRemoteDropBox(resultParameters);
                    break;
                case ListCurrentLocalFolder:
                    var resultParameters = commandResultForFront.getParameters();
                    RefreshLocalList(resultParameters);
                    break;
                case ListCurrentRemoteFolder:
                    var resultParameters = commandResultForFront.getParameters();
                    RefreshRemoteList(resultParameters);
                    break;
                case CopyToRemote:
                    var resultParameters = commandResultForFront.getParameters();
                    // enable the copy buttons
                    ToggleDisableCopyFileDialog();
                    break;
                case CopyToLocal:
                    var resultParameters = commandResultForFront.getParameters();
                    // enable the copy buttons  
                    ToggleDisableCopyFileDialog();
                    break;
            }
        }
        if (startToTakeOutput) {
            var output = otermApplet.TakeOutput();
            if (output != null && output != "") {
                term.write(output);
            }
        }
    }
}

function LoginStatusChange(status) {
    if (otermApplet != null) {
        switch (status) {
            case "success":
                switchToTerminalMainPage();
                renderTerminal();
                startToTakeOutput = true;
                $('#loginbutton').removeAttr("disabled", "disabled")
                break;
            case "unknownhost":
                $('#loginbutton').removeAttr("disabled", "disabled")
                alert("Please check the hostname.");
                break;
            case "connectfailed":
                $('#loginbutton').removeAttr("disabled", "disabled")
                alert("Please check the port.");
                break;
            case "wrongusername":
                $('#loginbutton').removeAttr("disabled", "disabled")
                alert("Please check the username or password.");
                break;
            case "ongoing":
                break;
                // prompt a dialog then set action.
                break;
            case "signedout":
                startToTakeOutput = false;
                switchToLoginPage();
                close_file_copy_dialog();
                close_key_pair_generation_dialog();
                break;
            default:
        }
    }
}

var pollingFrontCommand;
function StartPollingFrontCommand() {
    pollingFrontCommand = setInterval(WaitForFrontCommand, 10);
}
function StopPollingFrontCommand() {
    clearInterval(pollingFrontCommand);
}