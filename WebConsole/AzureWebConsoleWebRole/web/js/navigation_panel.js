﻿var zNodeIndex = 3;
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
        else {
            initializeVirtualMachines();
            getAzureVirtualMachines(subscriptionIdToken, function (virtualMachines) {
                setVirtualMachines(virtualMachines);
            });
        }
    });
}

var zNodes = [
          { id: 1, pId: 0, name: "Windows Loading...", open: true },
          { id: 2, pId: 0, name: "Linux Loading...", open: true }
];

function initializeVirtualMachines() {
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
            //beforeClick: beforeClick,
            //onClick: onClick
        }
    };
    $.fn.zTree.init($("#virtual_machine_tree_ul"), setting, zNodes);
}

function virtualMachineTreeNodeClicked(event, tree, node, clickFlat) {
    console.dir(tree);
    var virtualMachine = node.data;

    var subscriptionAccessToken = $.cookie(virtualMachine.SubscriptionId);
    if (virtualMachine.OS == "Linux") {
        getSteppingNodes(subscriptionAccessToken, function (steppingNodes) {
            console.dir(steppingNodes.value[0]);
            connectToTargetLinuxVM(steppingNodes.value[0], virtualMachine, subscriptionAccessToken);
        });
    }
    else {
        window.open("/api/WindowsRDP?subscriptionId=" + virtualMachine.SubscriptionId + "&cloudServiceName=" + virtualMachine.HostServiceName + "&deploymentName=" + virtualMachine.DeploymentName +
    "&roleInstanceName=" + virtualMachine.RoleInstanceName + "&accessToken=" + subscriptionAccessToken);
    }
}
function setVirtualMachines(virtualMachines) {
    zNodes[0].name = "Windows";
    zNodes[1].name = "Linux";

    for (var i = 0; i < virtualMachines.value.length; i++) {
        var virtualMachine = virtualMachines.value[i];
        if (virtualMachine.OS == "Linux") {
            zNodes.push({ id: zNodeIndex, pId: 2, name: virtualMachine.RoleInstanceName, open: false, data: virtualMachines.value[i] });
        } else {
            zNodes.push({ id: zNodeIndex, pId: 1, name: virtualMachine.RoleInstanceName, open: false, data: virtualMachines.value[i] });
        }
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
            onClick: virtualMachineTreeNodeClicked
        }
    };

    $.fn.zTree.init($("#virtual_machine_tree_ul"), setting, zNodes);
}