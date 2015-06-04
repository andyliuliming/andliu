function InitializePrivateKey() {
    $("#create_keys_button").unbind("click");
    $("#create_keys_button").bind("click", function (ev) {
        if (otermApplet != null) {
            var private_key_location = $("#private_key_location").val() + "\prvkey";
            var public_key_location = $("#private_key_location").val() + "\pubkey.pub"
            var private_key_passphrase = $("#private_key_passphrase").val();
            otermApplet.SetAction("GeneratePrivateKey", [private_key_location, public_key_location, private_key_passphrase]);
        }
    });

    $("#private_key_close").unbind("click");
    $("#private_key_close").bind("click", function (ev) {

    });
    $("#private_keyf_failure_button").unbind("click");
    $("#private_keyf_failure_button").bind("click", function (ev) {

    });
}

function open_gen_privatekey_dialog() {
    $("#private_key_wizard").css("display", "block");

    $("#private_key_first_page").css("display", "block");
    $("#private_key_success_page").css("display", "none");
    $("#private_key_failure_page").css("display", "none");

}
function private_key_succeed() {
    $("#private_key_first_page").css("display", "none");
    $("#private_key_success_page").css("display", "block");
    $("#private_key_failure_page").css("display", "none");

    
}
function private_key_failed() {
    $("#private_key_first_page").css("display", "none");
    $("#private_key_success_page").css("display", "none");
    $("#private_key_failure_page").css("display", "block");
}