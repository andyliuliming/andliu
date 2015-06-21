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

function setVirtualMachines(virtualMachines) {
    zNodes[0].name = "Windows";
    zNodes[1].name = "Linux";

    var nodeIndex = 3;
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
            //beforeClick: expandSubscriptionNode,
            //onClick: expandSubscriptionNode
        }
    };

    $.fn.zTree.init($("#virtual_machine_tree_ul"), setting, zNodes);
}
