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

        $("#sign_up_blade").fadeIn(200);
        $("#signup_button").unbind("click");
        $("#signup_button").bind("click", function (ev) {
            SignUp();
        });
    });

    $("#virtual_machine_navigation_sign_as_admin_in_panel").unbind("click");
    $("#virtual_machine_navigation_sign_as_admin_in_panel").bind("click", function (ev) {

    });

    $("#virtual_machine_sign_out").unbind("click");
    $("#virtual_machine_sign_out").bind("click", function (ev) {
        authContext.logOut()
    });

    var cachedToken = authContext.getCachedToken("e5740bbf-07d0-4e4c-b174-94ff7d6adbcd");
    if (cachedToken) {
        // get the virtual machines 
        getAzureVirtualMachines(cachedToken, function (azureVirtualMachinesGot) {
            initializeVirtualMachines();
            setVirtualMachines(azureVirtualMachinesGot);
            console.dir(azureVirtualMachinesGot);

            var userName = JSON.parse(Base64.decode(cachedToken.split('.')[1])).name;
            $("#signed_in_welcome > p").html("Welcome " + userName);
            $("#virtual_machines_tree").fadeIn(200);

            //hide the sign in
            $("#virtual_machine_sign_out").css("display", "block");
        }, function (error) {
            // if this is the 500 error, then just show the error:
            // if this is the 401 error, show the sign in and the sign up button.
            if (error.status == 401) {
                $("#virtual_machine_navigation_sign_in_panel").css("display", "block");
                $("#virtual_machine_navigation_sign_up_panel").css("display", "block");
            } else {
                $("#signed_in_welcome p").html("One error occured, please try again later.");
            }
        });
    } else {
        $("#virtual_machine_sign_out").css("display", "none");
        $("#virtual_machine_navigation_sign_in_panel").css("display", "block");
        $("#virtual_machine_navigation_sign_up_panel").css("display", "block");
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
    $.fn.zTree.init($("#virtual_machine_tree_ul"), setting, null);
}

function virtualMachineTreeNodeClicked(event, tree, node, clickFlat) {
    console.dir(tree);
    var selectedVirtualMachine = node.data;
    var subscriptionAccessToken = $.cookie(selectedVirtualMachine.SubscriptionId);
    initializeLoginPanel(selectedVirtualMachine);
}

function setVirtualMachines(virtualMachines) {
    var zNodes = [
            { id: 2, pId: 0, name: "Linux", open: true }
    ];

    for (var i = 0; i < virtualMachines.value.length; i++) {
        var virtualMachine = virtualMachines.value[i];
        zNodes.push({ id: zNodeIndex, pId: 2, name: virtualMachine.HostServiceName + ":" + virtualMachine.Port, open: false, data: virtualMachines.value[i] });
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