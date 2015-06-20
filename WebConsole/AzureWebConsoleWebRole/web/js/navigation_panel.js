function expandSubscriptionNode(event, treeId, treeNode, clickFlag) {
    // check whether we got the subscriptions
    console.dir(treeNode);
    // get the subscription token and try to get it, if not signed in then jump to the sign in .
    window.location = "https://login.windows.net/" + treeNode.AADTenant + "/oauth2/authorize?client_id=e5740bbf-07d0-4e4c-b174-94ff7d6adbcd&response_type=token&redirect_uri=https://localhost:63808/index.html&resource=https://management.core.windows.net/";

    // save the current 
}

var zNodeIndex = 1;
function initializeSubscriptions(subscriptions) {
    $("#virtual_machine_selections option").remove();
    for (var i = 0; i < subscriptions.value.length; i++) {
        var opt = $("<option></option>").attr("value", subscriptions.value[i].AADTenant);
        opt.html(subscriptions.value[i].AADTenant);
        $("#virtual_machine_selections").append(opt);
    }

    $("#virtual_machine_selections").unbind("change");
    $("#virtual_machine_selections").bind("change", function () {
        var subscriptionIdSelected = $("#virtual_machine_selections").val();
        $.cookie("current_subscription", subscriptionIdSelected);
        var subscriptionIdToken = $.cookie(subscriptionIdSelected);
        if (subscriptionIdToken == null) {
            window.location = "https://login.windows.net/" + subscriptionIdSelected + "/oauth2/authorize?client_id=e5740bbf-07d0-4e4c-b174-94ff7d6adbcd&response_type=token&redirect_uri=https://localhost:63808/index.html&resource=https://management.core.windows.net/";
        }
    });
}

function initializeVirtualMachines() {

    // bind the selection change event 
    // get it
    // getAzureVirtualMachines(token)
    var zNodes = [];
    var nodeIndex = 0;
    for (var i = 0; i < subscriptions.value.length; i++) {
        zNodes.push({ id: zNodeIndex, pId: 0, name: subscriptions.value[i].AADTenant, open: false, data: subscriptions.value[i] });
        zNodeIndex += 1;
    }
    var setting = {
        view: {
            selectedMulti: false
        },
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        edit: {
            enable: false
        }, callback: {
            //beforeClick: expandSubscriptionNode,
            onClick: expandSubscriptionNode
        }
    };
    $.fn.zTree.init($("#virtual_machine_tree_ul"), setting, zNodes);
}

//var virtualMachineFound = null;
//function beforeClick(treeId, treeNode, clickFlag) {

//    //className = (className === "dark" ? "" : "dark");
//    //showLog("[ " + getTime() + " beforeClick ]&nbsp;&nbsp;" + treeNode.name);
//    //return (treeNode.click != false);
//}
//function onClick(event, treeId, treeNode, clickFlag) {
//    console.dir(treeNode);
//    // connect to the specified
//    var machine = null;
//    for (var i = 0; i < virtualMachineFound.length; i++) {
//        if (virtualMachineFound[i].Id == treeNode.id) {
//            machine = virtualMachineFound[i];
//            break;
//        }
//    }
//    if (machine.OS == "Linux") {
//        // show the login dialog
//        $("#hostname_input").val(machine.HostServiceName + ".cloudapp.net");
//        $("#username_input").val("azureuser");
//        $("#port").val(machine.Port);
//        $("#login_blade").css("display", "block");
//    }
//    if (machine.OS == "Windows") {
//        //([FromUri]string subscriptionId,[FromUri] string cloudServiceName,[FromUri] string deploymentName,[FromUri]string roleInstanceName)
//        window.open("/api/WindowsRDP?subscriptionId=" + machine.SubscriptionId + "&cloudServiceName=" + machine.HostServiceName + "&deploymentName=" + machine.DeploymentName +
//"&roleInstanceName=" + machine.RoleInstanceName + "&accessToken=" + $.cookie("AccessToken"));
//    }
//    //showLog("[ " + getTime() + " onClick ]&nbsp;&nbsp;clickFlag = " + clickFlag + " (" + (clickFlag === 1 ? "single selected" : (clickFlag === 0 ? "<b>cancel selected</b>" : "<b>multi selected</b>")) + ")");
//}


//function initializeVirtialMachinePanel(token) {

//    var zNodes = [
//        { id: 1, pId: 0, name: "Windows Loading...", open: true },
//        { id: 2, pId: 0, name: "Linux Loading...", open: true }
//    ];
//    var setting = {
//        view: {
//            selectedMulti: false
//        },
//        check: {
//            enable: true
//        },
//        data: {
//            simpleData: {
//                enable: true
//            }
//        },
//        edit: {
//            enable: false
//        }, callback: {
//            beforeClick: beforeClick,
//            onClick: onClick
//        }
//    };
//    var nodeId = 3;
//    $.fn.zTree.init($("#treeDemo"), setting, zNodes);

//    getAzureVirtualMachines(token, function (virtualMachines) {
//        virtualMachineFound = virtualMachines.value;
//        zNodes[0].name = "Windows";
//        zNodes[1].name = "Linux";
//        for (var i = 0; i < virtualMachines.value.length; i++) {
//            var vm = virtualMachines.value[i];
//            if (vm.OS == "Linux") {
//                zNodes.push({ id: vm.Id, pId: 2, name: vm.HostServiceName });
//            }
//            if (vm.OS == "Windows") {
//                zNodes.push({ id: vm.Id, pId: 1, name: vm.HostServiceName });
//            }
//        }
//        $.fn.zTree.init($("#treeDemo"), setting, zNodes);
//    }, function (error) {
//        //TODO judge it's an unauthorized error.
//        ReSignIn();
//    });
//}


