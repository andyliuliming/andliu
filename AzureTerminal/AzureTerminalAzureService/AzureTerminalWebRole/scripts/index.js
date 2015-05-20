function switchToTerminalMainPage() {
    $("#login_main_panel").css("display", "none");
    $("#terminal_main_panel").css("display", "block");
    $("#terminal_actions_panel").css("display", "block");
    document.title = $("#hostname_input").val();
}

function switchToLoginPage() {
    $("#login_main_panel").css("display", "block");
    $("#terminal_main_panel").css("display", "none");
    $("#terminal_actions_panel").css("display", "none");
    $("#terminal_actions_list").css("display", "none");
    document.title = "Azure Terminal";
}