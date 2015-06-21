﻿function getSteppingNodes(token, successFunc, errorFunc) {

    if (isDebugMode()) {
        //public long Id { get; set; }
        //public string Address { get; set; }
        var steppingNodes = { value: [{ "Id": 1, "Address": "ws://localhost:48019/" }] };
        successFunc(steppingNodes);
    } else {
        var url = getServiceBaseUri() + "/odata/SteppingNodes";
        $.ajax({
            url: url,
            type: "GET",
            beforeSend: function (request) {
                request.setRequestHeader("access_token", token);
            },
            dataType: "json",
            contentType: "application/json",
            success: function (d) {
                if (successFunc != null) {
                    successFunc(d);
                }
            },
            error: function (e) {
                if (errorFunc != null) {
                    errorFunc(e);
                }
            }
        });
    }
}

function constructTheWebSocketAddress(steppingNode, virtualMachine, userName,columns,rows, subscriptionAccessToken) {
   
    var webSocketAddress = steppingNode.Address + "/api/AccessTokenTerminalSession?hostName=" + virtualMachine.HostServiceName
        + "&userName=" + userName 
        + "&deploymentName=" + virtualMachine.DeploymentName
        + "&virtualMachineName="+virtualMachine.RoleInstanceName
        + "&subscriptionId="+   virtualMachine.SubscriptionId
        + "&port=" + virtualMachine.Port 
        + "&accessToken="+subscriptionAccessToken
        + "&columns=" + columns
        + "&rows=" + rows;
    return webSocketAddress;
}

function connectToTargetLinuxVM(steppingNode, virtualMachine, subscriptionAccessToken) {

    terminalResize();
    renderTerminal();
    var address = constructTheWebSocketAddress(steppingNode, virtualMachine, "azureuser", termWidth, termHeight, subscriptionAccessToken);
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
