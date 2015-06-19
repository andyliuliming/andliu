function getAzureVirtualMachines(token, successFunc, errorFunc) {
    var url = serviceBaseUri + "/odata/AzureVirtualMachines";
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

var virtualMachineFound = null;
function beforeClick(treeId, treeNode, clickFlag) {

    //className = (className === "dark" ? "" : "dark");
    //showLog("[ " + getTime() + " beforeClick ]&nbsp;&nbsp;" + treeNode.name);
    //return (treeNode.click != false);
}
function onClick(event, treeId, treeNode, clickFlag) {
    console.dir(treeNode);
    // connect to the specified
    var machine = null;
    for (var i = 0; i < virtualMachineFound.length; i++) {
        if (virtualMachineFound[i].Id == treeNode.id) {
            machine = virtualMachineFound[i];
            break;
        }
    }
    if (machine.OS == "Linux") {
        // show the login dialog
        $("#hostname_input").val(machine.HostServiceName + ".cloudapp.net");
        $("#username_input").val("azureuser");
        $("#port").val(machine.Port);
        $("#login_blade").css("display", "block");
    }
    if (machine.OS == "Windows") {
        //([FromUri]string subscriptionId,[FromUri] string cloudServiceName,[FromUri] string deploymentName,[FromUri]string roleInstanceName)
        window.open("/api/WindowsRDP?subscriptionId=" + machine.SubscriptionId + "&cloudServiceName=" + machine.HostServiceName + "&deploymentName=" + machine.DeploymentName +
"&roleInstanceName=" + machine.RoleInstanceName + "&accessToken=" + $.cookie("AccessToken"));
    }
    //showLog("[ " + getTime() + " onClick ]&nbsp;&nbsp;clickFlag = " + clickFlag + " (" + (clickFlag === 1 ? "single selected" : (clickFlag === 0 ? "<b>cancel selected</b>" : "<b>multi selected</b>")) + ")");
}


function initializeVirtialMachinePanel(token) {

    var zNodes = [
        { id: 1, pId: 0, name: "Windows Loading...", open: true },
        { id: 2, pId: 0, name: "Linux Loading...", open: true }
    ];

    var nodeId = 3;
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);

    getAzureVirtualMachines(token, function (virtualMachines) {
        virtualMachineFound = virtualMachines.value;
        zNodes[0].name = "Windows";
        zNodes[1].name = "Linux";
        for (var i = 0; i < virtualMachines.value.length; i++) {
            var vm = virtualMachines.value[i];
            if (vm.OS == "Linux") {
                zNodes.push({ id: vm.Id, pId: 2, name: vm.HostServiceName });
            }
            if (vm.OS == "Windows") {
                zNodes.push({ id: vm.Id, pId: 1, name: vm.HostServiceName });
            }
        }
        $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    }, function (error) {
        //TODO judge it's an unauthorized error.
        ReSignIn();
    });
}

