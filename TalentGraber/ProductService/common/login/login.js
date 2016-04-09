(function () {

    require.config({
        baseUrl: '..',
        paths: {
            jquery: "../lib/jquery",
            jcookie: "../lib/jquery.cookie",
            knockout: "../lib/knockout",
            text: "../lib/text"
        }
    });

    require(["jquery",
        "knockout",
        "text",
        "shared/util"], function ($, ko, text, util) {
            //TODO this is not a full returnurl.
            var returnurl = $.cookie("returnuri");
            function LoginViewModel() {
                var self = this;
                this.cellphone = ko.observable("").extend({ required: "请输入手机号" });
                this.password = ko.observable("").extend({ required: "请输入密码" });
                this.rememberMe = ko.observable(false);
                this.error = ko.observable();
                this.enableSubmit = ko.observable(true);
            }
            LoginViewModel.prototype.login = function (self, event) {
                //Trigger validateion
                self.cellphone.valueHasMutated()
                self.password.valueHasMutated();
                if (self.cellphone.hasError() || self.password.hasError()) {
                    return;
                }
                var token = "auth_token";
                $.cookie("cellphone", self.cellphone(), { path: '/', expires: 1 });
                $.cookie("token", token, { path: '/', expires: 1 });
                self.enableSubmit(false);
                window.location.href = returnurl || "/";
                return false;
            }
            var vm = new LoginViewModel();
            ko.applyBindings(vm);
            $(document).keypress(function (e) {
                if (e.which == 13) {
                    vm.login(vm);
                }
            });
        });
})()