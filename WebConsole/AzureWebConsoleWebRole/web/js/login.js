﻿var usePasswordToLogin = 1;
var usePrivateKeyToLogin = 2;
var useTempKeyToLogin = 3;
var currentLoginMethod = 1;
var currentSteppingNode = null;
function constructTheWebSocketAddressUseToken(steppingNode, virtualMachine, userName, columns, rows, subscriptionAccessToken) {
    var webSocketAddress = getWebSocketSchema() + steppingNode.Address + "/api/AccessTokenTerminalSession?hostName=" + virtualMachine.HostServiceName
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

function constructTheWebSocketAddressUsePassword(steppingNode, virtualMachine, userName, columns, rows, passWord, subscriptionAccessToken) {
    var webSocketAddress = getWebSocketSchema() + steppingNode.Address + "/api/PasswordTerminalSession?hostName=" + (virtualMachine.HostServiceName + ".cloudapp.net")
        + "&userName=" + userName
        + "&passWord=" + passWord
        + "&port=" + virtualMachine.Port
        + "&columns=" + columns
        + "&rows=" + rows
        + "&accessToken=" + subscriptionAccessToken;
    return webSocketAddress;
}

function constructTheWebSocketAddressUsePrivateKey(steppingNode, virtualMachine, userName, columns, rows, privateKey, passPhrase, subscriptionAccessToken) {
    var webSocketAddress = getWebSocketSchema()+steppingNode.Address + "/api/PrivateKeyTerminalSession?hostName=" + (virtualMachine.HostServiceName + ".cloudapp.net")
        + "&userName=" + userName
        + "&privateKey=" + privateKey
        + "&passPhrase=" + passPhrase
        + "&port=" + virtualMachine.Port
        + "&columns=" + columns
        + "&rows=" + rows
        + "&accessToken=" + subscriptionAccessToken;
    return webSocketAddress;
}

function connectToTargetLinuxVMUsePrivateKey(steppingNode, virtualMachine, userName, privateKey, passPhrase, subscriptionAccessToken) {
    terminalResize();
    renderTerminal();
    // we should base 64 encode the privateKey so we can keep the \r\n thing in the string.
    var encodedPrivateKey = Base64.encode(privateKey);
    var address = constructTheWebSocketAddressUsePrivateKey(steppingNode, virtualMachine, userName, termWidth, termHeight, encodedPrivateKey, passPhrase, subscriptionAccessToken);
    connectToTargetLinuxVMCommon(address);
}

function connectToTargetLinuxVMUsePassword(steppingNode, virtualMachine, userName, passWord, subscriptionAccessToken) {
    terminalResize();
    renderTerminal();
    var address = constructTheWebSocketAddressUsePassword(steppingNode, virtualMachine, userName, termWidth, termHeight, passWord, subscriptionAccessToken);
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
        term.write(result.data);
    };
    ws.onopen = function () {
        $("#login_blade").fadeOut(200);
        $("#virtual_machine_navigation_panel").fadeOut(200);
        $("#terminal_main_panel").fadeIn(200);
    };
    ws.onerror = function (error) {
        alert(error.data);
    };
    ws.onclose = function () {
        alert("Disconnected!");
    };
}

function Login() {
    var userName = $("#login_username_input").val();
    var subscriptionAccessToken = getCurrentSubscriptionAccessToken();
    if (currentLoginMethod == useTempKeyToLogin) {
        getSteppingNodes(subscriptionAccessToken, function (steppingNodes) {
            currentSteppingNode = steppingNodes.value[0];
            connectToTargetLinuxVMUseToken(steppingNodes.value[0], selectedVirtualMachine, userName, subscriptionAccessToken);
        });
    }

    if (currentLoginMethod == usePasswordToLogin) {
        getSteppingNodes(subscriptionAccessToken, function (steppingNodes) {
            var passWord = $("#login_password").val();
            currentSteppingNode = steppingNodes.value[0];
            connectToTargetLinuxVMUsePassword(steppingNodes.value[0], selectedVirtualMachine, userName, passWord, subscriptionAccessToken);
        });
    }

    if (currentLoginMethod == usePrivateKeyToLogin) {
        getSteppingNodes(subscriptionAccessToken, function (steppingNodes) {
            currentSteppingNode = steppingNodes.value[0];
            var identityFile = $("#identity_file")[0].files[0];
            var passWord = $("#login_password").val();
            var identityReader = new FileReader();
            identityReader.onload = function (e) {
                var privateKey = e.target.result;
                connectToTargetLinuxVMUsePrivateKey(steppingNodes.value[0], selectedVirtualMachine, userName, privateKey, passWord, subscriptionAccessToken);
            }
            identityReader.readAsText(identityFile);
        });
    }
}

function initializeLoginPanel(selectedVirtualMachine) {
    $("#login_hostname_input").val(selectedVirtualMachine.HostServiceName + ".cloudapp.net");
    $("#login_username_input").val("azureuser");
    $("#login_port").val(selectedVirtualMachine.Port);
    $("#login_blade").fadeIn(200);

    $("#login_password_option_button").unbind("click");
    $("#login_password_option_button").bind("click", function (ev) {
        currentLoginMethod = usePasswordToLogin;

        $(".auth_button").removeClass("auth_button_selected");
        $(ev.target).addClass("auth_button_selected");

        $("#login_private_key").css("display", "none");
        $("#login_password").css("display", "block");
        $("#login_type_label").html("Password:");
    });

    $("#login_privatekey_option_button").unbind("click");
    $("#login_privatekey_option_button").bind("click", function (ev) {
        currentLoginMethod = usePrivateKeyToLogin;
        $(".auth_button").removeClass("auth_button_selected");
        $(ev.target).addClass("auth_button_selected");

        $("#login_private_key").css("display", "block");
        $("#login_password").css("display", "block");
        $("#login_type_label").html("Private Key:");
    });

    $("#login_tempkey_option_button").unbind("click");
    $("#login_tempkey_option_button").bind("click", function (ev) {
        currentLoginMethod = useTempKeyToLogin;
        $(".auth_button").removeClass("auth_button_selected");
        $(ev.target).addClass("auth_button_selected");
        $("#login_private_key").css("display", "none");
        $("#login_password").css("display", "none");
        $("#login_type_label").html("Temp Key:");
    });


    $("#identity_file").unbind("change");
    $("#identity_file").bind("change", function (ev) {
        var file = $('#identity_file')[0].files[0];
        if (file != null) {
            $("#login_private_key_file_name_text").val(file.name);
        }
    });

    $("#login_password").unbind("keypress");
    $("#login_password").bind("keypress", function (event) {
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