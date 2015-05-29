var waitForFrontCommand;
function WaitForFrontCommand() {
    if (otermApplet != null) {
        var commandForFront = otermApplet.TakeFrontCommand()
        
        if (commandForFront != null && commandForFront != "") {

            var result = commandForFront.split(":");
            if (result[1] == "Prompt") {
                alert(result[2]);
            }
            if (result[1] == "LoginStatusChange") {
                LoginStatusChange(result[2]);
            }
            if (result[1] == "Disconnected") {
                switchToLoginPage();
            }
        }

        var output = otermApplet.TakeOutput();
        if (output != null && output != "") {
            term.write(output);
        }
    }
}


function LoginStatusChange(status) {
    if (otermApplet != null) {
        switch (status) {
            case "success":
                switchToTerminalMainPage();
                renderTerminal();
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
                switchToLoginPage();
                break;
            default:
        }
    }
}


function StartPollingFrontCommand() {
    setInterval(WaitForFrontCommand, 10);
}