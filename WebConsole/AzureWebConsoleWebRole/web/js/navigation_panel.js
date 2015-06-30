var zNodeIndex = 3;

var showNavigationPanel = false;



function initializeNavigationPanel() {
    bindNewMachine();

    $("#virtual_machine_navigation_sign_in_panel").unbind("click");
    $("#virtual_machine_navigation_sign_in_panel").bind("click", function (ev) {
        authContext.login();
    });

    $("#virtual_machine_navigation_sign_up_panel").unbind("click");
    $("#virtual_machine_navigation_sign_up_panel").bind("click", function (ev) {

        $("#signup_button").unbind("click");
        $("#signup_button").bind("click", function (ev) {
            var userName = $("#sign_up_username_input").val();
            var password = $("#sign_up_password_input").val();
            var userToSignUp = { "UserName": userName, "Password": password };
            add_azurewebconsole_user(userToSignUp, function (userCreated) {
                console.dir(userCreated);
            }, function (error) { });
        });
    });

    $("#virtual_machine_navigation_sign_as_admin_in_panel").unbind("click");
    $("#virtual_machine_navigation_sign_as_admin_in_panel").bind("click", function (ev) {

    });


    var cachedToken = authContext.getCachedToken("e5740bbf-07d0-4e4c-b174-94ff7d6adbcd");
    if (cachedToken) {
        // get the virtual machines 
        getAzureVirtualMachines(cachedToken, function (azureVirtualMachinesGot) {
            console.dir(azureVirtualMachinesGot);
        }, function (error) { });
    }
}


function toggleNavigationPanel(forceStatus) {
    if (forceStatus == undefined) {
        showNavigationPanel = !showNavigationPanel;
    } else {
        showNavigationPanel = forceStatus;
    }

    if (showNavigationPanel) {
        $("#blade_panel").fadeIn(200);
        $("#virtual_machine_navigation_panel").fadeIn(200);
        
    } else {
        $("#blade_panel").fadeOut(200);
        $("#virtual_machine_navigation_panel").fadeOut(200);
    }
}


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

//var selectedVirtualMachine = null;
//function getSelectedVirtualMachine() {
//    return selectedVirtualMachine;
//}


function virtualMachineTreeNodeClicked(event, tree, node, clickFlat) {
    console.dir(tree);
    //var virtualMachine = node.data;
    var selectedVirtualMachine = node.data;
    var subscriptionAccessToken = $.cookie(selectedVirtualMachine.SubscriptionId);
    if (selectedVirtualMachine.OS == "Linux") {
        initializeLoginPanel(selectedVirtualMachine);
    }
    else {
        window.open("/api/WindowsRDP?subscriptionId=" + selectedVirtualMachine.SubscriptionId + "&cloudServiceName=" + selectedVirtualMachine.HostServiceName + "&deploymentName=" + selectedVirtualMachine.DeploymentName +
    "&roleInstanceName=" + selectedVirtualMachine.RoleInstanceName + "&accessToken=" + subscriptionAccessToken);
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

function bindNewMachine() {
    // bind the new machine button
    $("#virtual_machine_navigation_new_machine").unbind("click");
    $("#virtual_machine_navigation_new_machine").bind("click", function (ev) {
        console.dir("Jump To The Login Panel");
        initializeLoginPanel(null);
    });
}