var zNodeIndex = 3;
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

var selectedVirtualMachine = null;
function getSelectedVirtualMachine() {
    return selectedVirtualMachine;
}

var usePasswordToLogin = 1;
var usePrivateKeyToLogin = 2;
var useTempKeyToLogin = 3;
var currentLoginMethod = 3;

function initializeLoginPanel(selectedVirtualMachine) {
    $("#hostname_input").val(selectedVirtualMachine.HostServiceName + ".cloudapp.net");
    $("#username_input").val("azureuser");
    $("#port").val(selectedVirtualMachine.Port);
    $("#login_blade").css("display", "block");

    $("#password_option_button").unbind("click");
    $("#password_option_button").bind("click", function (e) {
        currentLoginMethod = usePasswordToLogin;

        $(".auth_button").removeClass("auth_button_selected");
        $(e.target).addClass("auth_button_selected");

        $("#login_private_key").css("display", "none");
        $("#password").css("display", "block");
        $("#auth_type_label").html("Password:");
    });

    $("#privatekey_option_button").unbind("click");
    $("#privatekey_option_button").bind("click", function (e) {
        currentLoginMethod = usePrivateKeyToLogin;
        $(".auth_button").removeClass("auth_button_selected");
        $(e.target).addClass("auth_button_selected");

        $("#login_private_key").css("display", "block");
        $("#password").css("display", "none");
        $("#auth_type_label").html("Private Key:");
    });



    $("#identity_file").unbind("change");
    $("#identity_file").bind("change", function (ev) {
        var file = $('#identity_file')[0].files[0];
        if (file != null) {
            $("#login_private_key_file_name_text").val(file.name);
        }
    });

    $("#loginbutton").unbind("click");
    $("#loginbutton").bind("click", function (ev) {
        var userName = $("#username_input").val();
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
                var identityReader = new FileReader();
                identityReader.onload = function (e) {
                    var contents = e.target.result;
                    // convert this to base 64 encoding string 
                    connectToTargetLinuxVMUsePrivateKey(steppingNodes.value[0], selectedVirtualMachine, userName, contents);
                }
                identityReader.readAsText(identityFile);
            });
        }
    });
}
function virtualMachineTreeNodeClicked(event, tree, node, clickFlat) {
    console.dir(tree);
    //var virtualMachine = node.data;
    selectedVirtualMachine = node.data;
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