var usePasswordToLogin = 1;
var usePrivateKeyToLogin = 2;
var useTempKeyToLogin = 3;
var currentLoginMethod = 3;

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
            var identityReader = new FileReader();
            identityReader.onload = function (e) {
                var contents = e.target.result;
                // convert this to base 64 encoding string 
                connectToTargetLinuxVMUsePrivateKey(steppingNodes.value[0], selectedVirtualMachine, userName, contents);
            }
            identityReader.readAsText(identityFile);
        });
    }
}
function initializeLoginPanel(selectedVirtualMachine) {
    $("#hostname_input").val(selectedVirtualMachine.HostServiceName + ".cloudapp.net");
    $("#username_input").val("azureuser");
    $("#port").val(selectedVirtualMachine.Port);
    $("#login_blade").css("display", "block");

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
        $("#password").css("display", "none");
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
}
