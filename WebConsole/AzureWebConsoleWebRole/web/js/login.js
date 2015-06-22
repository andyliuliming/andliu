var usePasswordToLogin = 1;
var usePrivateKeyToLogin = 2;
var useTempKeyToLogin = 3;
var currentLoginMethod = 1;

function constructTheWebSocketAddressUseToken(steppingNode, virtualMachine, userName, columns, rows, subscriptionAccessToken) {
    var webSocketAddress = steppingNode.Address + "/api/AccessTokenTerminalSession?hostName=" + virtualMachine.HostServiceName
        + "&userName=" + userName
        + "&deploymentName=" + virtualMachine.DeploymentName
        + "&virtualMachineName=" + virtualMachine.RoleInstanceName
        + "&subscriptionId=" + virtualMachine.SubscriptionId
        + "&port=" + virtualMachine.Port
        + "&accessToken=" + subscriptionAccessToken
        + "&columns=" + columns
        + "&rows=" + rows;
    return webSocketAddress;
}

function constructTheWebSocketAddressUsePassword(steppingNode, virtualMachine, userName, columns, rows, passWord) {
    var webSocketAddress = steppingNode.Address + "/api/PasswordTerminalSession?hostName=" + (virtualMachine.HostServiceName + ".cloudapp.net")
       + "&userName=" + userName
       + "&passWord=" + passWord
       + "&port=" + virtualMachine.Port
       + "&columns=" + columns
       + "&rows=" + rows;
    return webSocketAddress;
}

function constructTheWebSocketAddressUsePrivateKey(steppingNode, virtualMachine, userName, columns, rows, privateKey, passPhrase) {
    var webSocketAddress = steppingNode.Address + "/api/PrivateKeyTerminalSession?hostName=" + (virtualMachine.HostServiceName + ".cloudapp.net")
   + "&userName=" + userName
   + "&privateKey=" + privateKey
   + "&passPhrase=" + passPhrase
   + "&port=" + virtualMachine.Port
   + "&columns=" + columns
   + "&rows=" + rows;
    return webSocketAddress;
}

function connectToTargetLinuxVMUsePrivateKey(steppingNode, virtualMachine, userName, privateKey, passPhrase) {
    terminalResize();
    renderTerminal();
    // we should base 64 encode the privateKey so we can keep the \r\n thing in the string.
    var encodedPrivateKey = Base64.encode(privateKey);
    var address = constructTheWebSocketAddressUsePrivateKey(steppingNode, virtualMachine, userName, termWidth, termHeight, encodedPrivateKey, passPhrase);
    connectToTargetLinuxVMCommon(address);
}

function connectToTargetLinuxVMUsePassword(steppingNode, virtualMachine, userName, passWord) {
    terminalResize();
    renderTerminal();
    var address = constructTheWebSocketAddressUsePassword(steppingNode, virtualMachine, userName, termWidth, termHeight, passWord);
    connectToTargetLinuxVMCommon(address);
}

function connectToTargetLinuxVMUseToken(steppingNode, virtualMachine, userName, subscriptionAccessToken) {
    terminalResize();
    renderTerminal();
    var address = constructTheWebSocketAddressUseToken(steppingNode, virtualMachine, userName, termWidth, termHeight, subscriptionAccessToken);
    connectToTargetLinuxVMCommon(address);
}

var ws = null;
function connectToTargetLinuxVMCommon(address) {
    ws = new WebSocket(address);
    ws.onmessage = function (result) {
        //alert(result.data);
        term.write(result.data);
    };
    ws.onopen = function () {
        //alert("Connected!");
        $("#login_blade").css("display", "none");
        $("#terminal_main_panel").css("display", "block");
    };
    ws.onerror = function (error) {
        alert(error.data);
    };
    ws.onclose = function () {
        alert("Disconnected!");
    };
}

function Login() {
    var userName = $("#username_input").val();
    var subscriptionAccessToken = $.cookie(selectedVirtualMachine.SubscriptionId);
    if (currentLoginMethod == useTempKeyToLogin) {
        getSteppingNodes(subscriptionAccessToken, function (steppingNodes) {
            connectToTargetLinuxVMUseToken(steppingNodes.value[0], selectedVirtualMachine, userName, subscriptionAccessToken);
        });
    }

    if (currentLoginMethod == usePasswordToLogin) {
        getSteppingNodes(subscriptionAccessToken, function (steppingNodes) {
            var passWord = $("#password").val();
            connectToTargetLinuxVMUsePassword(steppingNodes.value[0], selectedVirtualMachine, userName, passWord);
        });
    }

    if (currentLoginMethod == usePrivateKeyToLogin) {
        getSteppingNodes(subscriptionAccessToken, function (steppingNodes) {
            var identityFile = $("#identity_file")[0].files[0];
            var passWord = $("#password").val();
            var identityReader = new FileReader();
            identityReader.onload = function (e) {
                var privateKey = e.target.result;
                // convert this to base 64 encoding string 
                connectToTargetLinuxVMUsePrivateKey(steppingNodes.value[0], selectedVirtualMachine, userName, privateKey, passWord);
            }
            identityReader.readAsText(identityFile);
        });
    }
}

function initializeLoginPanel(selectedVirtualMachine) {
    $("#hostname_input").val(selectedVirtualMachine.HostServiceName + ".cloudapp.net");
    $("#username_input").val("azureuser");
    $("#port").val(selectedVirtualMachine.Port);
    $("#login_blade").fadeIn(200);

    $("#password_option_button").unbind("click");
    $("#password_option_button").bind("click", function (ev) {
        currentLoginMethod = usePasswordToLogin;

        $(".auth_button").removeClass("auth_button_selected");
        $(ev.target).addClass("auth_button_selected");

        $("#login_private_key").css("display", "none");
        $("#password").css("display", "block");
        $("#auth_type_label").html("Password:");
    });

    $("#privatekey_option_button").unbind("click");
    $("#privatekey_option_button").bind("click", function (ev) {
        currentLoginMethod = usePrivateKeyToLogin;
        $(".auth_button").removeClass("auth_button_selected");
        $(ev.target).addClass("auth_button_selected");

        $("#login_private_key").css("display", "block");
        $("#password").css("display", "block");
        $("#auth_type_label").html("Private Key:");
    });

    $("#tempkey_option_button").unbind("click");
    $("#tempkey_option_button").bind("click", function (ev) {
        currentLoginMethod = useTempKeyToLogin;
        $(".auth_button").removeClass("auth_button_selected");
        $(ev.target).addClass("auth_button_selected");
        $("#login_private_key").css("display", "none");
        $("#password").css("display", "none");
        $("#auth_type_label").html("Temp Key:");
    });


    $("#identity_file").unbind("change");
    $("#identity_file").bind("change", function (ev) {
        var file = $('#identity_file')[0].files[0];
        if (file != null) {
            $("#login_private_key_file_name_text").val(file.name);
        }
    });

    $("#password").unbind("keypress");
    $("#password").bind("keypress", function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            Login();
        }
    });
    $("#loginbutton").unbind("click");
    $("#loginbutton").bind("click", function (ev) {
        Login();
    });
    $("#cancel_login_button").unbind("click");
    $("#cancel_login_button").bind("click", function (ev) {
        $("#login_blade").fadeOut(200);
    });
}
