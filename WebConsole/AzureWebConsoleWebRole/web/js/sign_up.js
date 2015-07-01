function SignUp() {
    $("#signup_button").attr("disabled", true);
    var userName = $("#sign_up_username_input").val();
    var password = $("#sign_up_password_input").val();
    var userToSignUp = { "UserName": userName, "Password": password };
    add_azurewebconsole_user(userToSignUp, function (userCreated) {
        console.dir(userCreated);
        $("#sign_up_result_status").html("Your account is creaetd:" + userCreated.UserName);

        $("#signup_button").removeAttr("disabled", "disabled")
    }, function (error) {
        $("#sign_up_result_status").html("Create failed.");
        $("#signup_button").removeAttr("disabled", "disabled")
    });
}