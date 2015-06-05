function InitializePrivateKey() {
    $("#create_keys_button").unbind("click");
    $("#create_keys_button").bind("click", function (ev) {
        if (otermApplet != null) {
            var private_key_location = $("#private_key_location").val();
            var private_key_passphrase = $("#private_key_passphrase").val();
            otermApplet.SetAction("GeneratePrivateKey", [private_key_location, private_key_passphrase]);
        }
    });

    $("#private_key_close").unbind("click");
    $("#private_key_close").bind("click", function (ev) {
        $("#private_key_wizard").css("display", "none");
    });
    $("#private_keyf_failure_button").unbind("click");
    $("#private_keyf_failure_button").bind("click", function (ev) {

    });

    $("#browse_private_key_location").unbind("click");
    $("#browse_private_key_location").bind("click", function (ev) {
        if (otermApplet != null) {
            otermApplet.SetAction("SelectFolder", [""]);
        }
    });
}

function open_gen_privatekey_dialog() {
    $("#private_key_wizard").css("display", "block");

    $("#private_key_first_page").css("display", "block");
    $("#private_key_success_page").css("display", "none");
    $("#private_key_failure_page").css("display", "none");
}
function private_key_succeed(private_key, public_key) {
    $("#private_key_first_page").css("display", "none");
    $("#private_key_success_page").css("display", "block");
    $("#private_key_failure_page").css("display", "none");

    $("#public_key_result_location").val(public_key);
    $("#private_key_result_location").val(private_key);
}
function private_key_failed() {
    $("#private_key_first_page").css("display", "none");
    $("#private_key_success_page").css("display", "none");
    $("#private_key_failure_page").css("display", "block");
}