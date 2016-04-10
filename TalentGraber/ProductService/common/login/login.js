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
        "../../common/shared/util"], function ($, ko, text, util) {
            //TODO this is not a full returnurl.
            var returnurl = $.cookie("returnuri");
            function LoginViewModel() {
                var self = this;
                this.username = ko.observable("").extend({ required: "请输入手机号" });
                this.password = ko.observable("").extend({ required: "请输入密码" });
                this.rememberMe = ko.observable(false);
                this.error = ko.observable();
                this.enableSubmit = ko.observable(true);
            }
            LoginViewModel.prototype.login = function (self, event) {
                //Trigger validateion
                self.username.valueHasMutated()
                self.password.valueHasMutated();
                if (self.username.hasError() || self.password.hasError()) {
                    return;
                }

                self.enableSubmit(false);
                util.ajax({
                    url: util.productEndpoint + "/odata/UserTokens",
                    type: "POST",
                    data: JSON.stringify({
                        UserName: self.username(),
                        Password: self.password()
                    }),
                    success: function (data) {
                        self.enableSubmit(true);
                        if (data && data.Token) {
                            $.cookie("token", data.Token, { path: '/', expires: 1 });
                            if (self.rememberMe()) {
                                $.cookie("refreshToken", data.RefreshToken, { path: '/', expires: 1 });
                            } else {
                                $.removeCookie("refreshToken");
                            }
                            $.cookie("Roles", data.Roles, { path: '/', expires: 1 });
                            $.cookie("userId", data.UserId, { path: '/', expires: 1 });
                            window.location.href = returnurl || "/";
                        }
                        else {
                            throw "Server returns an invalid token";
                        }
                    },
                    error: function (e) {
                        self.enableSubmit(true);
                        console.log(e);
                        if (e.status == 401 || e.status == 404) {
                            self.error("手机号或密码错误");
                        } else {
                            self.error("出错啦,请稍后重试");
                        }
                    }
                });
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